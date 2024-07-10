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
        <section class="news-area mt-2">
            <div class="row">
                <div class="col-md-12 pt-3 pb-5">
                    @foreach($blogs as $blog)
                    <div class="row py-3">
                        <div class="col-md-12 pt-5 pb-3">
                            <div class="newsBox">
                                <div>
                                    @if($blog->title)
                                    <h1><strong>{{$blog->title}}</strong></h1>
                                    @endif
                                    <?php print $blog->description; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    @endforeach
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