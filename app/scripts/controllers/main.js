'use strict';

/**
 * @ngdoc function
 * @name ngShoppingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngShoppingCartApp
 */
angular.module('ngShoppingCartApp')
  .controller('MainCtrl', function ($scope, Products, cartApi) {
    Products.success(function(products) {
      $scope.products = products.products;
    });
    $scope.addProduct = cartApi.add;
    $scope.removeProduct = cartApi.remove;
  });
