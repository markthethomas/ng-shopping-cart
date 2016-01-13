'use strict';

/**
 * @ngdoc function
 * @name ngShoppingCartApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the ngShoppingCartApp
 */
angular.module('ngShoppingCartApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.date = new Date();
  });
