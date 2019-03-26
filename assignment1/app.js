(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('myController', function($scope) {

            $scope.items = "";
            $scope.numberOfItems = 0;
            $scope.result;

            $scope.checkItems = function () {
                var splitItems = $scope.items.split(',');
                for (var i = 0; i < splitItems.length; i++) {
                    console.log(splitItems[i]);
                }

                var numberOfItems = splitItems.length;
                if ($scope.items == "") {
                   numberOfItems = 0;
                }
                console.log('numberOfItems', numberOfItems);
                return numberOfItems;
            }

            $scope.displayResult = function() {
                var numOfItems = $scope.checkItems();
                var result = (numOfItems <= 3) ? "Enjoy!" : "Too much!";
                if (numOfItems == 0) {
                    result = "Empty";
                }
                console.log('result', result);
            }

        });
})();