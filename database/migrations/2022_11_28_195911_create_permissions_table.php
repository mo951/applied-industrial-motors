<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->timestamps();
        });

        $data = [
            ['name'=>'users-list', 'title'=>'users Listing'],
            ['name'=>'users-create', 'title'=>'Users Create'],
            ['name'=>'users-edit', 'title'=>'Users Edit'],
            ['name'=>'users-delete', 'title'=>'Users Delete'],
            ['name'=>'users-view', 'title'=>'Users View'],
            ['name'=>'role-list', 'title'=>'Role Listing'],
            ['name'=>'role-create', 'title'=>'Role Create'],
            ['name'=>'role-edit', 'title'=>'Role Edit'],
            ['name'=>'role-delete', 'title'=>'Role Delete'],
            ['name'=>'role-view', 'title'=>'Role View'],
            ['name'=>'permission-list', 'title'=>'Permission Listing'],
            ['name'=>'permission-create', 'title'=>'Permission Create'],
            ['name'=>'permission-edit', 'title'=>'Permission Edit'],
            ['name'=>'permission-delete', 'title'=>'Permission Delete'],
            ['name'=>'permission-view', 'title'=>'Permission View'],
            //...
        ];
        
        // Model::insert($data); // Eloquent approach
        DB::table('permissions')->insert($data); // Query Builder approach
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
}
