<html>
    <head>

    </head>
<body>
    <div class="container">
        @if(isset(Auth::user()->user_name) && !empty($message))
            <div class="alert alert-success"> {{ $message }} {{Auth::user()->user_name}}</div>
        @endif
    </div> 
</body>
</html>