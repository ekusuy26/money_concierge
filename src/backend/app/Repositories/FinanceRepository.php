<?php

namespace App\Repositories;

use App\Models\Finance;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class FinanceRepository
{
    private $user;
    private $finance;
    private $bool;

    function __construct()
    {
        $this->user = new User;
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
            ->select(
                'finances.id',
                'amount',
                'slug',
                'item_name',
                'category_id',
                'name as category_name',
                'date',
                'income_flg',
                'memo'
            )
            ->leftJoin('categories', 'finances.category_id', 'categories.id')
            ->whereBetween('date', [$startDate, $endDate])
            ->orderBy('date', 'desc')
            ->get()
            ->transform(function ($item) {
                $date = Carbon::parse($item->date);
                $weekday = ['日', '月', '火', '水', '木', '金', '土'];
                $item->formatDate = $date->format('Y年m月d日（' . $weekday[$date->dayOfWeek] . '）');
                return $item;
            });
    }

    public function fetchUserId($email): string
    {
        $user = $this->user->where('email', $email)->first();
        return $user->id;
    }

    public function store($attributes)
    {

        DB::beginTransaction();
        try {
            $this->finance->fill($attributes)->upsert([$attributes], ['id']);
            DB::commit();
            $this->bool = true;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('[fail store finance]' . $e->getMessage());
            $this->bool = false;
        }
        return $this->bool;
    }

    public function delete($id): bool
    {
        DB::beginTransaction();
        try {
            $this->finance->findOrFail($id)->delete();
            DB::commit();
            $this->bool = true;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('[fail delete finance]' . $e->getMessage());
            $this->bool = false;
        }
        return $this->bool;
    }

    // /**
    //  * @return string
    //  */
    // public function sumIncome($year = null, $month = null): string
    // {
    //     if (is_null($year) || is_null($month)) {
    //         $now = now();
    //         $year = $now->year;
    //         $month = $now->month;
    //     }
    //     return $this->finance->where('income_flg', true)
    //         ->whereYear('date', $year)
    //         ->whereMonth('date', $month)
    //         ->sum('amount');
    // }

    public function getCategoryPayment()
    {
        $oneYearAgo = now()->subYear();
        return $this->finance
            ->leftJoin('categories', 'finances.category_id', 'categories.id')
            ->where('income_flg', false)
            ->where('date', '>=', $oneYearAgo)
            ->select(
                'categories.id',
                'categories.name',
                'categories.slug',
                'categories.color',
                \DB::raw('DATE_FORMAT(date, "%Y年%c月") as month'),
                \DB::raw('SUM(amount) as total_amount')
            )
            ->groupBy('categories.id', 'categories.name', 'categories.slug', 'categories.color', 'month')
            ->orderBy('month', 'desc')
            ->get();
    }
}
