<?php

namespace App\Http\Controllers;


use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function create()
    {
        return view('register', [
            "countries" => User::COUNTRIES,
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email'         => 'required|email|unique:users',
            'password'      => 'required|min:6',
            'first_name'    => 'required|alpha|min:2',
            'last_name'     => 'required|alpha|min:2',
            'company'       => 'required|min:2',
            'country'       => 'required',
        ]);

        $user = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'company' => $request['company'],
            'country' => $request['country'],
        ]);

        Auth::login($user);

        return redirect()->route('home');
    }

}
