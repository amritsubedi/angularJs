(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('myController', function($scope) {
            $scope.name = "Amrit";
            $scope.sayHello = function () {
                return "Hello, Anjali."
            }
        });
})();