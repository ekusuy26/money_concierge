<?php

namespace App\Services;

use App\Repositories\CategoryRepository;
use App\Repositories\FinanceRepository;

class CategoryService
{
    private $categoryRepository, $financeRepository;

    function __construct()
    {
        $this->categoryRepository = new CategoryRepository;
        $this->financeRepository = new FinanceRepository;
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
     * 
     */
    public function fetchBudgetSummary($userId)
    {
        $today = now();
        $year = $today->year;
        $month = $today->month;
        $costs = $this->financeRepository->fetchCostsForCurrentMonth($userId, $year, $month);
        return $this->categoryRepository->fetchBudgetsForMonth($userId, $costs);
    }
    /**
     * fetch all categories
     * 
     */
    public function fetchBudget($userId)
    {
        $budgets = $this->categoryRepository->fetchBudget($userId);
        $total = $budgets->sum('total_amount');
        return [
            'budgets' => $budgets,
            'total' => $total
        ];
    }
}
