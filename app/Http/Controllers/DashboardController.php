<?php

namespace App\Http\Controllers;

use App\Events\emailVerifiedEvent;
use App\Events\NewUserNotification;
use App\Events\UserEvent;
use App\Events\welcomeUserEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index(Request $request) {
        return Inertia::render("dashboard",[
            "local"=>$request->getLocale()
        ]);
    }
}
