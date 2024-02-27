<?php

namespace App\Http\Controllers\public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

trait RespondMessages
{
    public function RespondSuccess($message,$data = null)
    {
        return response()->json([
            'type' => 'success',
            'message' => $message,
            'data'=> $data
        ]);
    }


    public function RespondError($message, $data = null)
    {
        return response()->json([
            'type' => 'error',
            'message' => $message,
            'data'=> $data
        ]);
    }

    public function RespondWarn($message, $data = null)
    {
        return response()->json([
            'type' => 'warn',
            'message' => $message,
            'data'=> $data
        ]);
    }

    public function RespondInfo($message , $data = null)
    {
        return response()->json([
            'type' => 'info',
            'message' => $message,
            'data'=> $data
        ]);
    }
}
