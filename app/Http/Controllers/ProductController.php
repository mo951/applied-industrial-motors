<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Gate;
use App\Repositories\{ListRepository, FileRepository};
use App\Http\Resources\ProductResource;
use App\Models\ProductOption;
use App\Models\ProductOptionValue;
use App\Models\ProductVariation;
use App\Models\ProductVariationOption;
use App\Models\ShippingClass;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Product::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Product::class);
        $query = $this->listRep->listFilteredQuery(['product_name', 'product_slug', 'type','description'])
        ->select('products.*');
        if(isset($_GET['type'])){
            $query = $query->where('type',$_GET['type']);
        }
        if(isset($_GET['is_active'])){
            $query = $query->where('is_active',$_GET['is_active']);
        }
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return ProductResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        Gate::authorize('create', Product::class);
        $product = Product::create($request->only('product_name', 'product_slug', 'category_id', 'type', 'description', 'is_active', 'is_featured', 'price', 'discount', 'other_selections', 'quantity_discounts_tier_id'));
        
        $categoryIds = explode(',', $request['category_id']);
        $categoryIds = array_map('intval', $categoryIds);
        $product->categories()->attach($categoryIds);

        if($request->image){
            $this->file->create([$request->image], 'products', $product->id, 1);
        }
        if($request->variationLabel){
            foreach($request->variationLabel as $labelData){
                $productOption = ProductOption::create([
                    'label' => $labelData['name'],
                    'product_id' => $product->id,
                ]);
                foreach($labelData['tag'] as $tagk=>$tag){
                    ProductOptionValue::create([
                        'product_id' => $product->id,
                        'product_option_id' => $productOption->id,
                        'value' => $tag,
                        'is_image' => $labelData['is_image'][$tagk],
                        'content' => $labelData['content'][$tagk],
                        'file_url' => $labelData['file_url'][$tagk],
                        'file_url_2' => (!$labelData['file_url_2'][$tagk]?'':$labelData['file_url_2'][$tagk]),
                    ]);
                }
            }
            foreach($request->variant as $variant){
                $productVariation = ProductVariation::create([
                    'product_id' => $product->id,
                    'is_default' => $variant['is_default'],
                    'part_number' => $variant['part_number'],
                    'shape' => $variant['shape'],
                    'in_stock' => $variant['in_stock'],
                    'price' => $variant['price'],
                    'images' => json_encode((isset($variant['image'])?$variant['image']:[]))
                ]);
                foreach($variant['label'] as $labelk=>$labelValue){
                    $productOptionValueLoop = ProductOptionValue::where('product_id', $product->id)->where('value',$labelValue)->first();//->where('product_option_id', $productOptionLoop->id)
                    $productVariationOption = ProductVariationOption::create([
                        'product_id' => $product->id,
                        'product_variation_id' => $productVariation->id,
                        'product_option_value_id' => $productOptionValueLoop->id
                    ]);
                }
            }
        }
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        
        $product['categoryIds'] = $product->categories()->pluck('categories.id')->toArray();
       
        $product->load('options','options.option_values','variations','variations.variation_values', 'variations.variation_values.optionvalue');
        Gate::authorize('view', $product);
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {
        Gate::authorize('update', $product);
        $product->update($request->only('product_name', 'product_slug', 'category_id', 'type', 'description', 'is_active', 'is_featured', 'price', 'discount', 'other_selections', 'quantity_discounts_tier_id'));

        $categoryIds = explode(',', $request['category_id']);
        $categoryIds = array_map('intval', $categoryIds);
        $product->categories()->sync($categoryIds);

        if($request->image){
            $this->file->create([$request->image], 'products', $product->id, 1);
        }
        ProductVariationOption::where('product_id', $product->id)->delete();
        ProductVariation::where('product_id', $product->id)->delete();
        ProductOptionValue::where('product_id', $product->id)->delete();
        ProductOption::where('product_id', $product->id)->delete();
        if($request->variationLabel){
            foreach($request->variationLabel as $labelData){
                $productOption = ProductOption::create([
                    'label' => $labelData['name'],
                    'product_id' => $product->id,
                ]);
                foreach($labelData['tag'] as $tagk=> $tag){
                    ProductOptionValue::create([
                        'product_id' => $product->id,
                        'product_option_id' => $productOption->id,
                        'value' => $tag,
                        'is_image' => $labelData['is_image'][$tagk],
                        'content' => $labelData['content'][$tagk],
                        'file_url' => $labelData['file_url'][$tagk],
                        'file_url_2' => (!$labelData['file_url_2'][$tagk]?'':$labelData['file_url_2'][$tagk]),
                    ]);
                }
            }
            foreach($request->variant as $variant){
                $productVariation = ProductVariation::create([
                    'product_id' => $product->id,
                    'is_default' => $variant['is_default'],
                    'part_number' => $variant['part_number'],
                    'shape' =>  $variant['shape'],
                    'in_stock' => $variant['in_stock'],
                    'price' => $variant['price'],
                    'images' => json_encode((isset($variant['image'])?$variant['image']:[]))
                ]);
                foreach($variant['label'] as $labelk=>$labelValue){
                    $productOptionValueLoop = ProductOptionValue::where('product_id', $product->id)->where('value',$labelValue)->first();//->where('product_option_id', $productOptionLoop->id)
                    $productVariationOption = ProductVariationOption::create([
                        'product_id' => $product->id,
                        'product_variation_id' => $productVariation->id,
                        'product_option_value_id' => $productOptionValueLoop->id
                    ]);
                }
            }
        }
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        Gate::authorize('delete', $product);
        ProductVariationOption::where('product_id', $product->id)->delete();
        ProductVariation::where('product_id', $product->id)->delete();
        ProductOptionValue::where('product_id', $product->id)->delete();
        ProductOption::where('product_id', $product->id)->delete();
        $product->delete();
        return response()->json(null, 204);
    }

    public function duplicate(Product $product)
    {
        // Find the existing product
        $existingProduct = Product::findOrFail($product->id);

       
        $duplicatedProduct = $existingProduct->replicate();

        // Generate a unique slug for the duplicated product
        $baseSlug = Str::slug($duplicatedProduct->product_name);
        $counter = 1;
        $slug = $baseSlug;
        while (Product::where('product_slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }
        $duplicatedProduct->product_slug = $slug;
        
        if($duplicatedProduct->save()){
            if($existingProduct->image){
                $duplicatedImage = $existingProduct->image->replicate();
                $duplicatedProduct->image()->save($duplicatedImage);
            }

            $get_optionvalue_ids = [];
            $pro_options = ProductOption::where('product_id', $existingProduct->id)->orderBy('id')->get();
            if($pro_options)
            {
                foreach($pro_options as $single_option){
                    $duplicatedOption = $single_option->replicate();
                    $duplicatedOption->product_id = $duplicatedProduct->id;
                    if($duplicatedOption->save()){

                        $pro_options_values = ProductOptionValue::where('product_option_id', $single_option->id)->orderBy('id')->get();
                        if($pro_options_values){
                            foreach($pro_options_values as $single_option_value){
                                $duplicatedOptionValue = $single_option_value->replicate();
                                $duplicatedOptionValue->product_id = $duplicatedProduct->id;
                                $duplicatedOptionValue->product_option_id = $duplicatedOption->id;
                                $duplicatedOptionValue->save();

                                $get_optionvalue_ids[] = ['old' => $single_option_value->id, 'new' => $duplicatedOptionValue->id];
                            }
                        }

                    }
                }
            }

    
            $pro_variations = ProductVariation::where('product_id', $existingProduct->id)->orderBy('id')->get();
            if($pro_variations){
                foreach($pro_variations as $single_variation)
                {
                    $duplicatedVariation = $single_variation->replicate();
                    $duplicatedVariation->product_id = $duplicatedProduct->id;
                    if($duplicatedVariation->save()){

                        $pro_variations_values = ProductVariationOption::where('product_variation_id', $single_variation->id)->orderBy('id')->get();
                        foreach($pro_variations_values as $single_variation_value){
                            $duplicatedvariationValue = $single_variation_value->replicate();
                            $duplicatedvariationValue->product_id = $duplicatedProduct->id;
                            $duplicatedvariationValue->product_variation_id = $duplicatedVariation->id;
                            
                           
                            // Find the corresponding new product_option_value_id from the array
                            $new_product_option_value_id = null;
                            foreach ($get_optionvalue_ids as $ids) {
                                if ($ids['old'] == $single_variation_value->product_option_value_id) {
                                    $new_product_option_value_id = $ids['new'];
                                    break;
                                }
                            }
                            // Set the new product_option_value_id
                            $duplicatedvariationValue->product_option_value_id = $new_product_option_value_id;


                            $duplicatedvariationValue->save();
                        }
                    }
                }
            }
        }

        return response()->json(['status'=>true, 'product'=>$duplicatedProduct]);
    }

    public function deleteall(Request $request)
    {
        $idsArray = $request->all();
        ProductVariationOption::whereIn('product_id', $idsArray)->delete();
        ProductVariation::whereIn('product_id', $idsArray)->delete();
        ProductOptionValue::whereIn('product_id', $idsArray)->delete();
        ProductOption::whereIn('product_id', $idsArray)->delete();
        $products = Product::whereIn('id', $idsArray)->delete();
        return response()->json(['status'=>true, 'product'=>$products]);
    }

    public function getShippingClasses(){
        return ShippingClass::all();
    }
}
