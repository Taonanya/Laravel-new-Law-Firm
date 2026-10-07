<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/practice-areas', [HomeController::class, 'practiceAreas'])->name('practice-areas');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/attorneys', [HomeController::class, 'attorneys'])->name('attorneys');
Route::get('/process', [HomeController::class, 'process'])->name('process');
Route::get('/testimonials', [HomeController::class, 'testimonials'])->name('testimonials');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::post('/contact', [HomeController::class, 'contactSubmit'])->name('contact.submit');
