<?php

namespace App\Repositories;

use App\Models\Category;
use Illuminate\Support\Collection;

class CategoryRepository
{
    private $category;

    function __construct()
    {
        $this->category = new Category;
    }

    /**
     * fetch categories list
     * 
     * @return Collection<Category>
     */
    public function fetchList(): Collection
    {
        return $this->category
            ->select('id', 'name', 'slug')
            ->get();
    }
}
