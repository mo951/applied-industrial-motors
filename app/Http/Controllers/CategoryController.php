<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use Illuminate\Support\Facades\Gate;
use App\Repositories\{ListRepository, FileRepository};
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Category::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Category::class);
        $query = $this->listRep->listFilteredQueryCategory(['name', 'slug', 'is_active'])
        ->select('categories.*');
        // ->orderBy('parent_id', 'asc');
        // dd($query->toSql());

        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return CategoryResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        Gate::authorize('create', Category::class);
        $category = Category::create($request->only('name', 'slug','parent_id', 'is_active', 'is_featured'));
        if($request->image){
            $this->file->create([$request->image], 'categories', $category->id, 1);
        }
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        Gate::authorize('view', $category);
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        Gate::authorize('update', $category);
        $category->update($request->only('name', 'slug', 'parent_id', 'is_active', 'is_featured'));
        if($request->image){
            $this->file->create([$request->image], 'categories', $category->id, 1);
        }
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        Gate::authorize('delete', $category);
        try {
            $category->delete();
        } catch (\Throwable $th) {
            return response()->json(['status' => 'error', 'msg' => $th]);
        }
    
        return response()->json(['status' => 'success']);
    }
    public function getParents(){
        $category = Category::where('parent_id',0)->orderBy('id','desc')->get();
        return new CategoryResource($category);
    }
    public function getChilds(){
        $category = Category::where('parent_id', '!=', 0)->orderBy('id','desc')->get();
        return new CategoryResource($category);
    }
}
