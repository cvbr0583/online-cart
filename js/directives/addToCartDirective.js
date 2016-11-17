var app = angular.module("myApp")
app.directive("addToCart", function () {
    return {
        restrict: "E",
        scope: {
            product: "="
        },
        controller: function ($scope, Cart) {

            /*Cart.isAdded(product).then(function(response){
             $scope.addedToCart = true;
             }).
             catch (function (response) {
             $scope.addedToCart = false;
             })*/
            /*$sc1ope.cart = Cart;
             $scope.$watch("cart.getCount()", function (newVal, oldval) {
             alert(newVal)
             });*/

            $scope.isAddedToCart =false
                // Cart.isAdded($scope.productId);
            $scope.addToCart = function () {
                if ($scope.isAddedToCart) {
                    Cart.removeItem($scope.product);
                    $scope.isAddedToCart = false;
                } else {
                    Cart.addItem($scope.product);
                    $scope.isAddedToCart = true;
                }
            }
        },
        //replace: true,
        //template: "<button ng-show='!isAddedToCart' ng-click='addToCart()'><b>Add to Cart</b></button><button  ng-show='isAddedToCart' ng-click='addToCart()'><b>Add to Cart</b></button>"
        template: "<button class='btn btn-primary view' ng-click='addToCart()'><b ng-show='!isAddedToCart'>Add To Cart</b><b ng-show='isAddedToCart' >Added To Cart</b></button>"

    }
})