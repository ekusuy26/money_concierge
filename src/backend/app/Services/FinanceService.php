<?php

namespace App\Services;

use App\Repositories\FinanceRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class FinanceService
{
    private $financeRepository;

    function __construct()
    {
        $this->financeRepository = new FinanceRepository;
    }

    /**
     * 
     */
    public function fetchFinances()
    {
        $startDate = Carbon::now()->subMonths(2)->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        return $this->financeRepository->fetchList($startDate, $endDate);
    }

    /**
     * store finance
     * 
     */
    public function storeFinance($attributes)
    {
        $userId = $this->financeRepository->fetchUserId($attributes['email']);
        $attributes['user_id'] = $userId;
        unset($attributes['email']);
        return $this->financeRepository->store($attributes);
    }

    /**
     * store finance
     * 
     */
    public function deleteFinance($id): bool
    {
        return $this->financeRepository->delete($id);
    }

    /**
     * 
     */
    public function fetchSummaries()
    {
        $query = $this->financeRepository->getCategoryPayment();
        $summary = [];
        foreach ($query as $q) {
            $key = $q->month;
            $summary[$key]['chart']['labels'][] = $q->name;
            $summary[$key]['chart']['colors'][] = $q->color;
            $summary[$key]['chart']['values'][] = $q->total_amount;
            $summary[$key]['list'][] = $q;
        }
        // $income = $this->financeRepository->sumIncome();
        // foreach ($query as $s) {
        //     $summary['labels'][] = $s->name;
        //     $summary['values'][] = $s->total_amount;
        //     $summary['colors'][] = $colorPallet[$s->slug];
        //     $summary['income'] = $income;
        // }
        return $summary;
    }
}
