var app = angular.module("myApp")
app.controller("loginCtrl", function ($scope, loginSvc, $location) {
    $scope.login = function () {
        $scope.customer = {
            email: $scope.user,
            pwd: $scope.password
        }

        loginSvc.getUser()

            .then(function (response) {
                $scope.details = response.data;
                if ($scope.customer.email == $scope.details.username && $scope.customer.pwd == $scope.details.password) {
                    console.log("success")
                    // $location.path("#/")
                }
                else {
                    console.log("invalid credentials")
                }

            })
    }
})