<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use App\Repositories\ListRepository;
use App\Http\Resources\InquiryResource;
class InquiryController extends Controller
{
    protected $listRep;
    public function __construct(ListRepository $listRep)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(Inquiry::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = $this->listRep->listFilteredQuery([
            'first_name','last_name', 'phone', 'email', 'message', 'is_read',
        ])
        ->select('inquiries.*');
        if(isset($_GET['from_date'])&&$_GET['from_date']!=''){
            $query = $query->whereDate('inquiries.created_at','>=',date('Y-m-d',strtotime($_GET['from_date'])));
        }
        if(isset($_GET['to_date'])&&$_GET['to_date']!=''){
            $query = $query->whereDate('inquiries.created_at','<=',date('Y-m-d',strtotime($_GET['to_date'])));
        }
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return InquiryResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function show(Inquiry $inquiry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inquiry $inquiry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();
        return response()->json(null, 204);
    }

    public function deleteall(Request $request)
    {
        $idsArray = $request->all();
        $products = Inquiry::whereIn('id', $idsArray)->delete();
        return response()->json(['status'=>true, 'product'=>$products]);
    }
    
   
}
