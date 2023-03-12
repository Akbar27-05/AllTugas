<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrdrDtlRequest;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    public function index()
    {
        return response()->json('index ordrdtl');
    }

    public function store(StoreOrdrDtlRequest $request)
    {
        OrderDetail::create($request->validated());
        return response()->json('OrderDtl Create');
    }
}
