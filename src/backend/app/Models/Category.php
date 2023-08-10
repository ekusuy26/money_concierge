<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    /**
     * 
     * @return HasMany
     */
    public function finances(): HasMany
    {
        return $this->hasMany(Finance::class);
    }
}
