<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Senryu;

class SenryuController extends Controller
{
    /**
     * 川柳一覧を取得する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $param = $request->all();

        $builder = Senryu::select('id', 'path');

        // 順序
        if($request->has('order')) {
            if($param['order'] == "人気順") {
                $builder->orderByDesc('good');
            }
        }

        // 期間
        if($request->has('period')) {

            if ($param['period'] == '今日') {
                $dt = \Date::now();
                $senryus = $builder->where('created_at', '>=', $dt);
            } 
            else if ($param['period'] == '今週') {
                $dt = \Date::today()->subWeek();
                $senryus = $builder->where('created_at', '>=', $dt);
            }
            else if ($param['period'] == '今月') {
                $dt = \Date::today()->subMonday();
                $senryus = $builder->where('created_at', '>=', $dt);
            }
        }

        // キーワード検索
        if($request->has('word')) {
           $senryus = $builder->where('body', 'like', '%' . $param['word'] . '%');
        }

        $senryus = $builder->orderByDesc('created_at')
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
