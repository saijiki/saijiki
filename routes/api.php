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

Route::namespace('Auth')->prefix('auth')->name('auth.')->group(function () {
    Route::post('login/guest', 'GuestLoginController')->name('login.guest');

    Route::post('login', 'LoginController')->name('login');
    Route::post('register', 'RegisterController')->name('register');
    Route::post('logout', 'LogoutController')->name('logout');

    Route::get('login/twitter', 'TwitterController')->name('login.twitter');
});

Route::match(['put', 'patch'], 'users', 'UserController@update')->name('users.update');

Route::apiResource('users.senryus', 'UserSenryuController')->only('index')->parameters([
    'senryus' => 'senryu',
]);

Route::apiResource('senryus', 'SenryuController')->parameters([
    'senryus' => 'senryu',
]);
