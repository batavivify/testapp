<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
        $countries = ['Serbia', 'Bosnia and Herzegovina', 'Montenegro', 'Macedonia', 'Romania', 'Bulgaria'];

        return view('register', [
            "countries" => $countries
            ]);
    }

    public function userStore(Request $request)
    {

        $this->validate($request, [
            'email'         => 'required|email|unique:users',
            'password'      => 'required|min:6',
            'first_name'    => 'required|alpha|min:2',
            'last_name'     => 'required|alpha|min:2',
            'company'       => 'required|min:2',
            'country'       => 'required',
        ]);

        $data = $request->all();

        $get_password = $data['password'];
        $password = Hash::make($get_password);

        $user = new User;

        $user->email = $data['email'];
        $user->password = $password;
        $user->first_name = $data['first_name'];
        $user->last_name = $data['last_name'];
        $user->company = $data['company'];
        $user->country = $data['country'];

        $user->save($data);

        Auth::login($user);

        return redirect()->route('home');


    }


}
