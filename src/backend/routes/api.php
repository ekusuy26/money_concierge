<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Category\FetchCategoriesController;
use App\Http\Controllers\Category\FetchBudgetController;
use App\Http\Controllers\Category\FetchBudgetSummaryController;
use App\Http\Controllers\Finance\FetchFinancesController;
use App\Http\Controllers\Finance\StoreFinanceController;
use App\Http\Controllers\Finance\FetchFinanceSummaryController;
use App\Http\Controllers\Finance\FetchFinanceSummariesController;
use App\Http\Controllers\Finance\DeleteFinanceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::get('/', function () {
// });

Route::group(['prefix' => 'category', 'as' => 'category.'], function () {
    Route::get('/', FetchCategoriesController::class);
    Route::get('/budget/{userId}', FetchBudgetController::class);
    Route::get('/budget/summary/{userId}', FetchBudgetSummaryController::class);
});

Route::group(['prefix' => 'finance', 'as' => 'finance.'], function () {
    Route::get('{userId}', FetchFinancesController::class);
    Route::post('store', StoreFinanceController::class);
    Route::delete('{id}', DeleteFinanceController::class)->where('id', '[0-9]+');
    Route::get('summary/{userId}', FetchFinanceSummaryController::class);
    Route::get('summaries/{userId}', FetchFinanceSummariesController::class);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
