<?php

namespace App;

use Aws\Exception\AwsException;
use Aws\Rekognition\RekognitionClient;
use Aws\Translate\TranslateClient;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Symfony\Component\Process\Process;

class Senryu extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'diff_from_created_at_to_now',
        'diff_from_updated_at_to_now',
    ];

    /**
     * Get the user that owns the senryu.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The users that belong to the senryu.
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * @param  string|null  $value
     * @return string|null
     */
    public function getUploadedImageUrlAttribute(?string $value)
    {
        return ($this->is_public ? $value : null);
    }

    /**
     * @return int
     */
    public function getGoodsAttribute()
    {
        return $this->users()->count();
    }

    /**
     * @return bool
     */
    public function getIsLikedAttribute()
    {
        return $this->users()->whereKey(\Auth::id())->exists();
    }

    /**
     * @return string
     */
    public function getDiffFromCreatedAtToNowAttribute()
    {
        $now = now();

        foreach (['日' => 'diffInDays', '時間' => 'diffInHours', '分' => 'diffInMinutes'] as $unit => $method) {
            if (($diff = $now->$method($this->created_at)) === 0) {
                continue;
            }

            return "{$diff}{$unit}前";
        }

        return "{$now->diffInSeconds($this->created_at)}秒前";
    }

    /**
     * @return string
     */
    public function getDiffFromUpdatedAtToNowAttribute()
    {
        $now = now();

        foreach (['日' => 'diffInDays', '時間' => 'diffInHours', '分' => 'diffInMinutes'] as $unit => $method) {
            if (($diff = $now->$method($this->updated_at)) === 0) {
                continue;
            }

            return "{$diff}{$unit}前";
        }

        return "{$now->diffInSeconds($this->updated_at)}秒前";
    }

    /**
     * 川柳を生成する。
     *
     * @param array  $keywords
     * @param string $uploaded_image_url
     * @param bool   $is_public
     * @return self
     */
    public static function generate(array $keywords, string $uploaded_image_url = null, bool $is_public = true)
    {
        $morphemes = json_decode(\Storage::get('python/morphemes.json'), true);

        for ($i = 0, $j = 1; $i < 3; $i++, $j++) {
            try {
                list('keywords' => ${"keywords_{$j}"}, 'surface' => ${"sentence_{$j}"}) = self::generateSentence(
                    [5, 7, 5][$i],
                    $morphemes,
                    (${"keywords_{$i}"} ?? $keywords)
                );
            } catch (\Exception $e) {
                if ($i < 1) {
                    throw $e;
                }

                $i -= 2;
                $j -= 2;
            }
        }

        $keyword = collect($keywords)->first(function ($keyword) use ($sentence_1) {
            return \Str::startsWith($sentence_1, $keyword);
        });

        $filename = self::generateImage($keyword, $sentence_1, $sentence_2, $sentence_3);

        return self::create([
            'user_id' => \Auth::id(),
            'body' => "{$sentence_1} {$sentence_2} {$sentence_3}",
            'uploaded_image_url' => $uploaded_image_url,
            'generated_image_url' => asset("storage/generated/{$filename}"),
            'is_public' => $is_public,
        ]);
    }

    /**
     * 画像からキーワードを生成する。
     *
     * @param string $photo
     * @return array
     */
    public static function imageAnalysis($photo)
    {
        $options = [
            'region' => config('aws.default_region'),
            'version' => 'latest',
            'credentials' => [
                'key' => config('aws.access_key_id'),
                'secret' => config('aws.secret_access_key'),
            ]
        ];

        // TODO:jpgファイルなどをpngに変換しても読み照れる？。
        // 読み取れなければ、変更
//        $mime = (new \finfo(FILEINFO_EXTENSION))->buffer($photo);

        $photo = file_get_contents($photo);

        //　ファイル名取得
        $timestamp = \Date::now()->format("YmdHisv");
        $filename = "{$timestamp}.png";
        \Storage::put("public/uploaded/{$filename}", $photo);

        $rekognition = new RekognitionClient($options);

        // AWS Rekognition => 画像ラベル検出
        $keywords = $rekognition->detectLabels(array(
                'Image' => array(
                    'Bytes' => $photo,
                ),
                'Attributes' => array('Name')
            )
        );
        // Label →　Nameのみ配列に変換
        $keywords = collect($keywords["Labels"])->pluck('Name');

        //　翻訳
        $keywords = self::keywordTranslate($keywords, $options);

        return [$keywords, $filename];
    }

    /**
     * 指定された文字数の句を生成する。
     *
     * @param int $chars
     * @param array $morphemes
     * @param array $keywords
     * @param string $surface
     * @param string $reading
     * @return array
     */
    private static function generateSentence(int $chars, array $morphemes, array $keywords, string $surface = '', string $reading = '')
    {
        if (!\Arr::has($keywords, 'prev') || !\Arr::has($keywords, 'next')) {
            $keywords = [
                'prev' => $keywords,
                'next' => $keywords,
            ];
        }

        if (self::calcMora($reading) === $chars) {
            return compact('keywords', 'surface');
        }

        shuffle($keywords['prev']);
        shuffle($keywords['next']);

        while (true) {
            $prev = array_shift($keywords['prev']);
            $next = array_shift($keywords['next']);

            if (is_null($next)) {
                throw new \Exception('Array of next morphemes is empty.');
            }

            if (!\Arr::has($morphemes, $next)) {
                continue;
            }

            $morpheme = $morphemes[$next];

            if (self::calcMora($reading) === 0 && $morpheme['part_of_speech'] === '助詞') {
                continue;
            }

            if (self::calcMora($reading) === 0 && $morpheme['part_of_speech'] === '形容詞') {
                continue;
            }

            if (self::calcMora($reading) + self::calcMora($morpheme['reading']) > $chars) {
                continue;
            }

            $surface .= $morpheme['surface'];
            $reading .= $morpheme['reading'];

            try {
                return self::generateSentence($chars, $morphemes, $morpheme, $surface, $reading);
            } catch (\Exception $e) {
                //
            }
        }
    }

    /**
     * 指定された川柳の画像を生成する。
     *
     * @param string $keyword
     * @param string $sentence_1 初句
     * @param string $sentence_2 二句
     * @param string $sentence_3 結句
     * @return string
     */
    private static function generateImage(string $keyword,string $sentence_1, string $sentence_2, string $sentence_3)
    {
        $process = new Process(['python3', 'saijiki_img.py', $keyword, $sentence_1, $sentence_2, $sentence_3]);
        $process->setWorkingDirectory(storage_path('app/python'));
        $process->run();

        return $process->getOutput();
    }

    /**
     * 拍を数える。
     *
     * @param string $sentence
     * @return int
     */
    private static function calcMora(string $sentence)
    {
        $sentence = str_replace('ァ', '', $sentence);
        $sentence = str_replace('ィ', '', $sentence);
        $sentence = str_replace('ゥ', '', $sentence);
        $sentence = str_replace('ェ', '', $sentence);
        $sentence = str_replace('ォ', '', $sentence);
        $sentence = str_replace('ャ', '', $sentence);
        $sentence = str_replace('ュ', '', $sentence);
        $sentence = str_replace('ョ', '', $sentence);

        return mb_strlen($sentence);
    }

    /**
     * キーワードを英語から日本語へ翻訳する
     *
     * @param \Illuminate\Support\Collection $keywords 検出ラベル
     * @param array $options AWS設定
     * @return array
     */
    private static function keywordTranslate(Collection $keywords, array $options)
    {
        $sourceLanguage = 'en';
        $targetLanguage = 'ja';

        //　キーワードランダム抽出
        $keywords = $keywords->map(function ($keyword) {
            return strtolower($keyword);
        });

        // AWS Translate呼び出し
        $translate = new TranslateClient($options);

        try {
            $translate_text = $translate->translateText([
                'SourceLanguageCode' => $sourceLanguage,
                'TargetLanguageCode' => $targetLanguage,
                'Text' => $keywords->shuffle()->join(','),
            ])
                ->get('TranslatedText');

            $keywords = collect(explode(', ', $translate_text))->map(function ($word) {
                $word = preg_replace('/だ$/', '', $word);
                $word = preg_replace('/て$/', '', $word);
                $word = preg_replace('/に$/', '', $word);
                $word = preg_replace('/を$/', '', $word);
                $word = preg_replace('/は$/', '', $word);

                return $word;
            });

            \Log::debug(json_encode($keywords, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        } catch (AwsException $e) {
            //
        }

        return $keywords->all();
    }
}
