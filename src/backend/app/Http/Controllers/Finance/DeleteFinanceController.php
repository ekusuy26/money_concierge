<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use App\Services\FinanceService;
use Illuminate\Http\Request;

class DeleteFinanceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(FinanceService $financeService, int $id)
    {
        $bool = $financeService->deleteFinance($id);
        return response()->json($bool);
    }
}
