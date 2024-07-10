<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use App\Repositories\{ListRepository, FileRepository};
use Illuminate\Support\Facades\Gate;

class BlogController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Blog::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Blog::class);
        $query = $this->listRep->listFilteredQueryCategory(['title', 'slug', 'short_description', 'description'])
        ->select('blogs.*');

        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return BlogResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlogRequest $request)
    {
        Gate::authorize('create', Blog::class);
        $blog = Blog::create($request->only('title', 'slug', 'short_description', 'description'));
        if($request->image){
            $this->file->create([$request->image], 'blogs', $blog->id, 1);
        }
        return new BlogResource($blog);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        Gate::authorize('view', $blog);
        return new BlogResource($blog);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(BlogRequest $request, Blog $blog)
    {
        Gate::authorize('update', $blog);
        $blog->update($request->only('title', 'slug', 'short_description', 'description'));
        if($request->image){
            $this->file->create([$request->image], 'blogs', $blog->id, 1);
        }
        return new BlogResource($blog);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        Gate::authorize('delete', $blog);
        $blog->delete();
        return response()->json(['status' => 'success']);
    }
}
