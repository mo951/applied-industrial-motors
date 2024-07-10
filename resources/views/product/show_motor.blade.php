@extends('layouts.main')
@section('content')
@include('extends.slider')
<main role="main" class="middle-content-area">
    <div class="container-fluid">
        @include('extends.selections')
        <section class="search-autocomplete-form p-4">
            <div class="row">
                <div class="col-md-12">
                    <hr data-content="OR" class="hr-text">
                </div>
            </div>

        </section>
        <section class="product-area my-1">
            <div class="row">
                <div class="col-md-12">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{url('/')}}">Home</a><i class="fas fa-angle-right"></i>
                        </li>
                        <li class="breadcrumb-item"><a href="/products">Products</a><i class="fas fa-angle-right"></i>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="row">
                @include('extends.sidebar')
                    <div class="col-md-8 col-sm-12 col-xl-8 col-lg-8 col-12">
                        <div class="row">
                            <div class="col-md-12 mb-4">
                                <article class="motors">
                                    <table class="table mt-5">
                                        <thead>
                                            <tr>
                                                <th>Part Number</th>
                                                <th>Motor Group</th>
                                                <th>Frame Size</th>
                                                <th>HP</th>
                                                <th>RPM</th>
                                                <th>Voltage</th>
                                                <th>List Price</th>
                                                <th>Multiplier Code</th>
                                                <th colspan="2">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          @if (isset($status))
                                                <td><div class="text-danger fs-4">{{ $status }}</div></td>
                                            @elseif(isset($showFilteredProducts))
                                                @foreach ($showFilteredProducts as $product)
                                                  <tr>
                                                        <td><a href="/motors/{{$product->slug}}">{{$product->motor_name}}</a></td>
                                                        <td>{{$product->motorGroup->value}}</td>
                                                        <td>{{$product->frameSize->value}}</td>
                                                        <td>{{$product->horsepower->value}}</td>
                                                        <td>{{$product->speed->value}}</td>
                                                        <td>{{$product->voltage->value}}</td>
                                                        <td>{{$product->price}}</td>
                                                        <td>{{$product->multiplier_code}}</td>
                                                        <td colspan="2"><a href="{{ route('product.show', ['slug' => $product->slug])}}">product details</a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endif
                                        </tbody>
                                    </table>
                                </article>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </div>
</main>
@endsection
@push('js')
<script>

</script>
@endpush
@push('css')
<style>
</style>
@endpush