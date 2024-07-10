<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Downloadable extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];
    public function pdfs(){
        return $this->hasMany(DownloadablePdf::class);
    }
}
