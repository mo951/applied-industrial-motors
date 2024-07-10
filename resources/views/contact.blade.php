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
        <section class="contact-area mt-4">
            <div class="row">
                <div class="col-md-10 col-sm-10 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-12 py-3">
                    <div>
                        <div class="row pb-3">
                            <div class="col-md-5"><img class="d-block img-fluid py-3" src="{{url('assets/images/Logo_Idea_2.webp')}}" alt="" width="400" height="101"></div>
                            <div class="col-md-7">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="contactBox"><img class="d-block img-fluid" src="//techtopind.net/files/contact/contact1.jpg" alt="" width="400" height="223"></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="contactBox"><img class="d-block img-fluid" src="//techtopind.net/files/contact/contact2.jpg" alt="" width="400" height="223"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row py-4">
                            <div class="col-md-4">
                                <div class="infoBox">
                                    <div class="icon">&nbsp;</div>
                                    <div class="text">
                                        <ul>
                                            <li>2815 Colonnades Court</li>
                                            <li>Peachtree Corners, Ga 30071</li>
                                            <li>USA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="infoBox">
                                    <div class="icon">&nbsp;</div>
                                    <div class="text">
                                        <ul>
                                            <li>Toll-free: <a href="tel:1855TECHTOP">1-855-TECHTOP</a></li>
                                            <li>Main: <a href="tel:16784365540">1-678-436-5540</a></li>
                                            <li>Fax: <a href="tel:18662041498">1-866-204-1498</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="infoBox">
                                    <div class="icon">&nbsp;</div>
                                    <div class="text">
                                        <ul>
                                            <li>Email: <a href="mailto:info@techtopind.com">orders@techtopind.com</a>
                                            </li>
                                            <li>Website: <a>www.techtop.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-4">
                            <div class="col-md-12">
                                <div class="title mb-5">
                                    <h4>Click Your Region to Find Your Local Representative <img class="d-block img-fluid" src="images/home-img/logo-small.png" alt=""></h4>
                                </div>
                                <img src="//techtopind.net/files/contact/map.jpg" alt="Map" usemap="#image-map">
                                <map name="image-map">
                                    <area title="Florida" alt="Florida" coords="620,432,620,443,659,451,679,445,708,458,710,485,722,508,746,536,760,519,745,485,739,461,727,442,723,429" shape="poly" href="{{route('contactLocation','florida')}}" target="">

                                    <area title="South Central Territory" alt="South Central Territory" coords="169,278,139,363,196,400,245,408,249,399,278,404,334,471,347,451,378,465,395,499,408,525,430,533,439,539,439,530,435,518,433,507,438,497,452,489,464,482,481,474,501,460,533,458,557,467,582,466,579,453,579,441,546,426,552,407,552,392,552,369,566,350,575,332,567,321,492,324,490,312,351,308" shape="poly" href="{{route('contactLocation','south')}}-central" target="">

                                    <area title="Western Territory" alt="Western Territory" coords="97,354,89,329,45,297,50,279,30,239,29,216,23,187,24,160,36,136,36,113,69,54,79,12,100,16,102,37,113,25,109,6,186,22,194,27,205,66,203,92,213,115,221,127,242,135,245,142,236,180,192,175,180,221,169,272,165,290,154,290,150,308,151,321,144,344,139,356" shape="poly" href="{{route('contactLocation','western')}}" target="">

                                    <area title="Mountain States Territory" alt="Mountain States Territory" coords="200,25,200,50,211,67,215,115,235,129,246,134,243,164,239,185,230,183,193,178,182,224,171,261,171,275,365,302,371,225,340,221,350,142,359,56" shape="poly" href="{{route('contactLocation','midwest')}}" target="">

                                    <area title="Upper Midwest Territory" alt="Upper Midwest Territory" coords="362,57,348,177,406,180,437,193,462,192,460,176,538,176,519,152,517,129,526,109,561,78,519,77,493,67,480,60" shape="poly" href="{{route('contactLocation','upper')}}-midwest" target="">

                                    <area title="Central Territory" alt="Central Territory" coords="348,180,343,217,375,222,367,300,487,307,493,321,575,320,583,308,594,296,599,285,603,274,605,262,600,241,545,243,477,238,466,205,451,193,415,187" shape="poly" href="{{route('contactLocation','central')}}" target="">

                                    <area title="North Central Territory" alt="North Central Territory" coords="463,175,478,233,536,235,601,238,601,210,594,196,590,171,598,142,597,129,618,116,649,114,632,106,617,101,586,105,575,95,547,110,530,110,520,128,530,158,538,172,541,179" shape="poly" href="{{route('contactLocation','north')}}-central" target="">

                                    <area title="East Central Territory" alt="East Central Territory" coords="602,208,602,290,582,316,601,315,676,307,694,283,705,289,711,282,723,280,728,269,734,267,735,260,743,261,760,240,758,235,745,236,735,250,734,235,759,230,751,187,713,194,694,203,681,210,670,203,675,188,675,175,670,159,654,162,654,153,660,142,654,130,639,128,627,140,615,153,615,169,620,182,617,195,612,206" shape="poly" href="{{route('contactLocation','east')}}-central" target="">

                                    <area title="Northeastern Territory" alt="Northeastern Territory" coords="751,188,758,228,735,236,734,249,744,240,762,238,774,246,778,256,793,262,789,244,789,237,794,234,797,248,800,259,808,262,817,253,810,242,801,229,812,230,815,217,815,203,840,185,812,197,799,189,791,181,781,179" shape="poly" href="{{route('contactLocation','northeastern')}}-1" target="">

                                    <area title="New England Territory" alt="New England Territory" coords="818,191,839,178,854,173,868,162,853,150,849,142,857,131,864,117,869,101,880,100,895,90,890,81,879,76,869,55,858,49,848,49,841,59,841,76,841,91,831,100,802,107,808,137,814,153,815,174" shape="poly" href="{{route('contactLocation','northeastern')}}-2" target="">

                                    <area title="Upstate New York" alt="Upstate New York" coords="720,185,720,191,787,177,798,188,816,193,815,153,812,144,810,138,801,109,778,115,763,138,767,149,729,162,728,168,733,172" shape="poly" href="{{route('contactLocation','northeastern')}}-3" target="">

                                    <area title="Southeast Territory" alt="Southeast Territory" coords="578,322,600,316,710,307,663,343,685,344,697,359,713,375,729,392,726,428,667,434,662,429,617,431,617,444,602,443,583,446,579,436,546,434,557,407,553,393,553,380" shape="poly" href="{{route('contactLocation','southeast')}}" target="">

                                    <area title="Central Eastern Territory" alt="Central Eastern Territory" coords="712,305,664,343,690,343,735,392,767,356,803,324,803,296,805,285,795,280,791,264,774,258,775,247,762,240,737,262,726,271,723,282,710,284,704,289,695,282,672,310" shape="poly" href="{{route('contactLocation','carolina')}}" target="">
                                </map>
                            </div>
                        </div>
                        <!--<meta http-equiv="Refresh" content="0;url=dealers"> -->
                        <!-- Global site tag (gtag.js) - Google Analytics --><!--    
                    <p><a href="dealers">Redirecting...</a></p>
                    <script>window.location = "dealers";</script>
                     -->
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