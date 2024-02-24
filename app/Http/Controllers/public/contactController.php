<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class contactController extends Controller
{
    function index() {
        return Inertia::render('contact/index');
    }
}
