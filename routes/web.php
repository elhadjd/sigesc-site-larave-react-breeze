<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\indexController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\public\contactController;
use App\Http\Controllers\public\paymentsController;
use App\Http\Controllers\public\pricesController;
use App\Http\Controllers\profile\UserProfileController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;
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
Route::get('en/auth/callback',[AuthenticatedSessionController::class,'authenticateWithSocialCallback']);

Route::middleware('local')->group(function(){

    Route::prefix('{local}')->group(function(){

        Route::get('/', [DashboardController::class,'index']);

        Route::controller(AuthenticatedSessionController::class)->group(function(){
            Route::get('/auth','create')->name('auth');
            Route::get('/loginWithSocial/{drive}','authenticateWithSocial')->middleware('guest');
            Route::post('authenticate','store')->middleware('guest');
            Route::get('authenticate/logout','destroy');
        });

        Route::middleware('auth')->group(function(){

            Route::controller(UserProfileController::class)->group(function(){
                Route::post('editUserInfo/{user}','edit');
                Route::get('profile','index');
            });
            Route::get('/verifyUserEmail',[VerifyEmailController::class,'__invoke']);
        });

        Route::controller(RegisteredUserController::class)->group(function(){
            Route::post('/registerUser','store');

        });

        Route::controller(contactController::class)->group(function(){
            Route::post('contact/sendMessage','senMessage');
            Route::get('/contact','index');
        });

        Route::controller(pricesController::class)->group(function(){
            Route::get('/prices','index');
        });

        Route::controller(paymentsController::class)->group(function(){
            Route::get('/payments/{fiscalIdentification?}/{email?}','index');
        });
    });

    Route::fallback(function(){
        return Inertia::render('dashboard')->toResponse(request())->setStatusCode(404);
    });

});

