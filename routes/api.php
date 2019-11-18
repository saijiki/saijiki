<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')->namespace('Auth')->prefix('auth')->name('auth.')->group(function () {
    Route::post('login', 'LoginController')->name('login');
});

Route::apiResource('senryus', 'SenryuController')->parameters([
    'senryus' => 'senryu',
]);
