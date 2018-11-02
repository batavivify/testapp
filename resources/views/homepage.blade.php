<html>
    <head>

    </head>
<body>
    <div class="container">
        @if(!empty($message))
            <div class="alert alert-success"> {{ $message }}</div>
        @endif
    </div>
</body>
</html>