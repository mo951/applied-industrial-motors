<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterProductManagmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_managments', function (Blueprint $table) {
            // Change the columns to allow NULL values
            $table->string('multiplier_code')->nullable()->change();
            $table->string('mounting')->nullable()->change();
            $table->string('slug')->unique();
            // Add other columns as needed
        });
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
