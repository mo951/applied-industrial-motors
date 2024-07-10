<?php

use App\Models\Dropdown;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class CreateAddDropdowns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $datas = [
            'MotorGroup' => ['Farm Duty', 'Farm'],
            'FrameSize' => ['56', '56H', '143T'],
            'HorsePower' => ['0.33', '0.5', '0.75'],
            'Speed' => ['1200', '1800', '2400'],
            'Voltage' => ['115/208-230', '208-230'],
        ];
        
        // Delete existing records from the dropdowns table
        DB::delete("delete from dropdowns");
        
        // Loop through each group and insert the values into the database
        foreach($datas as $title => $values){
            foreach($values as $value){
                Dropdown::create([
                    'title' => $title,
                    'value' => $value,
                    'is_active' => 1,
                ]);
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
        Schema::dropIfExists('add_dropdowns');
    }
}
