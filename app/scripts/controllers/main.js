'use strict';

/**
 * @ngdoc function
 * @name techShareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techShareApp
 */
angular.module('techShareApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
