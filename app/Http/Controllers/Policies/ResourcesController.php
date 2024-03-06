<?php

namespace App\Http\Controllers\Policies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ResourcesController extends Controller
{
    function index($local,$resource) : Response {
        return Inertia::render("policies/$resource",[
            'local'=>$local
        ]);
    }
}
