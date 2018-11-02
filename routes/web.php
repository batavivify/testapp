<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'homeController@welcome')->name('welcome');

Route::group(['middleware' => ['guest']], function () {
    Route::get('/login', 'HomeController@login')->name('login');
    Route::get('/register', 'HomeController@register')->name('register');
    Route::post('/check-login', 'HomeController@checkLogin')->name('check.login');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/home', 'HomeController@home')->name('home');
    Route::get('/logout', 'HomeController@logout')->name('logout');
});