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
                        <li class="breadcrumb-item active">{{$product->motor_name}}</li>
                    </ol>
                </div>
            </div>
            <div class="row">
                @include('extends.sidebar')
                <div class="col-md-8 col-sm-12 col-xl-8 col-lg-8 col-12">
                    <div class="row">
                        <div class="col-md-8">
                            <h3><strong>{{$product->motor_name}}</strong></h3>
                        </div>
                        <div class="col-md-4 text-right"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <article class="motors">
                                <table class="table"
                                    style="border-top: 10px solid rgb(187, 93, 64); border-bottom: 10px solid rgb(187, 93, 64);">
                                    <tbody>
                                        <tr>
                                            <td>Motor Group</td>
                                            <td>{{$product->motorGroup->value}}</td>
                                        </tr>
                                        <tr>
                                            <td>Frame Size</td>
                                            <td>{{$product->frameSize->value}}</td>
                                        </tr>
                                        <tr>
                                            <td>HP</td>
                                            <td>{{$product->horsepower->value}}</td>
                                        </tr>
                                        <tr>
                                            <td>RPM</td>
                                            <td>{{$product->speed->value}}</td>
                                        </tr>
                                        <tr>
                                            <td>Voltage</td>
                                            <td>{{$product->voltage->value}}</td>
                                        </tr>
                                        <tr>
                                            <td>List Price</td>
                                            <td>{{$product->price}}</td>
                                        </tr>
                                        <tr>
                                            <td>Multiplier Code</td>
                                            <td>{{$product->multiplier_code}}</td>
                                        </tr>
                                        <tr>
                                            <td>Mounting</td>
                                            <td>{{$product->mounting}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul>
                                    @if($product->image_url)
                                        <li>
                                            <a href="{{ $product->image_url }}" target="_blank">2D drawing</a>
                                        </li>
                                    @endif

                                    @if($product->image_url_three_drawing)
                                        <li>
                                            <a href="{{ $product->image_url_three_drawing }}" target="_blank">3D drawing</a>
                                        </li>
                                    @endif

                                    @if($product->image_url_datasheet)
                                        <li>
                                            <a href="{{ $product->image_url_datasheet }}" target="_blank">datasheet</a>
                                        </li>
                                    @endif
                                </ul>
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