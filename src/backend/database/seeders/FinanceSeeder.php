<?php

namespace Database\Seeders;

use App\Models\Budget;
use App\Models\Finance;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FinanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = \App\Models\Category::all();
        $email = config('env.dev_user_email');
        $user = \App\Models\User::select('id')->where('email', $email)->first();
        $num = 1;
        foreach ($categories as $category) {
            Finance::factory()->count(50)->create([
                'user_id' => $user->id,
                'category_id' => $category->id,
            ]);
            $data = [
                [
                    'id' => $num,
                    'user_id' => $user->id,
                    'category_id' => $category->id,
                    'amount' => mt_rand(10000, 100000)
                ],
            ];
            Budget::upsert($data, ['id']);
            $num++;
        }
    }
}
