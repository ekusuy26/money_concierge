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
            ['id' => 1, 'name' => "食費", 'slug' => "food", 'color' => "#B0E57C"],
            ['id' => 2, 'name' => "日用品", 'slug' => "dailyNecessities", 'color' => "#FFD5B8"],
            ['id' => 3, 'name' => "交通", 'slug' => "traffic", 'color' => "#A7DFFC"],
            ['id' => 4, 'name' => "交際", 'slug' => "companionship", 'color' => "#FFD1E3"],
            ['id' => 5, 'name' => "被服", 'slug' => "clothes", 'color' => "#E8E3FA"],
            ['id' => 6, 'name' => "美容", 'slug' => "beauty", 'color' => "#FFFACD"],
            ['id' => 7, 'name' => "医療", 'slug' => "medical", 'color' => "#FFC6A0"],
            ['id' => 8, 'name' => "特別", 'slug' => "special", 'color' => "#FCE197"],
            ['id' => 9, 'name' => "趣味", 'slug' => "hobby", 'color' => "#BFFAB9"],
            ['id' => 10, 'name' => "雑費", 'slug' => "miscellaneous", 'color' => "#A0917F"],
            ['id' => 11, 'name' => "住居", 'slug' => "residence", 'color' => "#C0C0C0"],
            ['id' => 12, 'name' => "水道、光熱", 'slug' => "lifeLine", 'color' => "#C9EAB7"],
            ['id' => 13, 'name' => "通信", 'slug' => "communication", 'color' => "#B0E2FF"],
            ['id' => 14, 'name' => "保険", 'slug' => "insurance", 'color' => "#D1D1D1"],
            ['id' => 15, 'name' => "自動車", 'slug' => "car", 'color' => "#FF9999"],
            ['id' => 16, 'name' => "教育", 'slug' => "education", 'color' => "#FFD8E6"],
        ];
        Category::upsert($data, ['id']);
    }
}
