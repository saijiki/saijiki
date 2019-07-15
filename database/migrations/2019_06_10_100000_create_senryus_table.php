<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSenryusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('senryus', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('body', 32);
            $table->unsignedInteger('good')->default(0);
            $table->string('path');
            $table->boolean('is_public');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('senryus');
    }
}
