<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\HoroscopeProduct;
use App\Models\HoroscopeProductType;
use Illuminate\Http\Request;

class HoroscropeProductController extends Controller
{
    public function index(Request $request){
        $types = HoroscopeProductType::all();
        $products = HoroscopeProduct::orderBy('id', 'desc');
        if($request->search){
            $filter_columns = ['name','slug','short_description'];
            $products = $products->Where(
                function ($query) use ($filter_columns) {
                    $q = $_GET['search'];
                    foreach ($filter_columns as $filter_column) {
                        $query->orWhere($filter_column, 'like', '%' . $q . '%');
                    }
                }
            );
        }
        $products = $products->get();
        $signs = [
            ['id' => 1, 'text' => 'Aries'],
            ['id' => 2, 'text' => 'Taurus'],
            ['id' => 3, 'text' => 'Gemini'],
            ['id' => 4, 'text' => 'Cancer'],
            ['id' => 5, 'text' => 'Leo'],
            ['id' => 6, 'text' => 'Virgo'],
            ['id' => 7, 'text' => 'Libra'],
            ['id' => 8, 'text' => 'Scorpio'],
            ['id' => 9, 'text' => 'Sagittarius'],
            ['id' => 10, 'text' => 'Capricorn'],
            ['id' => 11, 'text' => 'Aquarius'],
            ['id' => 12, 'text' => 'Pisces']
        ];
        return view('horoscropeproduct.index')->with('title', 'Horoscrope Products')
        ->with(compact('products', 'types', 'signs'))->with('hasFooterSection',true);
    }
    public function detail($slug){
        $product = HoroscopeProduct::where('slug', $slug)->firstOrfail();
        return view('horoscropeproduct.detail')->with('title', $product->name)
        ->with(compact('product'))->with('hasFooterSection',true);
    }
}
