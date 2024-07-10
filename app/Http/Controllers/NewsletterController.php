<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsletterRequest;
use App\Http\Resources\NewsletterResource;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use App\Repositories\{ListRepository, FileRepository};
use Illuminate\Support\Facades\Gate;

class NewsletterController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Newsletter::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Newsletter::class);
        $query = $this->listRep->listFilteredQueryCategory(['email'])
        ->select('newsletters.*');

        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return NewsletterResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsletterRequest $request)
    {
        Gate::authorize('create', Newsletter::class);
        $newsletter = Newsletter::create($request->only('email'));
        return new NewsletterResource($newsletter);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Newsletter  $newsletter
     * @return \Illuminate\Http\Response
     */
    public function show(Newsletter $newsletter)
    {
        Gate::authorize('view', $newsletter);
        return new NewsletterResource($newsletter);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Newsletter  $newsletter
     * @return \Illuminate\Http\Response
     */
    public function update(NewsletterRequest $request, Newsletter $newsletter)
    {
        Gate::authorize('update', $newsletter);
        $newsletter->update($request->only('email'));
        return new NewsletterResource($newsletter);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Newsletter  $newsletter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Newsletter $newsletter)
    {
        Gate::authorize('delete', $newsletter);
        $newsletter->delete();
        return response()->json(['status' => 'success']);
    }
}
