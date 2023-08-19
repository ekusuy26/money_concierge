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
    public function fetchSummaryList($year, $month)
    {
        $query =  $this->financeRepository->getPaymentByCategoryForMonth($year, $month);
        return [
            'total_payment' => $query->sum('total'),
            'categories' => $query
        ];
    }
    /**
     * 
     */
    public function fetchSummary()
    {
        $summary = [
            'label' => [],
            'value' => [],
            'colors' => [],
            'income' => 0
        ];
        $colorPallet = [
            "food" => "rgb(255, 99, 132)",
            "dailyNecessities" => "rgb(54, 162, 235)",
            "traffic" => "rgb(255, 205, 86)",
            "companionship" => "rgb(255, 205, 86)",
            "clothes" => "rgb(255, 205, 86)",
            "beauty" => "rgb(255, 205, 86)",
            "medical" => "rgb(255, 205, 86)",
            "special" => "rgb(255, 205, 86)",
            "hobby" => "rgb(255, 205, 86)",
            "miscellaneous" => "rgb(255, 205, 86)",
            "residence" => "rgb(255, 205, 86)",
            "lifeLine" => "rgb(255, 205, 86)",
            "communication" => "rgb(255, 205, 86)",
            "insurance" => "rgb(255, 205, 86)",
            "car" => "rgb(255, 205, 86)",
            "education" => "rgb(255, 205, 86)",
        ];
        $query = $this->financeRepository->sumPaymentsByCategory();
        $income = $this->financeRepository->sumIncome();
        foreach ($query as $s) {
            $summary['labels'][] = $s->name;
            $summary['values'][] = $s->total_amount;
            $summary['colors'][] = $colorPallet[$s->slug];
            $summary['income'] = $income;
        }
        return $summary;
    }
}
