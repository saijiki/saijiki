<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\AuthenticationException;

class GuestLoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Guest Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles log a guest user in of the application.
    |
    */

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke()
    {
        $token = \Auth::setTTL(1440)->login(
            User::create([
                'twitter_id' => null,
                'name' => 'ゲスト',
                'email' => null,
                'password' => null,
                'avatar' => null,
            ])
        );

        if ($token === false) {
            throw new AuthenticationException();
        }

        return response()->json(array_merge(compact('token'), [
            'user' => \Auth::user(),
        ]));
    }
}
