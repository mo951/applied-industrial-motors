<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted'];
    protected $fillable = [
        'name', 'subject', 'phone', 'email', 'message', 'is_read', 'inquiry_uri'
    ];
    public function getCreatedAtFormattedAttribute(){
        return date('l, F d, Y \a\t h:i a', strtotime($this->created_at));
    }
}
