<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CategoryTab;
use App\Models\ProductManagment;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index($slug){
        $category = Category::where('slug', $slug)->firstorfail();
        $tabs = CategoryTab::where('category_id', $category->id)->get();
        return view('product.category')->with(compact('category', 'tabs'))
        ->with('title', $category->name);
    }
    public function products($slug){
        $category = Category::where('slug', $slug)->firstorfail();
        $tabs = CategoryTab::where('category_id', (string)$category->id)->get();

         // Fetch product management records with related Dropdown values
         $productManagments = ProductManagment::whereJsonContains('category_ids', (string)$category->id)
         ->with(['motorGroup', 'frameSize', 'horsepower', 'speed', 'voltage']) // Eager load relationships
         ->get();

        
        return view('product.category')->with(compact('category', 'tabs'))
        ->with('title', $category->name)
        ->with('showProducts', $productManagments);
        // ->with('showProducts', true);
    }

    public function product_detail($slug){
        $productManagments = ProductManagment::where('slug', $slug)->first();
        return view('product.detail')
        ->with('product', $productManagments);
    }

    public function show(Request $request, $slug){
        $product = ProductManagment::where('slug', $slug) ->with(['motorGroup', 'frameSize', 'horsepower', 'speed', 'voltage'])->get();
        return view('product.show', compact('product'));
    }
}
