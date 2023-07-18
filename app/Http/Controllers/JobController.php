<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Mail\JobApplyByMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class JobController extends Controller
{
    public function applyJob (Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'experience' => 'required',
        ]);
        // Mail::to($request->email)->send(new JobApplyByMail($request->all()));
        $data = 'Job or training sent successfully ';
        return response()->json([
            'data' =>$data,
            'success' => true,
        ]);
    }
    public function sendMessage (Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'contactMessage' => 'required',
        ]);
        Mail::to($request->email)->send(new ContactMail($request->all()));
        $data = 'Message sent successfully ';
        return response()->json([
            'data' =>$data,
            'success' => true,
        ]);
    }
}
