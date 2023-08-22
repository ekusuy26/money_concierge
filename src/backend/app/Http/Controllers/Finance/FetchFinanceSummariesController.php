<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;

class FetchFinanceSummariesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService, string $userId)
    {
        $summary = $financeService->fetchSummaries($userId);
        return response()->json($summary);
    }
}
