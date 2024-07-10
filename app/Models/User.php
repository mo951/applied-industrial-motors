<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Laravel\Sanctum\HasApiTokens;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable;

    protected $with = ['permissions'];
    protected $appends = ['image_url'];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'first_name',
        'middle_name',
        'last_name',
        'phone',
        'email',
        'password',
        'password_confirmation',
        'cell_phone',
        'direct_phone',
        'fax',
        'company',
        'address',
        'state',
        'city',
        'zip',
        'country',
        'api_token',
        'role_id',
        'is_email_verified'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function permissions()
    {
        return $this->hasManyThrough(RolePermission::class, Role::class,'id','role_id','role_id');
    }
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            return url('assets/images/default.png');
        }
        // return 'https://randomuser.me/api/portraits/men/85.jpg';
    }
    public function role(){
        return $this->hasOne(Role::class,'id','role_id');
    }
}
