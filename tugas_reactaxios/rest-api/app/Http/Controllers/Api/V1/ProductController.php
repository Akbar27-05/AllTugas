<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddProductRequest;
use App\Http\Resources\V1\ProductCollection;
use App\Http\Resources\V1\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return new ProductCollection(Product::all());
    }

    public function show(Product $product)
    {
        return new ProductResource($product);
    }
    
    public function store(AddProductRequest $request)
    {
        Product::create($request->validated());
        return response()->json("product create");
    }

    public function update(AddProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return response()->json("product update");
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json("Product Deleted");
    }
}
