<?php

namespace App\Http\Controllers\Policies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class privacyController extends Controller
{
    function index() {
        return Inertia::render('policies/privacy',[
            'local'=>request()->getLocale()
        ]);
    }
}