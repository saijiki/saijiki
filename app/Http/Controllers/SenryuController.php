<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use App\Senryu;

class SenryuController extends Controller
{
    /**
     * 川柳一覧を取得する。
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Senryu::paginate(6));
    }

    /**
     * 川柳一覧を取得する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\JsonResponse
     */
    public function card(Request $request, Senryu $senryu)
    {
      if ($request->header('User-Agent') === 'Twitterbot/1.0') {
        return view('twitter', compact('senryu'));
      }else{
        return view('welcome');
      }
    }

    /**
     * 川柳を新規登録する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        return response()->json(Senryu::generate($request->all()));
    }

    /**
     * 川柳を一件取得する。
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Senryu $senryu)
    {
        return response()->json($senryu);
    }

    /**
     * 川柳を一件更新する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Senryu $senryu)
    {
        return response()->json($senryu);
    }

    /**
     * 川柳を一件削除する。
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Senryu $senryu)
    {
        return response()->json($senryu);
    }
}
