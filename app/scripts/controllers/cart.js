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
    $scope.subTotal = cartApi.subTotal();
    $scope.eligibleForDiscount = cartApi.discount();
    $scope.total = cartApi.total();
    $scope.applyDiscount = cartApi.discount();
    $scope.removeProduct = cartApi.remove;
  });