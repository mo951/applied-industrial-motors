<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{User, UserVerify};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Http\Resources\UserResource;
use App\Http\Requests\{ProfileRequest, RegisterRequest};
use App\Repositories\{FileRepository};
use Mail;

class ApiAuthController extends Controller
{
    protected $file;
    public function __construct(FileRepository $file)
    {
        $this->file = $file;
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if ($user->is_email_verified == 1) {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('DubaiPermit Token Grant')->accessToken;
                    $response = ['token' => $token, 'user' => $user];
                    return response($response, 200);
                } else {
                    $response = ["message" => "Password mismatch"];
                    return response($response, 422);
                }
            } else {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('DubaiPermit Token Grant')->accessToken;
                    $response = ['token' => $token, 'user' => $user];
                    return response($response, 200);
                }
                $response = ["message" => "Password doesn't match"];
                return response($response, 422);
            }
        } else {
            $response = ["message" => 'User does not exist'];
            return response($response, 422);
        }
    }

    public function logout(Request $request){
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }

    public function updateprofile(ProfileRequest $request){
        $arr = [
            'name' => $request->name,
            'email' => $request->email,
        ];
        if (isset($request->password)) {
            if (strlen($request->password) < 60) {
                $arr['password'] = Hash::make($request->password);
            }
        }
        
        $data = User::where('id', $request->user()->id)->update($arr);
        if($request->file){
            $this->file->create([$request->file], 'users', $request->user()->id, 1);
        }
        return new UserResource(User::find($request->user()->id));
    }
    public function sendOtp(Request $request){
        $otp = random_int(1000, 9999);
        $token = request()->bearerToken();
        UserVerify::create([
            'user_id' => $request->user()->id,
            'token' => $token,
            'otp' => $otp
        ]);
        Mail::send('emails.emailVerificationEmail', ['token' => $token, 'otp' => $otp], function ($message) use ($request) {
            $message->to($request->user()->email);
            $message->subject('Email Verification Mail');
        });
        $user_detail = User::where('id', $request->user()->id)->first();

        $response = ['token' => $token, 'user' => $user_detail];
        return response($response, 200);
    }
    public function register(RegisterRequest $request)
    {
        $otp = random_int(1000, 9999);
        $user = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'role_id' => 2,
        ]);

        $token = $user->createToken('DubaiPermit Token Grant')->accessToken;
        UserVerify::create([
            'user_id' => $user->id,
            'token' => $token,
            'otp' => $otp
        ]);

        Mail::send('emails.emailVerificationEmail', ['token' => $token, 'otp' => $otp], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Email Verification Mail');
        });

        $user_detail = User::where('id', $user->id)->first();

        $response = ['token' => $token, 'user' => $user_detail];
        return response($response, 200);
    }

    public function verifyAccount(Request $request, $otp)
    {
        $token = $request->bearerToken();
        $verifyUser = UserVerify::where('user_id', $request->user()->id)->where('otp', $otp)->first();
        $date = date('Y/m/d H:i:s');
        $message = 'Sorry your email cannot be identified.';
        if (!is_null($verifyUser)) {
            $user = $verifyUser->user;
            if (!$user->is_email_verified) {
                $verifyUser->user->is_email_verified = 1;
                $verifyUser->user->email_verified_at = $date;
                $verifyUser->user->save();
                $message = "Your e-mail is verified. You can now login.";
            } else {
                $message = "Your e-mail is already verified. You can now login.";
            }
        }

        $user_detail = User::where('id', $request->user()->id)->first();

        return response(['token' => $token, 'user' => $user_detail, 'message' => $message], 200);
    }
}
