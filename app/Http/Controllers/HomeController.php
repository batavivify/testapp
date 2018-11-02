<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{

    public function welcome()
    {
        return view('welcome');
    }

    public function login()
    {

            return view('login');

    }

    public function home()
    {
        return view('homepage', [
            "user" => Auth::user(),
        ]);
    }

    public function checkLogin(Request $request)
    {
        $this->validate($request, [
            'email'         => 'required|email',
            'password'      => 'required|alphaNum|min:6'
        ]);

        $user_data = array(
            'email' => $request->get('email'),
            'password' =>$request->get('password')
        );

        if(Auth::attempt($user_data)) {
            return redirect()->route('home');
        } else {
            return back()->with('error', 'Ooups, it seems like I dont know you :( ');
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('welcome');
    }

    public function register()
    {
        return view('register');
    }


}
