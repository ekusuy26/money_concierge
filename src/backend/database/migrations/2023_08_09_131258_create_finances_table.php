<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('finances', function (Blueprint $table) {
            $table->id();
            $table->boolean('income_flag')->comment('収支フラグ(true: 収入, false: 支出)');
            $table->string('item_name')->nullable()->comment('項目名');
            $table->decimal('amount', 10, 0)->comment('金額');
            $table->text('memo')->nullable()->comment('メモ');
            $table->date('date')->comment('日付');
            $table->unsignedBigInteger('category_id')->comment('カテゴリID');
            $table->string('user_id')->comment('ユーザーID');
            $table->timestamps();

            // 外部キー制約
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('finances');
    }
};
