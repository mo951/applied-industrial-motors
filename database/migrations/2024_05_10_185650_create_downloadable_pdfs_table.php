<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDownloadablePdfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('downloadable_pdfs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('downloadable_id');
            $table->foreign('downloadable_id')->references('id')->on('downloadables');
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
        Schema::dropIfExists('downloadable_pdfs');
    }
}
