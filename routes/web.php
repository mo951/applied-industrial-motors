<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Front\CategoryController;
use App\Http\Controllers\SearchProductController;
use Illuminate\Support\Facades\Route;

Route::get('/backend/{any?}', function () {
    return view('backend');
})->where('any', '.*');

Route::get('/', [HomeController::class, 'index'])->name('welcome');
Route::get('/downloads', [HomeController::class, 'downloads'])->name('downloads');
Route::get('/news', [HomeController::class, 'news'])->name('news');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/contact/{location}', [HomeController::class, 'contactLocation'])->name('contactLocation');
Route::get('/contact/{location}', [HomeController::class, 'contactLocation'])->name('contactLocation');
Route::get('/category/{slug}', [CategoryController::class, 'index'])->name('category.index');
Route::get('/product/{slug}', [CategoryController::class, 'products'])->name('product.index');
Route::get('/product-detail/{slug}', [CategoryController::class, 'product_detail'])->name('product.show');

Route::get('/search-motor',  function (){ return view('product.show_motor'); })->name('search.motor');

Route::post('/search-product', [SearchProductController::class, 'searchProduct'])->name('search.product');

Route::get('/motors/{slug}', [CategoryController::class, 'show'])->name('product.show');


Route::post('/signup', [AuthController::class, 'userRegistration'] )->name('register');
Route::post('/login', [AuthController::class, 'loginUser']  )->name('login');
Route::get('/logout', [AuthController::class, 'logout']  )->name('logout');
