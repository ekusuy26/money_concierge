<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;
use Illuminate\Http\Request;

class FetchFinanceSummaryListController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService)
    {
        $list = $financeService->fetchSummaryList();
        return response()->json($list);
    }
}
