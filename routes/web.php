<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Policies\ResourcesController;
use App\Http\Controllers\public\contactController;
use App\Http\Controllers\public\paymentsController;
use App\Http\Controllers\public\pricesController;
use App\Http\Controllers\profile\UserProfileController;
use App\Http\Controllers\public\BlogController;
use App\Http\Controllers\public\ChatController;
use App\Http\Controllers\public\clientDepoimentsController;
use App\Http\Controllers\public\CompanyController;
use App\Http\Controllers\public\modules;
use App\Http\Controllers\shop\shopController;
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
require __DIR__.'/auth.php';

    Route::prefix('{local?}')->group(function(){

        Route::get('/', [DashboardController::class,'index']);

        Route::controller(AuthenticatedSessionController::class)->group(function(){
            Route::get('/auth','create')->name('auth');
            Route::get('/loginWithSocial/{drive}','authenticateWithSocial')->middleware('guest');
            Route::post('authenticate','store')->middleware('guest');
            Route::get('authenticate/logout','destroy');
        });

        Route::controller(modules::class)->group(function(){
            Route::get('modules/{module}','index')->name('modules');
        });

        Route::get('/verificar-email/{id}',[VerifyEmailController::class,'__invoke']);

        Route::get('notify-user-to-verify-email/{id}',[VerifyEmailController::class,'notifyUserToVerifyEmail']);

        Route::middleware('auth')->group(function(){
            Route::controller(UserProfileController::class)->group(function(){
                Route::post('editUserInfo/{user}','edit');
                Route::get('profile','index');
            });
            Route::get('/verificar-email',[VerifyEmailController::class,'emailVerifyPage']);


        });

            Route::controller(RegisteredUserController::class)->group(function(){
                Route::get('auth/register','create');
                Route::post('auth/registerUser','store');
            });

        Route::controller(contactController::class)->group(function(){
            Route::post('contact/sendMessage','senMessage');
            Route::get('/contact','index');
        });

        Route::controller(pricesController::class)->group(function(){
            Route::get('/prices','index');
            Route::get('/CreateCompany/{plan}','newCompanyPage');
        });


        Route::controller(CompanyController::class)->group(function(){
            Route::post('/register/company','register');
        });

        Route::controller(paymentsController::class)->group(function(){
            Route::get('/payments/{fiscalIdentification?}/{email?}','index');
        });

        Route::controller(ResourcesController::class)->group(function(){
            Route::get('resources/{resource}','index')->name('resources');
        });

        Route::controller(ChatController::class)->group(function(){
            Route::get('new-chat/{sessionUser?}','index');
            Route::post('/chat-conversation/{session}','create');
            Route::post('chat-end','store');
        });

        Route::controller(clientDepoimentsController::class)->group(function(){
            Route::get('clients/{page}','index')->name('clients');
        });

        Route::controller(BlogController::class)->group(function(){
            Route::get('blog/{blog?}','index')->name('blog');
        });

        Route::controller(shopController::class)->group(function(){
            Route::get('shop/{page?}','index')->name('shop');
        });
    });
    Route::fallback(function(){
        return Inertia::render('dashboard')->toResponse(request())->setStatusCode(404);
    });

});

