@extends('layouts.main')
@section('content')
@include('extends.slider')
<main role="main" class="middle-content-area">
    <div class="container-fluid">
        @include('extends.selections')
        <section class="downloads-area mt-2">
            <div class="row mb-4">
                @foreach($downloadables as $downloadable)
                <div class="col-md-12">
                    <h4>{{$downloadable->name}}</h4>
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="download_items">
                                <div class="row">
                                    @foreach($downloadable->pdfs as $pdf)
                                        <div class="col-md-3 col-sm-3 col-lg-2 col-xl-2 col-6">
                                            <a href="{{$pdf->pdf_url}}">
                                                <img src="{{$pdf->image_url}}" alt="" class="d-block img-fluid mx-auto w-100">
                                            </a>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                @endforeach
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