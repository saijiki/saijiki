<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('senryus/{senryu}', 'OgpController')->middleware([
    App\Http\Middleware\RedirectIfNotCrawler::class,
]);

Route::get('{any}', 'SpaController')->where('any', '^(?!(api|storage)($|/)).*');
