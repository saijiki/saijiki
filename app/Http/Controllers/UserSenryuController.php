<?php

namespace App\Http\Controllers;

use App\Senryu;
use App\User;
use Illuminate\Http\Request;

class UserSenryuController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request, User $user)
    {
        $builder = Senryu::query()->select([
            'id',
            'generated_image_url',
            'created_at',
            'updated_at',
        ]);

        if ($request->type === 'いいねした句') {
            $builder->whereHas('users', function ($query) use ($user) {
                $query->whereKey($user);
            });
        } else {
            $builder->whereHas('user', function ($query) use ($user) {
                $query->whereKey($user);
            });
        }

        return response()->json($builder->orderByDesc('created_at')->paginate(6));
    }
}
