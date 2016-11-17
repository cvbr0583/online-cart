var app = angular.module("myApp");
app.service("loginSvc", function ($http) {
    this.getUser = function () {
        return $http.get('data/login.json');
    }
});

