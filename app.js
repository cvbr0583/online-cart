// var app = angular.module("myApp",[])
var app = angular.module("myApp", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/views/categories.html",
            controller: 'categoriesCtrl'
        })
        .when("/products/:name", {
            templateUrl: "js/views/products.html",
            controller: 'productsCtrl'
        })
        .when("/productview/:name", {
            templateUrl: "js/views/productView.html",
            controller: 'productViewController'
        })
        .when("/cart", {
            templateUrl: "js/views/cart.html",
            controller:'cartCtrl'
        })
        .when("/login", {
            templateUrl: "js/views/login.html",
            controller:'loginCtrl'
        })
    .otherwise("/")
});