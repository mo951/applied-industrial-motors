<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $appends = ['image_url'];

    // category_id column is deprecated
    protected $fillable = [
        'category_id', 'product_name', 'product_slug', 'discount', 'price', 
        'description', 'is_active', 'type', 'is_featured', 'other_selections',
        'quantity_discounts_tier_id',
    ];

    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            return '';
        }
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
