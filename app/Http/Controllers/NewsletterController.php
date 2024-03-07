<?php

namespace App\Http\Controllers;

use App\Mail\welcomeNewsletter;
use App\Models\newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($email,$name,$surname)
    {
        $data = [
            'name'=>$name,
            'surname'=>$surname,
            'email'=>$email
        ];
        if(!newsletter::where('email',$email)->first()){
            newsletter::create($data);
            Mail::to($email)->send(new welcomeNewsletter($data));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(newsletter $newsletter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(newsletter $newsletter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, newsletter $newsletter)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(newsletter $newsletter)
    {
        $newsletter->destroy($newsletter->id);
    }
}
