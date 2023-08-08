<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class FetchCategoriesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CategoryService $categoryService)
    {
        $categories = $categoryService->fetchCategories();

        return response()->json($categories);
    }
}
