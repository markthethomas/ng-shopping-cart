'use strict';

/**
 * @ngdoc function
 * @name ngShoppingCartApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the ngShoppingCartApp
 */
angular.module('ngShoppingCartApp')
  .controller('CartCtrl', function($scope, cartApi) {
    $scope.items = cartApi.getCart();
    $scope.removeProduct = cartApi.remove;
  });