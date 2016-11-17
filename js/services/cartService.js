var app = angular.module("myApp");
app.service("Cart", function ($http) {
    var cart = [];
// console.log(cart)
    this.addItem = function (product) {
        cart.push(product);
        // console.log(cart)
    };

    this.getCount = function () {
        return cart.length;
        // console.log(cart.length)
    };
    this.getProducts=function(){
        return cart;
    };

    this.removeItem = function (product) {
        var index = cart.indexOf(product);
        cart.splice(index, 1);
    };

    this.updateQuantity = function (product) {

    };

    this.isAdded = function (product) {

    };
    // this.getTotal = function(){
    //     var total = 0;
    //     for(var i = 0; i < cart.product.length; i++){
    //         var totall = cart.products[i];
    //         total += (product.price * cart.length  );
    //     }
    //     return total;
    // }
})