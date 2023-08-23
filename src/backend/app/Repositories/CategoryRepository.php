<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Finance;
use App\Models\Budget;
use App\Repositories\FinanceRepository;
use Illuminate\Support\Collection;
use Illuminate\Database\Query\JoinClause;

class CategoryRepository
{
    private $category, $budget, $financeRepository;

    function __construct()
    {
        $this->category = new Category;
        $this->budget = new Budget;
        $this->financeRepository = new FinanceRepository;
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
    public function fetchBudget($userId)
    {
        $budgets = $this->budget
            ->leftJoin('categories', 'budgets.category_id', 'categories.id')
            ->pluck('amount', 'category_id')
            ->toArray();
        $achievements = $this->financeRepository->getCategoryPayment($userId, 2023, 8);
        foreach ($achievements as $a) {
            $a->budget = $budgets[$a->id];
            $percentage = ($a->total_amount / $a->budget) * 100;
            $a->ratio = number_format($percentage, 2);
        }
        return $achievements;
    }

    public function fetchBudgetsForMonth($userId, $costs)
    {
        return $this->category->select(
            'categories.variable_flg',
            \DB::raw('SUM(amount) as budget'),
            \DB::raw("CASE WHEN variable_flg = 1 THEN '変動費' ELSE '固定費' END as cost_name"),
            \DB::raw('SUM(costs.payment) as cost'),
            \DB::raw('(SUM(costs.payment) / SUM(amount)) * 100 as cost_percentage')
        )
            ->leftJoin('budgets', 'categories.id', 'budgets.category_id')
            ->leftJoinSub($costs, 'costs', function (JoinClause $join) {
                $join->on('categories.variable_flg', '=', 'costs.cost');
            })
            ->where('user_id', $userId)
            ->groupBy('categories.variable_flg')
            ->get();
    }
}
