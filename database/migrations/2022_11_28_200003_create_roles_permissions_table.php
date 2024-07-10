<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRolesPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles_permissions', function (Blueprint $table) {
            $table->id();
            $table->integer('role_id')->index();
            $table->integer('permission_id')->index();
            $table->timestamps();
        });
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','1']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','2']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','3']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','4']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','5']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','6']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','7']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','8']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','9']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','10']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','11']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','12']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','13']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','14']);
        DB::insert('insert into roles_permissions (role_id,permission_id) values (?, ?)', ['1','15']);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles_permissions');
    }
}
