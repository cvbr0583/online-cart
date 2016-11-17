var app = angular.module("myApp");
app.service("categorySvc", function ($http) {
    this.getCategory = function () {
        // return $http.get('data/categories.json');
        return $http.get('http://localhost/shop/categories.php');
    }

});

