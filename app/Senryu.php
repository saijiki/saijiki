<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Symfony\Component\Process\Process;

class Senryu extends Model
{
    use SoftDeletes;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'created_at_history',
        'updated_at_history',
    ];

    /**
     * @return string
     */
    public function getCreatedAtHistoryAttribute()
    {
        $methods = [
            '日前' => 'diffInDays',
            '時間前' => 'diffInHours',
            '分前' => 'diffInMinutes',
            '秒前' => 'diffInSeconds',
        ];

        foreach ($methods as $key => $method) {
            if ($history = \Date::now()->$method($this->created_at)) {
                return "{$history}{$key}";
            }
        }
    }

    /**
     * @return string
     */
    public function getUpdatedAtHistoryAttribute()
    {
        $methods = [
            '日前' => 'diffInDays',
            '時間前' => 'diffInHours',
            '分前' => 'diffInMinutes',
            '秒前' => 'diffInSeconds',
        ];

        foreach ($methods as $key => $method) {
            if ($history = \Date::now()->$method($this->updated_at)) {
                return "{$history}{$key}";
            }
        }
    }

    /**
     * 川柳を生成する。
     *
     * @param  array  $keywords
     * @return self
     */
    public static function generate(array $keywords)
    {
        $morphemes = json_decode(\Storage::get('python/morphemes.json'), true);

        for ($i = 0, $j = 1; $i < 3; $i++, $j++) {
            try {
                list('keywords' => ${"keywords_{$j}"}, 'surface' => ${"sentence_{$j}"}) = self::generateSentence([5, 7, 5][$i], $morphemes, ${"keywords_{$i}"} ?? $keywords);
            } catch (\Exception $e) {
                if ($i < 1) {
                    throw $e;
                }

                $i -= 2;
                $j -= 2;
            }
        }

        $filename = self::generateImage($sentence_1, $sentence_2, $sentence_3);

        return self::create([
            'body' => "{$sentence_1} {$sentence_2} {$sentence_3}", 'path' => asset("storage/{$filename}"),
        ]);
    }

    /**
     * 指定された文字数の句を生成する。
     *
     * @param  int     $chars
     * @param  array   $morphemes
     * @param  array   $keywords
     * @param  string  $surface
     * @param  string  $reading
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
     * @param  string  $sentence_1 初句
     * @param  string  $sentence_2 二句
     * @param  string  $sentence_3 結句
     * @return string
     */
    private static function generateImage(string $sentence_1, string $sentence_2, string $sentence_3)
    {
        $process = new Process(['python3', 'saijiki_img.py', $sentence_1, $sentence_2, $sentence_3]);
        $process->setWorkingDirectory(storage_path('app/python'));
        $process->run();

        return $process->getOutput();
    }

    /**
     * 拍を数える。
     *
     * @param  string  $sentence
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
}
