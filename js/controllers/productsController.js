var app = angular.module("myApp")
app.controller("productsCtrl", function ($scope, productSvc, $routeParams,Cart) {
    productSvc.getproduct($routeParams.name)

        .then(function (response) {
            // $scope.products = response.data.products
            var product = [];
            var prd = response.data.products

            for (var i = 0; i < prd.length; i++) {
                var name = prd[i].categories[0]
                if (name == $routeParams.name) {
                    product.push(prd[i])
                }
            }
            $scope.productslist = product;
        })
    var count = 0
    var cart = []
    var r = $routeParams.name
    $scope.addToCart = function (r) {
        var add = count++
        cart.push(r)
       // alert(cart)
    }

})