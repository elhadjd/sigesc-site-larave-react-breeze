<?php

namespace App\Http\Controllers\public;

use App\Events\contactFormEvent;
use App\Events\UserEvent;
use App\Http\Controllers\Controller;
use App\Http\Controllers\NewsletterController;
use App\Mail\autoPassword;
use App\Mail\ContactFormMail;
use App\Mail\EmailVerify;
use App\Models\costumerContact;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class contactController extends Controller
{
    function index() {
        return Inertia::render('contact/index');
    }

    function senMessage(Request $request) {
        $request->validate([
            'name'=>"required|string",
            'surname'=>'required|string',
            'email'=>'required|email',
            'phone'=>'required|string',
            'message'=>'required|string|min:20',
            'newsletter'=>'required|boolean',
        ]);

        DB::transaction(function() use ($request) {
            $data = [
                'name'=>$request->name,
                'surname'=>$request->surname,
                'email'=>$request->email,
                'phone'=>$request->phone,
                'messages'=>$request->message,
            ];

            if($request->account){
                $this->newUser($request);
            }

            if($request->newsletter){
                $newsletter = new NewsletterController;
                $newsletter->create($request->email,$request->name,$request->surname);
            }

            costumerContact::create($request->all());

            event(new contactFormEvent($data));
        });

        return $this->RespondSuccess('E-mail enviado com sucesso!');
    }

    function newUser($data) {
        DB::transaction(function () use ($data){
            $password = Str::random(10);
            $user = User::create([
                'socialType'=>"sisgesc.net",
                'name' => $data->name,
                'accountType'=>'client',
                'email' => $data->email,
                'password' => Hash::make($password),
            ]);

            $user->userProfile()->create([
                'surname'=>$data->surname,
                'country'=>'United State',
            ]);

            $autoPasswordData = [
                'name'=>$user->name,
                'email'=>$user->email,
                'password'=>$password
            ];

            Mail::to($user->email)->send(new autoPassword($autoPasswordData));

            event(new Registered($user));

            $data = [
                'userName'=>$user->name,
                'id'=>$user->id,
            ];

            Mail::to($user->email)->send(new EmailVerify($data));

            Auth::login($user);
        });
    }
}
