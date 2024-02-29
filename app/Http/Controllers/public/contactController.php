<?php

namespace App\Http\Controllers\public;

use App\Events\UserEvent;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class contactController extends Controller
{
    function index() {
        return Inertia::render('contact/index');
    }

    function senMessage() {
        event(new UserEvent(Auth::user()->id));
    }
}
