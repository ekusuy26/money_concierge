<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class FetchBudgetController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CategoryService $categoryService, string $userId)
    {
        $result = $categoryService->fetchBudget($userId);
        return response()->json($result);
    }
}
