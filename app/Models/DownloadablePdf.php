<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DownloadablePdf extends Model
{
    use HasFactory;
    protected $appends = ['image_url', 'pdf_url'];
    protected $fillable = [
        'downloadable_id'
    ];
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function pdf(){
        return $this->hasOne(File::class, 'fileable_id', 'id')->where('table_name', 'downloadable_pdf_file');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            return '';
        }
    }
    public function getPdfUrlAttribute(){
        if($this->pdf){
            return asset($this->pdf->url);
        }else{
            return '';
        }
    }
}
