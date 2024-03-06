<?php

namespace App\Http\Controllers\shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class shopController extends Controller
{
    function index($local,$page=null) : Response {
        if(!$page) return Inertia::render('shop/index',['local'=>$local]);
        return Inertia::render("shop/$page",['local'=>$local]);
    }
}
