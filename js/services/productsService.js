var app = angular.module("myApp");
app.service("productSvc", function ($http) {
    this.getproduct = function () {
        // return $http.get('data/products.json');
        return $http.get('http://localhost/shop/products.php');
    }

});

