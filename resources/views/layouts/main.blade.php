<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Any config settings you want to fetch you will get in $config array, -->
    <?php //echo $config['COMPANY']; 
    ?>
    <meta name="robots" content="noindex">
    <title>{{isset($title)?$title:''}} | Applied Industrial Motors
</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @include('layouts.css')
    @stack('css')
</head>
<body class="">
 <div class="wrapper">
    <input type="hidden" id="web_base_url" value="{{url('/')}}" />
    @include('layouts.header')
    @yield('content')
    @include('layouts.scripts')
    @stack('js')
    @include('layouts.footer')
    @yield('ajaxScript')
  </div>
</body>
</html>