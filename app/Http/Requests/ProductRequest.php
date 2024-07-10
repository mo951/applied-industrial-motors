<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        $id = intval(optional($this->route('product'))->id);
        return [
            'product_name' =>'required|max:255',
            'category_id' =>'required|exists:App\Models\Category,id',
            'description' =>'required',
            'quantity_discounts_tier_id' => 'required'
            // 'product_slug'=>'required|max:255|unique:App\Models\Product,product_slug'.($id>0?(','.$id):''),
        ];
    }
}
