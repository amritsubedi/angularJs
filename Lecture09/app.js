
(function () {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];

    function DIController($scope,    ) {
        $scope.name = "Amrit";

        $scope.upper = function () {
          var upCase = $filter('uppercase');
          $scope.name = upCase($scope.name);
        };
    }

}) ();