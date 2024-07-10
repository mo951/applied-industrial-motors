<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductManagmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_managments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('motorgroup_id');
            $table->unsignedBigInteger('framesize_id');
            $table->unsignedBigInteger('horsepower_id');
            $table->unsignedBigInteger('speed_id');
            $table->unsignedBigInteger('voltage_id');
            $table->float('price');
            $table->string('multiplier_code');
            $table->string('mounting');
            $table->string('motor_name');
            $table->string('category_ids');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_managments');
    }
}
