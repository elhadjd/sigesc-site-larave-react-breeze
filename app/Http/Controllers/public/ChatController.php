<?php
namespace App\Http\Controllers\public;

use App\Events\ChatEvent;
use App\Http\Controllers\Controller;
use App\Mail\NewChatMail;
use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($local, $sessionUser=null)
    {
        $chat = Chat::where('session',$sessionUser)->first();
        if($chat && Chat::where('session',$sessionUser)->first()->state) {
            cookie()->queue('chatSession',$sessionUser);
            return ['data'=>$chat,'session'=>$sessionUser,'user'=>'support'];
        }
        $session = Str::random(100);
        $userId = null;
        if(Auth::check()) $userId = Auth::user()->id;
        $chat = Chat::create([
            'user_id' => $userId,
            'session'=> $session,
        ]);
        $chat->conversations()->create([
            'message'=>"Olá seja bem ao chat ao vivo, diga-nos em que posemos ser util.",
            'user'=>'support'
        ]);
        cookie()->queue('chatSession',$session);

        Mail::to('sigesctec@gmail.com')->send(new NewChatMail(['session'=>$chat->session]));

        return ['session'=>$session,'user'=>'user','data'=>$chat->fresh()];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request,$local,$session)
    {
        $request->validate([
            'message'=>'required|string',
            'session'=>"required|string",
            'user'=>'required|string'
        ]);

        $chat = Chat::where('session',$session)->first();
        $chat->conversations()->create(['message'=>$request->message,'user'=>$request->user]);

        event(new ChatEvent($chat->fresh()));
        return $chat;

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(['session'=>'required|string']);
        $chat = Chat::where('session',$request->session);
        if($chat){
            $chat->update([
                'state'=>false
            ]);
        }

        return $this->RespondSuccess('Conversa encerrada com sucesso!');
    }

    /**
     * Display the specified resource.
    */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }
}
