<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tab extends Model
{
    use HasFactory;
    protected $appends = ['image_url', 'part_number_image_url', 'right_image_url'];
    protected $with = ['categories'];
    protected $fillable = [
        'standard_features_heading',
        'standard_features'
    ];
    public function categories(){
        return $this->hasMany(CategoryTab::class);
    }
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function part_number_image(){
        return $this->hasOne(File::class, 'fileable_id', 'id')->where('table_name', 'tabs_part_numbers_desc');
    }
    public function right_image(){
        return $this->hasOne(File::class, 'fileable_id', 'id')->where('table_name', 'right_tabs');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            return '';
        }
    }
    public function getPartNumberImageUrlAttribute(){
        if($this->part_number_image){
            return asset($this->part_number_image->url);
        }else{
            return '';
        }
    }
    public function getRightImageUrlAttribute(){
        if($this->right_image){
            return asset($this->right_image->url);
        }else{
            return '';
        }
    }
}
