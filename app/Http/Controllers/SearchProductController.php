<?php

namespace App\Http\Controllers;

use App\Models\Dropdown;
use App\Models\ProductManagment;
use Illuminate\Http\Request;

class SearchProductController extends Controller
{
    /**
     * Search product parameter wise.
     */
    public function searchProduct(Request $request){
        $base_query = Dropdown::where('is_active', 1);
        $motorgroup_id = (clone $base_query)->where('title', 'MotorGroup')->where('value', $request->group)->pluck('id')->first();
        $frame_id = (clone $base_query)->where('title', 'FrameSize')->where('value', $request->frame_size)->pluck('id')->first();
        $horsepower_id = (clone $base_query)->where('title', 'HorsePower')->where('value', $request->horsepower)->pluck('id')->first();
        $speed_id = (clone $base_query)->where('title', 'Speed')->where('value', $request->rpm)->pluck('id')->first();
        $voltage_id = (clone $base_query)->where('title', 'Voltage')->where('value', $request->voltage)->pluck('id')->first();
        
        $formFields = 0;
        foreach($request->toArray() as $key => $value){
            if(!empty($request->$key) && ($key != '_token') ){
                $formFields++;
            }
        }
        $matchedFields = 0;
        $conditions = [
            'MotorGroup' => $request->group,
            'FrameSize' => $request->frame_size,
            'HorsePower' => $request->horsepower,
            'Speed' => $request->rpm,
            'Voltage' => $request->voltage,
        ];

        foreach ($conditions as $title => $value) {
            if (!empty($value)) {
                $conditionMet = (clone $base_query)->where('title', $title)->where('value', $value)->pluck('id')->first();
                if ($conditionMet) {
                    $matchedFields++;
                }
            }
        }
        
        if($formFields !== $matchedFields){
            return view('product.show_motor')->with('status','Result not found.');
        }else{
            $query = ProductManagment::query();
            $query->with(['motorGroup', 'frameSize', 'horsepower', 'speed', 'voltage']);

            if ($motorgroup_id !== null) {
                $query->where('motorgroup_id', $motorgroup_id);
            }
            if ($frame_id !== null) {
                $query->where('framesize_id', $frame_id);
            }
            if ($horsepower_id !== null) {
                $query->where('horsepower_id', $horsepower_id);
            }
            if ($speed_id !== null) {
                $query->where('speed_id', $speed_id);
            }
            if ($voltage_id !== null) {
                $query->where('voltage_id', $voltage_id);
            }
            $products = $query->get();
        }
        return view('product.show_motor')->with('showFilteredProducts', $products);
    }
}
