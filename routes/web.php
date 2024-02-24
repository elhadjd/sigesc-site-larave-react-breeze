<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\indexController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\public\contactController;
use App\Http\Controllers\public\paymentsController;
use App\Http\Controllers\public\pricesController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::middleware('local')->group(function(){

    Route::prefix('{local}')->group(function(){

        Route::get('/', [DashboardController::class,'index']);

        Route::controller(AuthenticatedSessionController::class)->group(function(){
            Route::post('/loginWithSocial','authenticateWithSocial');
            Route::post('authenticate','store');
        });

        Route::controller(contactController::class)->group(function(){
            Route::get('/contact','index');
        });

        Route::controller(pricesController::class)->group(function(){
            Route::get('/prices','index');
        });

        Route::controller(paymentsController::class)->group(function(){
            Route::get('/payments/{fiscalIdentification?}/{email?}','index');
        });

        Route::controller(indexController::class)->group(function(){
            Route::get('/auth','index');
        });
    });

    Route::fallback(function(){
        return Inertia::render('dashboard')->toResponse(request())->setStatusCode(404);
    });

});

