<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Category\FetchCategoriesController;

use App\Http\Controllers\Finance\FetchFinancesController;
use App\Http\Controllers\Finance\StoreFinanceController;
use App\Http\Controllers\Finance\FetchFinanceSummaryController;
use App\Http\Controllers\Finance\DeleteFinanceController;
use App\Http\Controllers\Finance\FetchFinanceSummaryListController;
use App\Http\Controllers\Finance\FetchFinanceSummaryChartController;

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

Route::get('/', function () {
    return response()->json('hello world');
});
Route::get('/category', FetchCategoriesController::class);

Route::get('/finance', FetchFinancesController::class);
Route::post('/finance/store', StoreFinanceController::class);
Route::delete('/finance/{id}', DeleteFinanceController::class)->where('id', '[0-9]+');
Route::get('/finance/summary', FetchFinanceSummaryController::class);
Route::get('/finance/summary/chart', FetchFinanceSummaryChartController::class);
Route::get('/finance/summary/list/{year}/{month}', FetchFinanceSummaryListController::class);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
