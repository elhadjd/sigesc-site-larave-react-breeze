<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class pricesController extends Controller
{
    function index() {
        return Inertia::render('prices/index',[
            'local'=>request()->getLocale()
        ]);
    }

    function newCompanyPage($local,$plan):Response {
        return Inertia::render('prices/Company',[
            'local'=>request()->getLocale(),
            'plan'=>$plan
        ]);
    }
}
