<?php

namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService
{
    private $categoryRepository;

    function __construct()
    {
        $this->categoryRepository = new CategoryRepository;
    }
    /**
     * fetch all categories
     * 
     */
    public function fetchCategories()
    {
        return $this->categoryRepository->fetchList();
    }

    /**
     * fetch all categories
     * 
     */
    public function fetchBudget()
    {
        $budgets = $this->categoryRepository->fetchBudget();
        $total = $budgets->sum('total_amount');
        return [
            'budgets' => $budgets,
            'total' => $total
        ];
    }
}
