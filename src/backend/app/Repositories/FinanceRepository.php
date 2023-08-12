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
}
