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

                <form action="{{route('user.store')}}" method="post">
                    @csrf
                    <div class="card">
                        <div class="card-header">
                            <h2>User Registration</h2>
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
                            <div class="form-group">
                                <label for="first_name">First name</label>
                                <input type="text" id="first_name" name="first_name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="last_name">Last name</label>
                                <input type="text" id="last_name" name="last_name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input type="text" id="company" name="company" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="country">Country</label>
                                <select name="country" id="country">
                                    @foreach($countries as $country)
                                        <option value="{{$country}}">{{$country}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary float-right">Create account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection