<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactListRequest;
use App\Http\Resources\ContactListResource;
use App\Models\ContactList;
use App\Repositories\FileRepository;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ContactListController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(ContactList::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',ContactList::class);
        $query = $this->listRep->listFilteredQueryCategory(['contact_lists.title','contact_lists.description','contact_lists.state'])
        ->select('contact_lists.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return ContactListResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactListRequest $request)
    {
        Gate::authorize('create', ContactList::class);
        $arr = $request->only('title','description','state');
        $contactList = ContactList::create($arr);
        return new ContactListResource($contactList);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactList  $contactList
     * @return \Illuminate\Http\Response
     */
    public function show(ContactList $contactList)
    {
        Gate::authorize('view', $contactList);
        return new ContactListResource($contactList);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContactList  $contactList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContactList $contactList)
    {
        Gate::authorize('update', $contactList);
        $arr = $request->only('title','description','state');
        $contactList->update($arr);
        return new ContactListResource($contactList);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactList  $contactList
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactList $contactList)
    {
        Gate::authorize('delete', $contactList);
        $contactList->delete();
        return response()->json(['status' => 'success']);
    }
}
