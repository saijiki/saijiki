<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $senryus = Senryu::select('id', 'path')
            ->orderByDesc('created_at')
            ->paginate(6);

        return response()->json($senryus);
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
