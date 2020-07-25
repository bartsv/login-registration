<!doctype html>
<html>
<head>
    @include('includes.head')
</head>
<body>
<div>
    {{$user->name}}
    <header>
        @include('includes.navlogin')
    </header>
    <footer>
        @include('includes.footer')
    </footer>
</div>
</body>
@include('includes.script')
</html>
