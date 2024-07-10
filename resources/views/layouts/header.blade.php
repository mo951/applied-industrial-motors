<header class="headerSection"><span class="container-fluid" id="success_message" style="color: red; display: none;"></span>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12 d-none d-md-block ">
                <div class="logo">
                    <a href="{{url('/')}}"><img src="{{url('assets/images/Logo_Idea_2.webp')}}" alt="Techtopind Electric Motors" class="d-block img-fluid mx-auto"></a>
                </div>
            </div>
            <div class="col-md-8 col-sm-8 col-lg-7 col-xl-7 col-12">
                <nav class="navbar navbar-expand-md navbar-light" data-toggle="sticky-onscroll">
                    <a class="navbar-brand d-block d-md-none" href="#"><img src="{{url('assets/images/Logo_Idea_2.webp')}}" alt="Techtopind Electric Motors" class="d-block img-fluid"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav mr-auto black-bg">
                            <li class="nav-item dropdown has-mega-menu" style="position: static;"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span>Products</span></a>
                                <div class="dropdown-menu" id="dropdown">
                                    <div class="container">
                                        <div class="row">
                                            @foreach($categories as $category)
                                                <div class="col-md-12">
                                                    <h5><a href="{{route('category.index', $category->slug)}}">{{$category->name}}</a></h5>
                                                </div>
                                                @if($category->children()->count()>0)
                                                    @foreach($category->children as $children)
                                                        <div class="col-md-12">
                                                            <h6><a href="{{route('category.index', $children->slug)}}">{{$children->name}}</a></h6>
                                                        </div>
                                                        @if($children->children()->count()>0)
                                                            @foreach($children->children as $childrenx)
                                                                <div class="col-md-6"><a class="dropdown-item" href="{{route('product.index', $childrenx->slug)}}">{{$childrenx->name}}</a></div>
                                                            @endforeach
                                                        @endif
                                                    @endforeach
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="{{route('downloads')}}"><span>Downloads</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="catalog.html"><span>Catalog</span></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="{{route('news')}}"><span>News</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="{{route('contact')}}"><span>Contact
                                        Us</span></a>
                            </li>
                            <li class="nav-item" style="margin-left: 10px; position: relative;"><a class="nav-link" href="/DOE" style="white-space: nowrap;"><img src="https://www.techtopind.com/static/media/New DOE Button (2 x 1 in).gif" alt="GIF DOE Button" style="position: absolute; top: -33%; left: 5%; transform: scale(1.15); width: 150px; height: 95px;"></a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto black-bg" style="margin-right: -45px;">
                            @if( Auth()->user())
                                <li class="nav-item text-white">
                                    <span>Welcome, {{Auth()->user()->first_name}}</span>
                                    <a class="nav-link" href="{{route('logout')}}"><hr data-content="OR" class="hr-text">Logout</a>
                                </li>
                            @else
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="modal" data-bs-target="#myModal" href="/"><i class="fas fa-unlock"></i> <br>sign up</a>
                                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#myModal" href="/"><hr data-content="OR" class="hr-text">Log in</a>
                                </li>
                            @endif
                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    </div>
</header>


<div class="modal fade" id="myModal" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-lg-7 col-xl-7 pr-0">
                        <div class="black-bg h-100">
                            <h3>Sign in</h3>
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 col-12">
                                    <form class="login-form" id="user_login" method="POST" action="">
                                        @csrf
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" placeholder="E-mail" id="email" value="" required  style="background-color: rgb(250, 255, 189);">

                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" placeholder="Password" id="password" required value="" style="background-color: rgb(250, 255, 189);">
                                            <small>Password must be at least 8 characters long</small>
                                            <span style="color: red;" id="credentialsError"></span>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6 col-8">
                                                <div class="checkbox">
                                                    <label for="remember-me">
                                                        <span><input id="remember-me" name="remember-me" type="checkbox"></span>
                                                        <span>Remember me</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-4 text-right">
                                                <button type="submit" class="btn btn-primary" id="loginSubmit">Login</button>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-12 p-0">
                                                <a href="/user/forgot-password" class="btn btn-link">Forgot Your Password?</a>
                                                <a href="/user/confirmation" class="btn btn-link">Didn't receive confirmation instructions?</a>
                                            </div>
                                        </div>
                                        <i class="fas fa-unlock"></i>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-5 col-xl-5 px-0">
                        <div class="gray-bg h-100">
                            <button type="button" class="close" data-bs-dismiss="modal">×</button>
                            <h5>Sign up</h5>
                            <span style="color: green;" id="successMsg"></span>

                            <form id="user_registration" class="mt-4" method="POST" action="">
                                @csrf
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" placeholder="E-mail" id="user_email" required value="">
                                    <span style="color: red;" id="emailError"></span>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Password" id="encrypted_password" required value="">
                                    <span style="color: red;" id="passwordError"></span>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password_confirmation" placeholder="Password Confirmation" required id="conf_password" value="">
                                    <span style="color: red;" id="password_confirmationError"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="first_name" placeholder="First Name" id="first_name" required value="">
                                    <span style="color: red;" id="first_nameError"></span>
                                   
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="middle_name" placeholder="Middle Name" id="middle_initial" value="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="last_name" placeholder="Last Name" id="last_name" required value="">
                                    <span style="color: red;" id="last_nameError"></span>
                                  
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="phone" placeholder="Phone Number" id="phone" required value="">
                                    <span style="color: red;" id="phoneError"></span>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="cell_number" placeholder="Cell Phone Number" id="cell_phone" value="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="direct_number" placeholder="Direct Phone Number" id="direct_phone" value="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="fax" placeholder="Fax" id="fax" value="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="company" placeholder="Company" required id="company" value="">
                                    <span style="color: red;" id="companyError"></span>
                                   
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="address" placeholder="Address" required id="address" value="">
                                    <span style="color: red;" id="addressError"></span>
                                  
                                </div>
                                <div class="form-group">
                                    <select class="form-control" placeholder="State" name="state" id="state">
                                        <option value="">Select state</option>
                                        <option value="NA">Not in USA</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="city" placeholder="City" id="city" value="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="zip" placeholder="Zip" id="zip" value="">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="country" placeholder="Country" id="country" value="">
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-primary" id="btnSignUp">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}
@section('ajaxScript')
    <script>
            $('#user_registration').on('submit', function(event) {
            event.preventDefault();
            var items = ['email', 'password', 'password_confirmation', 'first_name', 'last_name', 'phone', 'company','address'];        
            var formData = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: '/signup',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: {'formdata': formData},
                success: function(response) {
                    items.forEach(function(item) { $("#"+item+"Error").text("") });
                    $("#successMsg").text(response.message)
                    $('#user_registration')[0].reset();
                },
                error: function(response) {
                    var data = JSON.parse(response.responseText);
                    items.forEach(function(item) {
                        console.log("aya err");
                        if(data['errors'][item] != undefined){
                            $("#"+item+"Error").text(data['errors'][item])
                        }else{
                            $("#"+item+"Error").text("")
                        }
                    });
                }
            });
        });
        $('#user_login').on('submit', function(event) {

            event.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: '/login',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: {'formdata': formData},
                success: function(response) {
                    if(response.status == 'success'){
                        console.log("Succes: " +response.message)
                        window.location.replace(response.url);
                    }
                    else{
                        $("#credentialsError").text(response.message);
                    }
                },
                error: function(response) {
                    console.log("Error: " +response.message)
                    $("#credentialsError").text(response.message);
                }
            });
        });
    </script>
@endsection