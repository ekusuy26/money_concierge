<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;

class FetchFinanceSummaryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService, string $userId)
    {
        $summary = $financeService->fetchSummary($userId);
        return response()->json($summary);
    }
}
