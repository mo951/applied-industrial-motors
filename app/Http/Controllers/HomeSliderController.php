<?php

namespace App\Http\Controllers;

use App\Http\Requests\HomeSliderRequest;
use App\Http\Resources\HomeSliderResource;
use App\Models\HomeSlider;
use App\Repositories\FileRepository;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class HomeSliderController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(HomeSlider::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',HomeSlider::class);
        $query = $this->listRep->listFilteredQueryCategory(['home_sliders.description'])
        ->select('home_sliders.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return HomeSliderResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Gate::authorize('create', HomeSlider::class);
        $arr = $request->only('description');
        $homeSlider = HomeSlider::create($arr);
        if($request->image){
            $this->file->create([$request->image], 'home_sliders', $homeSlider->id, 1);
        }
        return new HomeSliderResource($homeSlider);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HomeSlider  $homeSlider
     * @return \Illuminate\Http\Response
     */
    public function show(HomeSlider $homeSlider)
    {
        Gate::authorize('view', $homeSlider);
        return new HomeSliderResource($homeSlider);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HomeSlider  $homeSlider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HomeSlider $homeSlider)
    {
        Gate::authorize('update', $homeSlider);
        $arr = $request->only('description');
        $homeSlider->update($arr);
        if($request->image){
            $this->file->create([$request->image], 'home_sliders', $homeSlider->id, 1);
        }
        return new HomeSliderResource($homeSlider);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomeSlider  $homeSlider
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomeSlider $homeSlider)
    {
        Gate::authorize('delete', $homeSlider);
        $homeSlider->delete();
        return response()->json(['status' => 'success']);
    }
}
