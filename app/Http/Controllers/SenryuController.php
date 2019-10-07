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
     * 川柳を新規登録する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $process = new Process(['python3', 'saijiki.py', $request->word]);
        $process->setWorkingDirectory(storage_path('app/python'));
        $process->run();

        $senryu = Senryu::create([
            'body' => $process->getOutput(),
            'path' => '/',
        ]);

        return response()->json($senryu);
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
