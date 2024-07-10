<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Sign Up</title>
</head>

<body>
    <section class="sign-up">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-7">
                    <div class="sign-form">
                        <h5>Sign up</h5>
                        <form id="sign_up_user" class="mt-4">
                                <span style="color: red;"></span>
                            <div class="form-group"><input type="email" class="form-control" name="email"
                                    placeholder="E-mail" id="user_email" value=""><span style="color: red;"></span>
                            </div>
                            <div class="form-group"><input type="password" class="form-control" name="password"
                                    placeholder="Password" id="encrypted_password" value=""><span
                                    style="color: red;"></span></div>
                            <div class="form-group"><input type="password" class="form-control" name="password"
                                    placeholder="Password Confirmation" id="conf_password" value=""><span
                                    style="color: red;"></span></div>
                            <div class="form-group"><input type="text" class="form-control" name="fname"
                                    placeholder="First Name" id="first_name" value=""><span style="color: red;"></span>
                            </div>
                            <div class="form-group"><input type="text" class="form-control" name="mName"
                                    placeholder="Middle Name" id="middle_initial" value=""></div>
                            <div class="form-group"><input type="text" class="form-control" name="lname"
                                    placeholder="Last Name" id="last_name" value=""><span style="color: red;"></span>
                            </div>
                            <div class="form-group"><input type="text" class="form-control" name="number"
                                    placeholder="Phone Number" id="phone" value=""><span style="color: red;"></span>
                            </div>
                            <div class="form-group"><input type="text" class="form-control" name="number"
                                    placeholder="Cell Phone Number" id="cell_phone" value=""></div>
                            <div class="form-group"><input type="text" class="form-control" name="number"
                                    placeholder="Direct Phone Number" id="direct_phone" value=""></div>
                            <div class="form-group"><input type="text" class="form-control" name="fax" placeholder="Fax"
                                    id="fax" value=""></div>
                            <div class="form-group"><input type="text" class="form-control" name="company"
                                    placeholder="Company" id="company" value=""><span style="color: red;"></span></div>
                            <div class="form-group"><input type="text" class="form-control" name="address"
                                    placeholder="Address" id="address" value=""><span style="color: red;"></span></div>
                            <div class="form-group"><select class="form-control" name="state" id="state">
                                    <option value="">Select state</option>
                                    <option value="NA">Not in USA</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>c<option value="AZ">
                                        Arizona</option>
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
                                </select></div>
                            <div class="form-group"><input type="text" class="form-control" name="city"
                                    placeholder="City" id="city" value=""></div>
                            <div class="form-group"><input type="text" class="form-control" name="zip" placeholder="Zip"
                                    id="zip" value=""></div>
                            <div class="form-group"><input type="text" class="form-control" name="country"
                                    placeholder="Country" id="country" value="">
                            </div>
                            <div class="form-group text-right"><button type="submit" class="btn btn-primary"
                                    id="btnSignUp">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

</html>