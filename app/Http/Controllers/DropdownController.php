<?php

namespace App\Http\Controllers;


use App\Http\Resources\DropdownResource;
use App\Models\Dropdown;
use Illuminate\Http\Request;
use App\Repositories\{ListRepository, FileRepository};
use Illuminate\Support\Facades\Gate;

class DropdownController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Dropdown::class);
    }


    public function index()
    {
        $query = $this->listRep->listFilteredQuery(['title', 'value',])
        ->select('dropdowns.*');

        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return DropdownResource::collection($query);
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
        $blog = Dropdown::create($request->only('title', 'value', 'is_active'));
        return new DropdownResource($blog);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Dropdown $dropdown)
    {
        return new DropdownResource($dropdown);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dropdown $dropdown)
    {
        $dropdown->update($request->only('title', 'value', 'is_active'));
        
        return new DropdownResource($dropdown);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(Dropdown $dropdown)
    {
        $dropdown->delete();
        return response()->json(['status' => 'success']);
    }


    public function getdropdownsvalues() 
    {
        $query = Dropdown::all()->groupBy('title');
        return response()->json(['status'=>true, 'product'=>$query]);
    }
}
