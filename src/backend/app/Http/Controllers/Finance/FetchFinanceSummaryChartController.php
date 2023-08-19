<?php

namespace App\Http\Controllers\Finance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FetchFinanceSummaryChartController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $result = [
            ['id' => 1, 'date' => '2023年8月', 'year' => 2023, 'month' => 8],
            ['id' => 2, 'date' => '2023年7月', 'year' => 2023, 'month' => 7],
            ['id' => 3, 'date' => '2023年6月', 'year' => 2023, 'month' => 6],
            ['id' => 4, 'date' => '2023年5月', 'year' => 2023, 'month' => 5],
        ];
        return response()->json($result);
    }
}
