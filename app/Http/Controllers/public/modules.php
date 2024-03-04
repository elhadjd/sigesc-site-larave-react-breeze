<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class modules extends Controller
{
    function index($local,$module) : Response {
        return Inertia::render("modules/$module",[
            'local'=>request()->getLocale()
        ]);
    }
}
