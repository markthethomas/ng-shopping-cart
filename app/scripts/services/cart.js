'use strict';

/**
 * @ngdoc service
 * @name ngShoppingCartApp.cart
 * @description
 * # cart
 * Factory in the ngShoppingCartApp.
 */
angular.module('ngShoppingCartApp')
  .factory('cartApi', function () {
    var items = [];


    function getCart() {
      return items;
    }

    function add(product, qty) {
      console.log(product, qty);
      items.push({
        name: product.name,
        product: product,
        qty: qty,
      });
    }

    function remove(product, qty) {
      targetItem = items.filter((item, index, array) => item[index] === product);
      console.log(targetItem);
      // if (!qty) {
      //   qty = 1;
      // }
      // items.indexOf(product)
    }

    return {
      add: add,
      remove: remove,
      getCart: getCart,
    };
  });
