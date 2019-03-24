(function () {
    'use strict';

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;

            $scope.displayNumeric = function () {
                var totalNameValue = calculateNumericValue($scope.name);
                $scope.totalValue = totalNameValue;
            };

            function calculateNumericValue(name) {
                var totalNameValue = 0;
                for (var i = 0; i < name.length; i++) {
                    totalNameValue += name.charCodeAt(i);
                }
                return totalNameValue;
            }
        });
})();