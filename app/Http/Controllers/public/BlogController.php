<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use App\Models\post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    function index(post $postModel,$local, $post=null) : Response {

        if(!$post) {
            $posts = $postModel->with(['postTranslate' => function($postTranslate){
                $postTranslate->where('local',app()->getLocale())->get();
            }])->get();
            return Inertia::render('blog/index',[
                'local'=>$local,
                'posts'=>$posts
            ]);
        }

        $posts =  $postModel->with(['postTranslate',function($postTranslate){
            $postTranslate->where('local',app()->getLocale())->get();
        }])->whereId($post)->first();
        return Inertia::render("blog/$post",[
            'local'=>$local,
            'posts'=>$posts
        ]);
    }
}
