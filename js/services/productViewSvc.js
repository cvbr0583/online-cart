var app = angular.module("myApp");
app.service("productViewSvc", function ($http) {
    this.productView = function () {
        // return $http.get('data/products.json');
        return $http.get('http://localhost/shop/products.php');
    }

});
