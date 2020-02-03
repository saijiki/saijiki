<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class TwitterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        try {
            $user = \Socialite::driver('twitter')->user();

            if (User::where('twitter_id', $user->getId())->exists()) {
                $token = \Auth::login(
                    User::where('twitter_id', $user->getId())->first()
                );
            } else {
                $token = \Auth::login(
                    User::create([
                        'twitter_id' => $user->getId(),
                        'name' => $user->getName(),
                        'email' => $user->getEmail(),
                        'password' => null,
                        'avatar' => $user->getAvatar(),
                    ])
                );
            }

            if ($token === false) {
                throw new AuthenticationException();
            }

            return response()->json(array_merge(compact('token'), [
                'user' => \Auth::user(),
            ]));
        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'url' => \Socialite::driver('twitter')->redirect()->getTargetUrl(),
            ]);
        }
    }
}
