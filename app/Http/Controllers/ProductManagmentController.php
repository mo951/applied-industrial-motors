<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductManagmentResource;
use App\Models\ProductManagment;
use Illuminate\Http\Request;
use App\Repositories\{ListRepository, FileRepository};
use Illuminate\Support\Facades\Gate;

class ProductManagmentController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(ProductManagment::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = $this->listRep->listFilteredQuery(['motor_name', 'price',])
        ->select('product_managments.*');

        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return ProductManagmentResource::collection($query);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $product = ProductManagment::create($request->only('motorgroup_id', 'framesize_id', 'horsepower_id', 'speed_id', 'voltage_id', 'price', 
        'multiplier_code', 'mounting', 'motor_name', 'slug', 'category_ids'));

        if($request->image_2d_drwaing){
            $this->file->create([$request->image_2d_drwaing], 'product_managments_two_d_drawing', $product->id, 1);
        }

        if($request->image_3d_drwaing){
            $this->file->create([$request->image_3d_drwaing], 'product_managments_three_d_drawing', $product->id, 1);
        }

        if($request->image_data_sheet){
            $this->file->create([$request->image_data_sheet], 'product_managments_datasheet', $product->id, 1);
        }

        return new ProductManagmentResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductManagment  $productManagment
     * @return \Illuminate\Http\Response
     */
    public function show(ProductManagment $productManagment, $id)
    {
        $product = ProductManagment::find($id);
        return new ProductManagmentResource($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductManagment  $productManagment
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductManagment $productManagment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductManagment  $productManagment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
        
        $productManagment = ProductManagment::find($id);
       
        $product = $productManagment->update($request->only('motorgroup_id', 'framesize_id', 'horsepower_id', 'speed_id', 'voltage_id', 'price', 
        'multiplier_code', 'mounting', 'motor_name', 'slug', 'category_ids'));

        // dd($product);

        if($request->image_2d_drwaing){
            $this->file->create([$request->image_2d_drwaing], 'product_managments_two_d_drawing', $id, 1);
        }

        if($request->image_3d_drwaing){
            $this->file->create([$request->image_3d_drwaing], 'product_managments_three_d_drawing', $id, 1);
        }

        if($request->image_data_sheet){
            $this->file->create([$request->image_data_sheet], 'product_managments_datasheet', $id, 1);
        }
        return redirect()->back();
        return new ProductManagmentResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductManagment  $productManagment
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductManagment $productManagment, $id)
    {
        ProductManagment::find($id)->delete();
        return response()->json(['status' => 'success']);
    }
}
