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

Route::get('/login', 'HomeController@login')->name('login');
Route::post('/check-login', 'HomeController@checkLogin')->name('check.login');
Route::get('/logout', 'HomeController@logout')->name('logout');


Route::get('/home', 'HomeController@home')->middleware('auth')->name('home');