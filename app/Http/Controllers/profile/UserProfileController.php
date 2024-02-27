<?php

namespace App\Http\Controllers\profile;

use App\classes\UploadImages;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('profile/index',[
            'local'=>request()->getLocale()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(UserProfile $userProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request,$local,User $user)
    {
        $request->validate([
            'email' => 'required|email',
            'name' => 'required|string|max:255',
            'user_profile.phone' => 'nullable|string|max:15',
            'user_profile.country' => 'required|string|max:255',
            'user_profile.address' => 'required|string|max:255',
            'user_profile.image' => 'required|string',
        ]);


        $imageName = str_replace('/u','',$request->user_profile['image']);
        if($user->email != $request->email) return $this->RespondError('Atenção não podes modificar o email neste formulário');
        if($request->user_profile['image'] !== $user->userProfile()->first()->image){
            $upload = new UploadImages();
            $imageName = $upload->Upload("users/images/$user->id",$request->user_profile['image']);

        }

        $user->update($request->all());

        $user->userProfile()->update([
            'image'=>"/$imageName",
            'address'=>$request->user_profile['address'],
            'phone'=>$request->user_profile['phone'],
            'country'=>$request->user_profile['country'],
        ]);
        return $this->RespondSuccess('Success',$user->fresh());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserProfile $userProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
