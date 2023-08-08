<?php

namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService
{
    private $categoryRepository;

    function __construct()
    {
        $this->categoryRepository = new CategoryRepository;
    }
    /**
     * fetch all categories
     * 
     */
    public function fetchCategories()
    {
        return $this->categoryRepository->fetchList();
    }
}
