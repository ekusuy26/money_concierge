<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;

class FetchFinancesController extends Controller
{
    /**
     * @param FinanceService $financeService
     * 
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService, string $userId)
    {
        $finances = $financeService->fetchFinances($userId);
        return response()->json($finances);
    }
}
