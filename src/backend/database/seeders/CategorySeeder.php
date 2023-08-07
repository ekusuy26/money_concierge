<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['id' => 1, 'name' => "食費", 'slug' => "food"],
            ['id' => 2, 'name' => "日用品", 'slug' => "dailyNecessities"],
            ['id' => 3, 'name' => "交通", 'slug' => "traffic"],
            ['id' => 4, 'name' => "交際", 'slug' => "companionship"],
            ['id' => 5, 'name' => "被服", 'slug' => "clothes"],
            ['id' => 6, 'name' => "美容", 'slug' => "beauty"],
            ['id' => 7, 'name' => "医療", 'slug' => "medical"],
            ['id' => 8, 'name' => "特別", 'slug' => "special"],
            ['id' => 9, 'name' => "趣味", 'slug' => "hobby"],
            ['id' => 10, 'name' => "雑費", 'slug' => "miscellaneous"],
            ['id' => 11, 'name' => "住居", 'slug' => "residence"],
            ['id' => 12, 'name' => "水道、光熱", 'slug' => "lifeLine"],
            ['id' => 13, 'name' => "通信", 'slug' => "communication"],
            ['id' => 14, 'name' => "保険", 'slug' => "insurance"],
            ['id' => 15, 'name' => "自動車", 'slug' => "car"],
            ['id' => 16, 'name' => "教育", 'slug' => "education"],
        ];
        Category::upsert($data, ['id']);
    }
}
