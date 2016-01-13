'use strict';

/**
 * @ngdoc function
 * @name ngShoppingCartApp.controller:CartcounterCtrl
 * @description
 * # CartcounterCtrl
 * Controller of the ngShoppingCartApp
 */
angular.module('ngShoppingCartApp')
  .controller('CartcounterCtrl', function ($scope, cartApi) {
    $scope.itemsInCart = cartApi.getCart();
  });
