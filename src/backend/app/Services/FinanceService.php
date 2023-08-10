<?php

namespace App\Services;

use App\Repositories\FinanceRepository;
use Carbon\Carbon;

class FinanceService
{
    private $financeRepository;

    function __construct()
    {
        $this->financeRepository = new FinanceRepository;
    }
    /**
     * fetch all categories
     * 
     */
    public function fetchFinances()
    {
        $startDate = Carbon::now()->subMonths(2)->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        return $this->financeRepository->fetchList($startDate, $endDate);
    }
}
