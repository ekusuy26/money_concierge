<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Finance>
 */
class FinanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'income_flg' => $this->faker->boolean,
            'item_name' => random_int(0, 1) ? $this->faker->realText(10) : null,
            'amount' => $this->faker->numberBetween(10, 999999),
            'memo' => random_int(0, 1) ? $this->faker->realText(10) : null,
            'date' => $this->faker->dateTimeBetween('-1 years'),
            'category_id' => 1,
        ];
    }
}
