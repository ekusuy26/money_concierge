<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;
use Illuminate\Http\Request;

class StoreFinanceController extends Controller
{
    /**
     * Handle the incoming request.
     * 
     * @param FinanceService $financeService
     */
    public function __invoke(FinanceService $financeService, Request $request)
    {
        $input = $request->all();
        $result = $financeService->storeFinance($input);
        return response()->json($result);
    }
}
