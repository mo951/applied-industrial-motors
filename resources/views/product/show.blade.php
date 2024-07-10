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
                @include('extends.sidebar')
                @if(isset($product))
                <div class="col-md-8 col-sm-12 col-xl-8 col-lg-8 col-12">
                    <div class="products">
                        <div class="row">
                            <div class="col-md-8">
                                <h3><strong>{{$product[0]->slug}}</strong></h3>
                            </div>
                            <div class="col-md-4 text-right"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <article class="motors">
                                    <table class="table" style="border-top: 10px solid rgb(187, 93, 64); border-bottom: 10px solid rgb(187, 93, 64);">
                                        <tbody>
                                                @foreach ($product as $item)
                                                    <tr><td>Motor Group</td><td>{{$item->MotorGroup->value}}</td></tr>
                                                    <tr><td>Frame Size</td><td>{{$item->frameSize->value}}</td></tr>
                                                    <tr><td>HP</td><td>{{$item->horsepower->value}}</td></tr>
                                                    <tr><td>RPM</td><td>{{$item->speed->value}}</td></tr>
                                                    <tr><td>Voltage</td><td>{{$item->voltage->value}}</td></tr>
                                                    <tr><td>List Price</td><td>{{$item->price}}</td></tr>
                                                    <tr><td>Multiplier Code</td><td>{{$item->multiplier_code}}</td></tr>
                                                    <tr><td>Mounting</td><td>{{$item->mounting}}</td></tr>
                                                @endforeach
                                            </pre>
                                        </tbody>
                                    </table>
                                    {{-- <ul>
                                        <li><a href="https://techtopind.net/files/datasheets/GX3-AL-TF-56C-4-B-D-.75-BRK.pdf">datasheet</a></li>
                                    </ul> --}}
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                @endif
                
               
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