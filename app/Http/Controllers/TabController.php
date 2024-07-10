<?php

namespace App\Http\Controllers;

use App\Http\Requests\TabRequest;
use App\Http\Resources\TabResource;
use App\Models\{Tab, CategoryTab};
use App\Repositories\{ListRepository, FileRepository};
use Illuminate\Support\Facades\Gate;

class TabController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->file = $file;
        $this->listRep->bindModel(Tab::class);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Tab::class);
        $query = $this->listRep->listFilteredQueryCategory(['standard_features_heading', 'standard_features'])
        ->select('tabs.*');

        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return TabResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TabRequest $request)
    {
        Gate::authorize('create', Tab::class);
        $tab = Tab::create($request->only('standard_features_heading', 'standard_features'));
        if($request->image){
            $this->file->create([$request->image], 'tabs', $tab->id, 1);
        }
        if($request->right_image){
            $this->file->create([$request->right_image], 'right_tabs', $tab->id, 1);
        }
        if($request->part_number_image){
            $this->file->create([$request->part_number_image], 'tabs_part_numbers_desc', $tab->id, 1);
        }
        foreach($request->categories as $cat){
            CategoryTab::create([
                'tab_id' => $tab->id,
                'category_id' => $cat
            ]);
        }
        return new TabResource($tab);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tab  $tab
     * @return \Illuminate\Http\Response
     */
    public function show(Tab $tab)
    {
        Gate::authorize('view', $tab);
        return new TabResource($tab);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tab  $tab
     * @return \Illuminate\Http\Response
     */
    public function update(TabRequest $request, Tab $tab)
    {
        Gate::authorize('update', $tab);
        $tab->update($request->only('standard_features_heading', 'standard_features'));
        if($request->image){
            $this->file->create([$request->image], 'tabs', $tab->id, 1);
        }
        if($request->right_image){
            $this->file->create([$request->right_image], 'right_tabs', $tab->id, 1);
        }
        if($request->part_number_image){
            $this->file->create([$request->part_number_image], 'tabs_part_numbers_desc', $tab->id, 1);
        }
        CategoryTab::where('tab_id', $tab->id)->delete();
        foreach($request->categories as $cat){
            CategoryTab::create([
                'tab_id' => $tab->id,
                'category_id' => $cat
            ]);
        }
        return new TabResource($tab);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tab  $tab
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tab $tab)
    {
        Gate::authorize('delete', $tab);
        $tab->delete();
        return response()->json(['status' => 'success']);
    }
}
