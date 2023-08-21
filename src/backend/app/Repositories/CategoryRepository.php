<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Finance;
use App\Models\Budget;
use App\Repositories\FinanceRepository;
use Illuminate\Support\Collection;

class CategoryRepository
{
    private $category, $budget;

    function __construct()
    {
        $this->category = new Category;
        $this->budget = new Budget;
    }

    /**
     * fetch categories list
     * 
     * @return Collection<Category>
     */
    public function fetchList(): Collection
    {
        return $this->category
            ->select('id', 'name', 'slug')
            ->get();
    }

    /**
     * fetch categories list
     * 
     * @return Collection<Finance>
     */
    public function fetchBudget()
    {
        $budgets = $this->budget
            ->leftJoin('categories', 'budgets.category_id', 'categories.id')
            ->pluck('amount', 'category_id')
            ->toArray();
        $financeRepository = new FinanceRepository;
        $achievements = $financeRepository->getCategoryPayment(2023, 8);
        foreach ($achievements as $a) {
            $a->budget = $budgets[$a->id];
            $percentage = ($a->total_amount / $a->budget) * 100;
            $a->ratio = number_format($percentage, 2);
        }
        return $achievements;
    }
}
