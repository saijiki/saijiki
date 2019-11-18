<?php

namespace App\Http\Controllers;

use Socialite;

class SnsBaseController extends Controller{
  // 1. Socialiteのドライバーにリダイレクトさせる
  public function getAuth() {
    $user = Socialite::driver('twitter')->redirect();

    return $user->getTargetUrl();
  }

  // 2. Twitterから戻ってくる際のエンドポイント作成
  public function authCallback() {
    // 3. ユーザー情報の取得（ここでめちゃくちゃ詰んだ！）
    $user_info = $this->getProviderUserInfo('twitter');

    $twitterUser = Socialite::driver('twitter')->user();
    $user->getId();
    $user->getNickname();
    $user->getName();
  }

  // 3. ユーザー情報の取得（ここでめちゃくちゃ詰んだ！）
  private function getProviderUserInfo($provider){
    switch ($provider) {
      case 'twitter':
      return  Socialite::driver($provider)->user();
      default:
      return null;
    }
  }
}
