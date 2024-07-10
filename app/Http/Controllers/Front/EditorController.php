<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\EditorImage;
use App\Models\EditorProduct;
use App\Models\EditorShape;
use App\Models\HoroscopeProductType;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function genereateSlogan(Request $request){
        $keywords = $request->keywords;
        $type = HoroscopeProductType::find($request->type)->name;
        $arr = [
            'model' => 'gpt-3.5-turbo',
            "messages" => [
                [
                    "role"=>"user",
                    "content" => "Generate 6 slogans in json object should only contain slogans using these keywords $keywords. Product type is ".$type
                ]
            ],
            "response_format" => 
            [
                "type"=> "json_object"
            ]
        ];
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.openai.com/v1/chat/completions',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>json_encode($arr),
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer ' . env('OPENAI_API_KEY'),
                'Content-Type: application/json'
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        return response()->json([
            'status' => true,
            "slogans" => array_chunk(json_decode(json_decode($response)->choices[0]->message->content)->slogans,2)
        ]);
    }
    public function editor(HoroscopeProductType $horoscopeProductType){
        $products = EditorProduct::where('horoscope_product_type_id', $horoscopeProductType->id)->get();
        $editorImages = EditorImage::all();
        $editorShapes = EditorShape::all();
        $slogan = $_GET['slogan'];
        $product = $products[0];
        if(isset($_GET['product_id'])){
            $product = EditorProduct::find($_GET['product_id']);
        }
        return view('editor.index')->with('title','Editor')->with(compact('slogan', 'horoscopeProductType', 'products', 'product', 'editorImages', 'editorShapes'));
    }
}
