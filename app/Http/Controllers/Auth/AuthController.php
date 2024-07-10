<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{User};
use Str;
use Auth;
use Hash;
use Session;
use App\Mail\SignUp;
use Carbon\Carbon; 
use DB; 
use App\Mail\MarkupMail;
use App\Mail\ForgetPassword;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|min:3|max:48',
            'last_name' => 'required|string|min:3|max:48',
            'phone' => 'required|string|min:3|max:48',
            'email' => 'required|unique:users|max:100',
            'password' => 'required|string|min:3|max:32',
        ]);

        $user = User::create([
            'name' => $request->first_name.' '.$request->last_name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => 2,
        ]);

        if($user){
            Mail::to($request->email)->send(new SignUp());

            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                return redirect()->intended('/')->withSuccess('You have Successfully loggedin');
            }
        } 
        else{
            return redirect()->back();
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('/')->withSuccess('You have Successfully loggedin');
        }
        else{
            return redirect()->back()->withErrors(['error' => 'Invalid credentials. Please try again.']);
        }
    }

    public function logout(Request $request) 
    {
        Auth::logout();
        return redirect('/');
    }

    public function submitForgetPasswordForm(Request $request){
        $request->validate([
            'email' => 'required|email|exists:users',
        ]);
  
        $token = Str::random(64);

        DB::table('password_resets')->insert([
            'email' => $request->email, 
            'token' => $token, 
            'created_at' => Carbon::now()
        ]);

        // Mail::send('emails.forgetPassword', ['token' => $token], function($message) use($request){
        //     $message->to($request->email);
        //     $message->subject('Reset Password');
        // });
        Mail::to($request->email)->send(new ForgetPassword($token));

        return back()->with('message', 'We have e-mailed your password reset link!');
    }

    public function showResetPasswordForm($token) { 
        return view('user.forget_pass_link', ['token' => $token]);
    }

    public function submitResetPasswordForm(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required'
        ]);

        $updatePassword = DB::table('password_resets')
                            ->where([
                            'email' => $request->email, 
                            'token' => $request->token
                            ])
                            ->first();
       
        if(!$updatePassword){
            return back()->withInput()->with('error', 'Invalid token!');
        }

        $user = User::where('email', $request->email)
                    ->update(['password' => Hash::make($request->password)]);

        DB::table('password_resets')->where(['email'=> $request->email])->delete();
        return redirect('login')->with('password_changed', 'Your password has been changed!');
    }

    public function loginUser(Request $request)
    {
        
        parse_str($request->formdata, $formData);
        $credentials = [
            'email' => $formData['email'],
            'password' => $formData['password']
        ];
        if (Auth::attempt($credentials)) {
            return response()->json(['status' => 'success', 'message' => 'You have Successfully loggedin.', 'url' => '/'], 200);
        }
        else{
            return response()->json(['status' => 'error', 'message' => 'Invalid Credentials, please try again.']);

        }
    }

    public function userRegistration(Request $request){
        parse_str($request->formdata, $formData);
        $validator = \Illuminate\Support\Facades\Validator::make($formData, [
            'email' => 'required|unique:users|max:100',
            'password' => 'required|string|min:6|max:32|confirmed',
            'password_confirmation' => 'required|string|min:6|max:32',
            'first_name' => 'required',
            'last_name' => 'required|string|min:3|max:48',
            'phone' => 'required|string|min:3|max:48',
            'company' => 'required|string|min:3|max:48',
            'address' => 'required|string|min:3|max:48',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'email' => $formData['email'], 
            'password' => Hash::make($formData['password']),
            'password_confirmation' => $formData['password_confirmation'],
            'first_name' => $formData['first_name'],
            'middle_name' => $formData['middle_name'],
            'last_name'=> $formData['last_name'],
            'fax'=> $formData['fax'],
            'phone'=> $formData['phone'],
            'company'=> $formData['company'],
            'address'=> $formData['address'],
            'state'=> $formData['state'],
            'city'=> $formData['city'],
            'zip'=> $formData['zip'],
            'country'=> $formData['country'],
        ]);
        
        if($user){
            return response()->json(['status' => 'success', 'message' => 'Registration successfully, please sign in to continue.']);
        }
    }
}
