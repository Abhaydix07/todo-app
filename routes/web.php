<?php

use App\Http\Controllers\AudioController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Models\Todo;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $todos = Todo::all();
    return view('welcome', compact('todos'));
});

Route::resource('todos',TodoController::class);


