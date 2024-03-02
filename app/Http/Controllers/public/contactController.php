<?php

namespace App\Http\Controllers\public;

use App\Events\UserEvent;
use App\Http\Controllers\Controller;
use App\Mail\ContactFormMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class contactController extends Controller
{
    function index() {
        return Inertia::render('contact/index');
    }

    function senMessage(Request $request) {
        $data = [
            'name'=>$request->name,
            'surname'=>$request->surname,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'messages'=>$request->message,
        ];

        Mail::to($request->email)->send(new ContactFormMail($data));

        return response()->json(['message' => 'E-mail enviado com sucesso!']);

        event(new UserEvent(Auth::user()->id));
    }
}
