<?php

namespace App\Console\Commands;

use App\Senryu;
use Illuminate\Console\Command;

class DeleteSenryus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'senryu:delete';

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
     * @return void
     */
    public function handle()
    {
        Senryu::doesntHave('users')->where('created_at', '<=', now()->subDays(3))->delete();
    }
}
