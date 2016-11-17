var app = angular.module("myApp")
app.controller('cartCtrl', function ($scope, Cart) {
    $scope.products = Cart.getProducts()
    // $scope.total=Cart.getTotal()
})
