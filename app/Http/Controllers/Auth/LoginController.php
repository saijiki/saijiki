<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application.
    |
    */

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $token = \Auth::attempt($request->only('email', 'password'));

        if ($token === false) {
            throw new AuthenticationException();
        }

        return response()->json(array_merge(compact('token'), [
            'user' => \Auth::user(),
        ]));
    }
}
