(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'];
    function MsgController($scope, lovesFilter) {
        $scope.name = "Anjali";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;

        $scope.sayMessage = function () {
            var message = "Anjali likes tea";
            return message;
        };

        $scope.sayFilteredMessage = function () {
            var message = "Anjali likes tea";
            message = lovesFilter(message);
            return message;
        };

        $scope.feedAnjali = function () {
            $scope.stateOfBeing = "fed";
        };

    }

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        }
    }

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }



})();