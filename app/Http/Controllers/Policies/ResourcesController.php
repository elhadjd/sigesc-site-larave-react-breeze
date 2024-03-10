<?php

namespace App\Http\Controllers\Policies;

use App\Http\Controllers\Controller;
use App\Models\LearningCenter;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ResourcesController extends Controller
{
    function index($local,$resource) : Response {
        return Inertia::render("resources/$resource",[
            'local'=>$local
        ]);
    }

    function learningCenter(LearningCenter $learning,$local) : Response {
        $learnings =  $learning->with(['translate'=>function($postTranslate){
            $postTranslate->where('local',app()->getLocale())->get();
        }])->get();

        return Inertia::render('resources/learningCenter',
        [
            'local'=>$local,
            'data'=>$learnings
        ]);
    }
}
