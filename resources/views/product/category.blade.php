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
                        <li class="breadcrumb-item active">{{$category->name}}</li>
                    </ol>
                </div>
            </div>
            <div class="row">
                @include('extends.sidebar')
                <div class="col-md-8 col-sm-12 col-xl-8 col-lg-8 col-12">
                    <div class="products">
                        @foreach($tabs as $tab)
                        <div class="categoriesBox">
                            <div class="row mb-4">
                                <div class="col-md-12">
                                    <article class="product-details"><a href="/">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h3>{{$tab->tab->standard_features_heading}}</h3>
                                                </div>
                                            </div>
                                        </a></article>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <article class="product">
                                        <div class="row">
                                            <div class="col-md-9">
                                                <div>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href="javascript:void(0)" target="_blank"
                                                                        rel="noopener"><img style="width: 100%;"
                                                                            src="{{$tab->tab->image_url}}"
                                                                            alt="Key Description"></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="4"><span style="font-size: x-large;">
                                                                        <center><strong>Standard Features</strong>
                                                                        </center>
                                                                    </span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <?php print $tab->tab->standard_features; ?>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a href="{{$tab->tab->part_number_image_url}}"
                                                                        target="_blank" rel="noopener">
                                                                        <img style="width: 75%;"
                                                                            src="{{$tab->tab->part_number_image_url}}"
                                                                            alt="Key Description">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-3"><img src="{{$tab->tab->right_image_url}}" alt=""
                                                    class="d-block img-fluid mx-auto"></div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    
                    @if(isset($showProducts))
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
                                        @if (session('status'))
                                            <td><div class="text-danger fs-4">{{ session('status') }}</div></td>
                                        {{-- Filtered Query Case--}}
                                        @elseif (session('showFilteredProducts')) 
                                            @foreach(session('showFilteredProducts') as $product)
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
                                        {{-- Default Case --}}
                                        @else
                                            @foreach($showProducts as $product)
                                            {{-- {{dd($product->slug)}} --}}
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
                    @endif
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