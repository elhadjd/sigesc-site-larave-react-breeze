<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class pricesController extends Controller
{
    function index() {
        return Inertia::render('prices/index');
    }
}
