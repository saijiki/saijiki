<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * ユーザを一件更新する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        if ($request->image_file_url) {
            $filename = (now()->format("YmdHisv") . '.png');
            \Storage::put("public/avatars/{$filename}", file_get_contents($request->image_file_url));
            \Auth::user()->avatar = asset("storage/avatars/{$filename}");
        }

        if ($request->new_password) {
            if (\Auth::user()->password && !\Hash::check($request->old_password, \Auth::user()->password)) {
                return response()->json([
                    'errors' => [
                        'old_password' => [
                            '旧パスワードが間違っています。',
                        ],
                    ],
                ], 422);
            }

            \Auth::user()->password = bcrypt($request->new_password);
        }

        \Auth::user()->fill($request->only(['name', 'email']));
        \Auth::user()->save();

        return response()->json(\Auth::user());
    }
}
