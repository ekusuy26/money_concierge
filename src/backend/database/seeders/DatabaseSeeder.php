<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $email = config('env.dev_user_email');
        if ($email) {
            \App\Models\User::insert([
                'id' => (string) Str::uuid(),
                'name' => 'dev user',
                'email' => $email,
            ]);
        }
        $this->call([
            CategorySeeder::class,
            FinanceSeeder::class
        ]);
    }
}
