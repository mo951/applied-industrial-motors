@extends('layouts.main')
@section('content')
{{-- @include('extends.slider') --}}
    <section class="sign-up">
        <div class="container">       
            <div class="row justify-content-center">
                <div class="col-8">
                    <h3>Sign in</h3>
                    <form class="login-form" id="sign_up_user"><span style="color: red;"></span>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email-address" placeholder="E-mail" id="email" value=""><span style="color: red;"></span>
                        </div>
                        <div class="form-group"><input type="password" class="form-control" name="password" placeholder="Password" id="password" value=""><small>Password must be at least 8
                                characters long</small><span style="color: red;"></span>
                        </div>
                        <div class="form-group row align-items-center">
                            <div class="col-md-6 col-8">
                                <div class="checkbox"><label for="remember-me"><span>
                                    <input id="remember-me" name="remember-me" type="checkbox"></span> <span>Remember me</span> </label>
                                </div>
                            </div>
                            <div class="col-md-6 col-4 d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary" id="loginSubmit">Login</button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12 p-0">
                                <a href="forgot.html" class="btn btn-link">Forgot Your Password?</a>
                                <a href="" class="btn btn-link">Didn't receive confirmation instructions?</a>
                            </div>
                        </div><i class="fas fa-unlock"></i>
                    </form> 
                </div>
            </div>
        </div>
    </section>
@endsection
{{-- 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"></script>
</body>

</html> --}}