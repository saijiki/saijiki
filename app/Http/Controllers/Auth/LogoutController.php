<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Logout Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles log the user out of the application.
    |
    */

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke()
    {
        if (\Auth::check()) {
            \Auth::logout();
        }

        return response()->json(null);
    }
}
