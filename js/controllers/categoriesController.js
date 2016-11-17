var app = angular.module("myApp")
app.controller("categoriesCtrl", function ($scope, categorySvc, $routeParams, Cart) {
    categorySvc.getCategory()
        .then(function (response) {
            // $scope.categories = response.data
            $scope.categories = response.data.product_categories
        })

    $scope.count = Cart;
    $scope.$watch("count.getCount()", function (x, y) {

        $scope.myCount = x
        // alert(y)
        // console.log(y)

    })
})