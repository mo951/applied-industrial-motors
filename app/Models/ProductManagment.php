<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductManagment extends Model
{
    use HasFactory;
    protected $appends = ['image_url', 'image_url_three_drawing', 'image_url_datasheet'];

    public $fillable = ['id', 'motorgroup_id', 'framesize_id', 'horsepower_id', 'speed_id', 'voltage_id', 'price', 'multiplier_code', 'mounting', 'motor_name', 'slug', 'category_ids', 'created_at', 'updated_at'];

    public function image(){
        return $this->morphOne(File::class,'fileable');
    }

    public function two_d_drawing_image(){
        return $this->hasOne(File::class, 'fileable_id', 'id')->where('table_name', 'product_managments_two_d_drawing');
    }
    public function three_d_drawing_image(){
        return $this->hasOne(File::class, 'fileable_id', 'id')->where('table_name', 'product_managments_three_d_drawing');
    }
    public function datasheet_image(){
        return $this->hasOne(File::class, 'fileable_id', 'id')->where('table_name', 'product_managments_datasheet');
    }
    
    public function getImageUrlAttribute(){
        if($this->two_d_drawing_image){
            return asset($this->two_d_drawing_image->url);
        }else{
            return '';
        }
    }
    public function getImageUrlThreeDrawingAttribute(){
        if($this->three_d_drawing_image){
            return asset($this->three_d_drawing_image->url);
        }else{
            return '';
        }
    }
    public function getImageUrlDataSheetAttribute(){
        if($this->datasheet_image){
            return asset($this->datasheet_image->url);
        }else{
            return '';
        }
    }

    // Define the relationships to the Dropdown model
    public function motorGroup()
    {
        return $this->belongsTo(Dropdown::class, 'motorgroup_id');
    }

    public function frameSize()
    {
        return $this->belongsTo(Dropdown::class, 'framesize_id');
    }

    public function horsepower()
    {
        return $this->belongsTo(Dropdown::class, 'horsepower_id');
    }

    public function speed()
    {
        return $this->belongsTo(Dropdown::class, 'speed_id');
    }

    public function voltage()
    {
        return $this->belongsTo(Dropdown::class, 'voltage_id');
    }
}
