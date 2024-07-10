<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function($table) {
            $table->tinyInteger('is_featured')->default(0);
        });
        Schema::table('products', function($table) {
            $table->tinyInteger('is_featured')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function($table) {
            $table->dropColumn('is_featured');
        });
        Schema::table('products', function($table) {
            $table->dropColumn('is_featured');
        });
    }
}
