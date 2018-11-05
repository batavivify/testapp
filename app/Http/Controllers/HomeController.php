<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{

    public function welcome()
    {
        return view('welcome');
    }

    public function home()
    {
        return view('homepage', [
            "user" => Auth::user(),
        ]);
    }

}
