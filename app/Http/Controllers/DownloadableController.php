<?php

namespace App\Http\Controllers;

use App\Http\Requests\DownloadableRequest;
use App\Http\Resources\DownloadableResource;
use App\Models\Downloadable;
use App\Repositories\FileRepository;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class DownloadableController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Downloadable::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Downloadable::class);
        $query = $this->listRep->listFilteredQueryCategory(['downloadables.name'])
        ->select('downloadables.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return DownloadableResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DownloadableRequest $request)
    {
        Gate::authorize('create', Downloadable::class);
        $arr = $request->only('name');
        $downloadable = Downloadable::create($arr);
        return new DownloadableResource($downloadable);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Downloadable  $downloadable
     * @return \Illuminate\Http\Response
     */
    public function show(Downloadable $downloadable)
    {
        Gate::authorize('view', $downloadable);
        return new DownloadableResource($downloadable);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Downloadable  $downloadable
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Downloadable $downloadable)
    {
        Gate::authorize('update', $downloadable);
        $arr = $request->only('name');
        $downloadable->update($arr);
        return new DownloadableResource($downloadable);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Downloadable  $downloadable
     * @return \Illuminate\Http\Response
     */
    public function destroy(Downloadable $downloadable)
    {
        Gate::authorize('delete', $downloadable);
        $downloadable->delete();
        return response()->json(['status' => 'success']);
    }
}
