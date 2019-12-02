<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\User;
use Illuminate\Auth\AuthenticationException;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their validation and creation.
    |
    */

    /**
     * @param  \App\Http\Requests\Auth\RegisterRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(RegisterRequest $request)
    {
        $token = \Auth::login(
            User::create(array_merge($request->validated(), [
                'password' => bcrypt($request->password),
            ]))
        );

        if ($token === false) {
            throw new AuthenticationException();
        }

        return response()->json(array_merge(compact('token'), [
            'user' => \Auth::user(),
        ]));
    }
}
