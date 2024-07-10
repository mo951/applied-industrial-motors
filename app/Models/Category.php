<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $appends = ['image_url', 'type'];
    protected $with = ['children'];
    protected $fillable = [
        'name', 'slug', 'is_active', 'parent_id', 'is_featured'
    ];
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function children(){
        return $this->hasMany(Category::class,'parent_id','id');
    }
    public function childrenactive(){
        return $this->hasMany(Category::class,'parent_id','id')->where('is_active',1);
    }
    public function parent(){
        return $this->hasOne(Category::class,'id','parent_id');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            // return 'https://randomuser.me/api/portraits/men/85.jpg';
            return '';
        }
    }

    public function getTypeAttribute()
    {
        return $this->parent_id == 0 ? 'Main Category' : 'Sub Category';
    }


    public function products()
    {
        return $this->belongsToMany(Product::class, 'category_product', 'category_id', 'product_id');
    }

    
}
