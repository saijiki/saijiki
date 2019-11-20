<?php

namespace App\Http\Controllers;

use App\Senryu;

class OgpController extends Controller
{
    /**
     * @param  \App\Senryu  $senryu
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Senryu $senryu)
    {
        return view('ogp', compact('senryu'));
    }
}
