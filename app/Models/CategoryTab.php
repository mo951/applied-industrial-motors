<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryTab extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
        'tab_id',
    ];
    public function tab(){
        return $this->belongsTo(Tab::class);
    }
}
