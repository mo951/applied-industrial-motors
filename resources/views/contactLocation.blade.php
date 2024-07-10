@extends('layouts.main')
@section('content')
@include('extends.slider')
<main role="main" class="middle-content-area">
    <div class="container-fluid">
        @include('extends.selections')
        <div>
            <section class="western-territory-area mt-4">
                <div class="row">
                    <div class="col-md-10 col-sm-10 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-12 py-3">
                        <h2>{{$contactList->title}}</h2>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="western-territoryBox">
                                    <?php print $contactList->description; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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