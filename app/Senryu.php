<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
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
     * 川柳を生成する。
     *
     * @param  array  $keywords
     * @return self
     */
    public static function generate(array $keywords)
    {
        $morphemes = json_decode(\Storage::get('python/morphemes.json'), true);

        list('body' => $sentence_1, 'keywords' => $keywords) = self::generateSentence(5, $morphemes, $keywords);
        list('body' => $sentence_2, 'keywords' => $keywords) = self::generateSentence(7, $morphemes, $keywords);
        list('body' => $sentence_3, 'keywords' => $keywords) = self::generateSentence(5, $morphemes, $keywords);

        $filename = self::generateImage($sentence_1, $sentence_2, $sentence_3);

        return self::create([
            'body' => "{$sentence_1} {$sentence_2} {$sentence_3}", 'path' => asset("storage/{$filename}")
        ]);
    }

    /**
     * 指定された文字数の句を生成する。
     *
     * @param  int    $chars
     * @param  array  $morphemes
     * @param  array  $keywords
     * @return array
     */
    private static function generateSentence(int $chars, array $morphemes, array $keywords)
    {
        if (!Arr::has($keywords, 'prev') && !Arr::has($keywords, 'next')) {
            $keywords = [
                'prev' => $keywords,
                'next' => $keywords,
            ];
        }

        $surface = '';
        $reading = '';

        while (true) {
            if (isset($morpheme)) {
                $morpheme = $morphemes[$keyword = Arr::random($morpheme['next'])];
            } else {
                $morpheme = $morphemes[$keyword = Arr::random($keywords['next'])];
            }

            if (self::calcMora($reading) + self::calcMora($morpheme['reading']) > $chars) {
                continue;
            }

            $surface .= $keyword;
            $reading .= $morpheme['reading'];

            if (self::calcMora($reading) === $chars) {
                break;
            }
        }

        return ['body' => $surface, 'keywords' => Arr::only($morpheme, ['prev', 'next'])];
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
        $sentence = str_replace('ヮ', '', $sentence);

        return mb_strlen($sentence);
    }
}
