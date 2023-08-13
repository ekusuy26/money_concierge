<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;
use Illuminate\Http\Request;

class FetchFinanceSummaryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService)
    {
        $summary = $financeService->fetchSummary();
        return response()->json($summary);
    }
}
