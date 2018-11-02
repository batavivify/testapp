@extends('layouts.app')

@section('content')

    <div class="container pt-5">
        <div class="row">
            <div class="offset-3 col-6">

                @if ($message = Session::get('error'))
                    <div class="alert alert-danger alert-block">
                        <button class="close" type="button">x</button>
                        {{ $message }}
                    </div>
                @endif

                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li> {{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form action="{{route('check.login')}}" method="post">
                    @csrf
                    <div class="card">
                        <div class="card-header">
                            <h2>Log in</h2>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" class="form-control">
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="{{route('register')}}">Register</a>
                            <button type="submit" class="btn btn-primary float-right">Log in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection