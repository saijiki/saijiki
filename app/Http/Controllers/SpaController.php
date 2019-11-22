<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     * @return \Illuminate\View\View|\Illuminate\Contracts\View\Factory
     */
    public function __invoke()
    {
        return view('spa');
    }
}
