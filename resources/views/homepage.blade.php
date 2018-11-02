<html>
    <head>

    </head>
<body>
    <div class="container">

        @if(Auth::user())
            <div class="alert alert-success">{{$user->first_name}}</div>
        @endif

            <a href="{{ route('logout') }}">Logout</a>
    </div> 

</body>
</html>