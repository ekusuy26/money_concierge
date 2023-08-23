<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;

class FetchBudgetSummaryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CategoryService $categoryService, string $userId)
    {
        $budgets = $categoryService->fetchBudgetSummary($userId);
        return response()->json($budgets);
    }
}
