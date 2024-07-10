<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
class AddCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $categories = [
            'Low Voltage Motors' => [
                'Definite Purpose' => [
                    'Farm Duty',
                    'Crusher Duty',
                    'Washdown',
                    'Phase Converter Motor',
                    'Premium JM-JP',
                    'EPAct JM-JP',
                    'Oil Pump',
                    'PM DC Motor',
                    'Cobra Single Phase Aluminum',
                    'Stainless Steel',
                    'IEEE 841',
                    'Aerator',
                ],
                'General Purpose' => [
                    '(GX3) Three Phase Aluminum',
                    'Three Phase Cast Iron',
                    'Three Phase Open Enclosure',
                    'Metric IEC',
                    'Cobra'
                ],
                'Motor Accessories' => [
                    'Constant Velocity Fan Kit'
                ]
            ],
            'Web Tools' => [
                'Engineering Tools'=>[
                    'Mobile Apps'
                ],
                'Sales Tools' => [
                    'Inventory by Location'
                ],
            ],
        ];
        DB::delete("delete from categories");
        foreach($categories as $categoryk=>$category){
            $mainParent = Category::create([
                'name' => $categoryk,
                'slug' => Str::of($categoryk)->slug('-'),
                'is_active' => 1,
                'parent_id' => 0,
                'is_featured' => 0,
            ]);
            if(is_array($category)){
                foreach($category as $categork=>$categor){
                    $mainParentz = Category::create([
                        'name' => $categork,
                        'slug' => Str::of($categork)->slug('-'),
                        'is_active' => 1,
                        'parent_id' => $mainParent->id,
                        'is_featured' => 0,
                    ]);
                    if(is_array($categor)){
                        foreach($categor as $catego){
                            Category::create([
                                'name' => $catego,
                                'slug' => Str::of($catego)->slug('-'),
                                'is_active' => 1,
                                'parent_id' => $mainParentz->id,
                                'is_featured' => 0,
                            ]);
                        }
                    }
                }
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
