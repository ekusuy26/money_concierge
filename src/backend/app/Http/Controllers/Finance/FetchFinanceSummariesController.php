<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;

class FetchFinanceSummariesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService)
    {
        $summary = $financeService->fetchSummaries();
        return response()->json($summary);
    }
}
