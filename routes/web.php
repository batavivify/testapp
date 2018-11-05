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
    Route::get('/login', 'AuthController@login')->name('login');
    Route::post('/check-login', 'AuthController@checkLogin')->name('check.login');
    Route::get('/user', 'UserController@create')->name('user.create');
    Route::post('/user', 'UserController@store')->name('user.store');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/home', 'HomeController@home')->name('home');
    Route::get('/logout', 'AuthController@logout')->name('logout');
});