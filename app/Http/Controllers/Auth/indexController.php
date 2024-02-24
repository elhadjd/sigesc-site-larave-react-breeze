<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class indexController extends Controller
{
    function index() {
        return Inertia::render('auth/index',
        [
            "local"=>request()->getLocale()
        ]
    );
    }
}
