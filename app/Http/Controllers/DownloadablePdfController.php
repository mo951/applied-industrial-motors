<?php

namespace App\Http\Controllers;

use App\Http\Requests\DownloadablePdfRequest;
use App\Http\Resources\DownloadablePdfResource;
use App\Models\DownloadablePdf;
use App\Repositories\FileRepository;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class DownloadablePdfController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(DownloadablePdf::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',DownloadablePdf::class);
        $query = $this->listRep->listFilteredQueryCategory(['downloadable_pdfs.downloadable_id'])
        ->select('downloadable_pdfs.*', 'downloadables.name as downloadable_name')
        ->leftJoin('downloadables', 'downloadable_pdfs.downloadable_id', '=', 'downloadables.id')
        ;
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return DownloadablePdfResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DownloadablePdfRequest $request)
    {
        Gate::authorize('create', DownloadablePdf::class);
        $arr = $request->only('downloadable_id');
        $downloadablePdf = DownloadablePdf::create($arr);
        if($request->image){
            $this->file->create([$request->image], 'downloadable_pdfs', $downloadablePdf->id, 1);
        }
        if($request->pdf){
            $this->file->create([$request->pdf], 'downloadable_pdf_file', $downloadablePdf->id, 1);
        }
        return new DownloadablePdfResource($downloadablePdf);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DownloadablePdf  $downloadablePdf
     * @return \Illuminate\Http\Response
     */
    public function show(DownloadablePdf $downloadablePdf)
    {
        Gate::authorize('view', $downloadablePdf);
        return new DownloadablePdfResource($downloadablePdf);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DownloadablePdf  $downloadablePdf
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DownloadablePdf $downloadablePdf)
    {
        Gate::authorize('update', $downloadablePdf);
        $arr = $request->only('downloadable_id');
        $downloadablePdf->update($arr);
        if($request->image){
            $this->file->create([$request->image], 'downloadable_pdfs', $downloadablePdf->id, 1);
        }
        if($request->pdf){
            $this->file->create([$request->pdf], 'downloadable_pdf_file', $downloadablePdf->id, 1);
        }
        return new DownloadablePdfResource($downloadablePdf);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DownloadablePdf  $downloadablePdf
     * @return \Illuminate\Http\Response
     */
    public function destroy(DownloadablePdf $downloadablePdf)
    {
        Gate::authorize('delete', $downloadablePdf);
        $downloadablePdf->delete();
        return response()->json(['status' => 'success']);
    }
}
