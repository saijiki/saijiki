<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return view('spa');
    }
}
