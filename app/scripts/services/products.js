'use strict';

/**
 * @ngdoc service
 * @name ngShoppingCartApp.products
 * @description
 * # products
 * Factory in the ngShoppingCartApp.
 */
angular.module('ngShoppingCartApp')
  .factory('Products', function($http) {
    return $http.get('products/products.json');
  });