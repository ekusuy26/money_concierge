<?php

namespace App\Repositories;

use App\Models\Finance;
use Illuminate\Support\Collection;

class FinanceRepository
{
    private $finance;

    function __construct()
    {
        $this->finance = new finance;
    }

    /**
     * fetch finances list
     * 
     * @return Collection<Finance>
     */
    public function fetchList($startDate, $endDate): Collection
    {
        return $this->finance
            ->select('finances.id', 'amount', 'slug', 'item_name', 'name as category_name', 'date')
            ->leftJoin('categories', 'finances.category_id', 'categories.id')
            ->whereBetween('date', [$startDate, $endDate])
            ->orderBy('date', 'desc')
            ->get();
    }
}
