<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Senryu;

class SenryuController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api')->only('store', 'update', 'destroy');
    }

    /**
     * 川柳一覧を取得する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $param = $request->all();

        $builder = Senryu::select([
            'id',
            'generated_image_url',
            'created_at',
            'updated_at',
        ]);

        // 順序
        if($request->has('order')) {
            if($param['order'] == "人気順") {
                $builder->orderByDesc('good');
            }
        }

        // 期間
        if($request->has('period')) {

            if ($param['period'] == '今日') {
                $dt = \Date::today();
                $senryus = $builder->where('created_at', '>=', $dt);
            }
            else if ($param['period'] == '今週') {
                $dt = \Date::today()->subWeek();
                $senryus = $builder->where('created_at', '>=', $dt);
            }
            else if ($param['period'] == '今月') {
                $dt = \Date::today()->subMonth();
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
        if ($request->has('image_file_url')) {
            [$keyword, $filename] = Senryu::imageAnalysis($request->get('image_file_url'));

            return response()->json(Senryu::generate($keyword, asset("storage/uploaded/{$filename}"), $request->get('is_public')));
        } else {
            return response()->json(Senryu::generate($request->get('keyword')));
        }
    }

    /**
     * 川柳を一件取得する。
     *
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Senryu $senryu)
    {
        return response()->json($senryu->append('goods', 'is_liked'));
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
        if ($senryu->is_liked) {
            $senryu->users()->detach(\Auth::id());
        } else {
            $senryu->users()->attach(\Auth::id());
        }

        return response()->json($senryu->append('goods', 'is_liked'));
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
