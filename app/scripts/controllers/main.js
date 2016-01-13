'use strict';

/**
 * @ngdoc function
 * @name ngShoppingCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngShoppingCartApp
 */
angular.module('ngShoppingCartApp')
  .controller('MainCtrl', function($scope, cartApi, Notifications, Products) {
    Products.success(function(products) {
      $scope.products = products.products;
    });

    $scope.addProduct = function(product, qty) {
      cartApi.add(product, qty);
      Notifications.create('Added ' + product.name + ' to cart', 'success');
    };
  });