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
    public function fetchSummary()
    {
        $today = now();
        $year = $today->year;
        $month = $today->month;
        $query = $this->financeRepository->getCategoryPayment($year, $month);
        $summary = [];
        foreach ($query as $q) {
            $summary['labels'][] = $q->name;
            $summary['colors'][] = $q->color;
            $summary['values'][] = $q->total_amount;
        }
        $summary['payment'] = array_sum($summary['values']);
        return $summary;
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
        foreach ($summary as $key => $s) {
            $summary[$key]['payment'] = array_sum($s['chart']['values']);
        }
        return $summary;
    }
}
