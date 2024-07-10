<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = intval(optional($this->route('blog'))->id);
        return [
            'title' =>'max:255',
            'short_description' =>'max:255',
            'description' =>'',
            'slug'=>'required|max:255|unique:App\Models\Blog,slug'.($id>0?(','.$id):''),
        ];
    }
}
