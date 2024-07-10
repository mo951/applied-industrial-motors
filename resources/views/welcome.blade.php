@extends('layouts.main')
@section('content')
@include('extends.slider')
    <main>
        <main role="main" class="middle-content-area">
            <div class="container-fluid">
                @include('extends.selections')
                <section class="search-autocomplete-form p-4">
                    <div class="row">
                        <div class="col-md-12">
                            <hr data-content="OR" class="hr-text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <form class="mt-4">
                                <div class="row">
                                    <div class="col-md-6 divided-line">
                                        <div class="row">
                                            <div class="col-md-12"><label>Find motors by part number</label></div>
                                            <div class="form-group col-md-10 col-10 pr-0"><input type="text" class="form-control" id="part_number" value="">
                                                <div class="auto-suggestion" id="autoSuggestionPartNumber"></div>
                                                <span style="color: red;"></span>
                                            </div>
                                            <div class="form-group col-md-2 col-2 pl-0"><i class="fas fa-search" style="font-size: 15px; cursor: pointer;"></i></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 pl-5">
                                        <div class="row">
                                            <div class="col-md-12"><label>Find test reports by motor series
                                                    number</label></div>
                                            <div class="form-group col-md-10 col-10 pr-0"><input type="text" class="form-control"></div>
                                            <div class="form-group col-md-2 col-2 pl-0"><i class="fas fa-search" style="font-size: 15px;"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <p><!-- Global site tag (gtag.js) - Google Analytics -->
                <section class="new-products">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="row pt-4 pb-2">
                                <div class="col-md-4">
                                    <div class="product-img">
                                        <a href=""> <img class="d-block img-fluid mx-auto" src="{{url('assets/images/p-1.png')}}" alt="motors">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-img">
                                        <a href=""> <img class="d-block img-fluid mx-auto" src="{{url('assets/images/p-2.jpg')}}" alt="motors" height="500">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="product-img">
                                        <a href=""> <img class="d-block img-fluid mx-auto" src="{{url('assets/images/p-1.png')}}" alt="motors">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content" class="row" style="display: none;"><iframe name="content" width="100%" height="1600" frameborder="0"></iframe></div>
                </section>
                <!-- <section id="motors" class="new-products">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="orange-title-bg">
                                        <h4 class="text-white">3 General Purpose Motors (Click to access motor data)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3 pb-2">
                                <div class="col-md-12">
                                    <div id="owl-carousel2" class="owl-carousel owl-theme owl-loaded owl-drag">





                                        <div class="owl-stage-outer">
                                            <div class="owl-stage"
                                                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1865px;">
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/15-nema-premium-cast-iron">
                                                            <img class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/CAST_IRON_no_org-01.png"
                                                                alt="15-nema-premium-cast-iron"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/2-nema-premium-aluminum">
                                                            <img class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/Aluminum_NO_ORG-01.png"
                                                                alt="2-nema-premium-aluminum"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/metric-iec"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/IEC_no_org-01.png"
                                                                alt="/products/metric-iec"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a
                                                            href="../../../products/three-phase-open-enclosure"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/ODP_no_org-01.png"
                                                                alt="/products/three-phase-open-enclosure"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/cobra"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/COBRA_MP_Box-01.png"
                                                                alt="/products/Cobra"> </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-nav disabled"><button type="button" role="presentation"
                                                class="owl-prev"><span aria-label="Previous">‹</span></button><button
                                                type="button" role="presentation" class="owl-next"><span
                                                    aria-label="Next">›</span></button></div>
                                        <div class="owl-dots disabled"><button role="button"
                                                class="owl-dot active"><span></span></button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="orange-title-bg">
                                        <h4 class="text-white">3 Definite Purpose Motors (Click to access motor data)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3 pb-2">
                                <div class="col-md-12">
                                    <div id="owl-carousel3" class="owl-carousel owl-theme owl-loaded owl-drag">






                                        <div class="owl-stage-outer">
                                            <div class="owl-stage"
                                                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2238px;">
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/oil-pump"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/HIGH_SLIP_no_org-01.png"
                                                                alt="/products/Oil%20Pump"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/22-crusher-duty-motors">
                                                            <img class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/CRUSHER_no_org-01.png"
                                                                alt="/products/22-crusher-duty-motors"></a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/31-washdown"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/WASHDOWN_no_org-01.png"
                                                                alt="/products/31-washdown"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/phase-converter-motor">
                                                            <img class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/PHASE_CONVERT_no_org-01.png"
                                                                alt="/products/phase-converter-motor"> </a></div>
                                                </div>
                                                <div class="owl-item active" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/premium-jm-jp"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/JM_JP_Pump_PREMIUM-01.png"
                                                                alt="/products/premium-jm-jp"> </a></div>
                                                </div>
                                                <div class="owl-item" style="width: 363px; margin-right: 10px;">
                                                    <div class="item"><a href="../../../products/epact-jm-jp"> <img
                                                                class="d-block img-fluid mx-auto"
                                                                src="../../../files/embeds/JM_JP_Pump_HIGH_EFF-01.png"
                                                                alt="/products/epact-jm-jp"> </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-nav disabled"><button type="button" role="presentation"
                                                class="owl-prev"><span aria-label="Previous">‹</span></button><button
                                                type="button" role="presentation" class="owl-next"><span
                                                    aria-label="Next">›</span></button></div>
                                        <div class="owl-dots disabled"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="orange-title-bg">
                                        <h4 class="text-white">1 General Purpose Motors (Click to access motor data)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3 pb-2">
                                <div class="col-md-3"><a href="../../../products/17-farm-duty-motors"> <img
                                            class="d-block img-fluid mx-auto"
                                            src="../../../files/embeds/FARM_DUTY_no_org-01.png"
                                            alt="/products/17-farm-duty-motors"> </a></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="orange-title-bg">
                                        <h4 class="text-white">Dc Permanent Magnet Motors (Click to access motor data)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3 pb-2">
                                <div class="col-md-3"><a href="../../../products/pm-dc-motor"> <img
                                            class="d-block img-fluid mx-auto"
                                            src="../../../files/embeds/DC_MOTORS_MP_Box-01.png" alt="/products/pm-dc-motor">
                                    </a></div>
                            </div>
                        </section> -->
                </p>
            </div>
        </main>
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