<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use MeCab\Tagger;

class GenerateMorphemes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'morphemes:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $mecab = new Tagger(['-d' => `echo -n $(mecab-config --dicdir)/mecab-ipadic-neologd`]);

        $data = \Storage::get('python/all_haikus.txt');
        $data = preg_split("/(?:\n|\r|\r\n)+/", $data);

        $bar = $this->output->createProgressBar();
        $bar->setBarCharacter('-');
        $bar->setEmptyBarCharacter('|');
        $bar->setProgressCharacter('>');
        $bar->setBarWidth(50);

        $result = [
            //
        ];

        foreach ($bar->iterate($data) as $value) {
            foreach ($mecab->parseToNode($value) as $node) {
                $surface = $node->getSurface();
                $feature = $node->getFeature();

                [$part_of_speech, , , , , , , $reading, ] = array_pad(explode(',', $feature), 9, '*');

                if ($part_of_speech === '記号') {
                    continue;
                }

                if ($reading === '*') {
                    continue;
                }

                if (!\Arr::has($result, $surface)) {
                    $result[$surface] = array_merge(compact('surface', 'reading', 'part_of_speech'), [
                        'prev' => [],
                        'next' => [],
                    ]);
                }

                while (($node = $node->getPrev()) && !\Arr::has($result, $node->getSurface()));

                if ($node) {
                    if (!in_array($surface, $result[$node->getSurface()]['next'], true)) {
                        $result[$node->getSurface()]['next'][] = $surface;
                    }

                    if (!in_array($node->getSurface(), $result[$surface]['prev'], true)) {
                        $result[$surface]['prev'][] = $node->getSurface();
                    }
                }
            }
        }

        \Storage::put('python/morphemes.json', json_encode($result, JSON_UNESCAPED_UNICODE));
    }
}
