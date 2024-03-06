<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    function index($local, $post=null) : Response {
        if(!$post) return Inertia::render('blog/index',['local'=>$local]);
        return Inertia::render("blog/$post",['local'=>$local]);
    }
}
