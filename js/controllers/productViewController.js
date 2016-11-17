var app = angular.module("myApp")
app.controller('productViewController', function ($scope, $routeParams, productViewSvc) {

    productViewSvc.productView($routeParams.name)
        .then(function (response) {
            // $scope.products = response.data.products
            var product = [];
            var prd = response.data.products

            for (var i = 0; i < prd.length; i++) {
                var name = prd[i].title
                if (name == $routeParams.name) {
                    product.push(prd[i])
                }
            }
            $scope.productlist = product;
        })

})

