<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrdrDtlRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'idBarang' => ['required'],
            'barang' => ['required', 'min:3', 'max:20'],
            'idPelanggan' => ['required'],
            'pelanggan' => ['required', 'min:3', 'max:20'],
            'alamat' => ['required'],
            'jumlah' => ['required'],
            'harga' => ['required']
        ];
    }
}
