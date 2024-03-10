<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class post extends Model
{
    use HasFactory;
    protected $with = ['images'];

    function postTranslate() : HasMany {
        return $this->hasMany(postTranslate::class);
    }

    function images() : HasMany {
        return $this->hasMany(postImage::class);
    }
}