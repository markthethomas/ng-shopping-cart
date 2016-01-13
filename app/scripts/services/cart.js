'use strict';

/**
 * @ngdoc service
 * @name ngShoppingCartApp.cart
 * @description
 * # cart
 * Factory in the ngShoppingCartApp.
 */
angular.module('ngShoppingCartApp')
  .service('cartApi', function() {
    var items = [];

    function getCart() {
      return items;
    }

    function existsInCart(product) {
      return _.findIndex(items, function checkDuplicate(obj) {
        return obj.product.name === product.name;
      });
    }

    function add(product, qty) {
      if (existsInCart(product) === -1) {
        items.push({
          product: product,
          qty: qty
        });
      } else {
        items[existsInCart(product)].qty += 1;
      }
    }

    function remove(product, index) {
      if (items[existsInCart(product)].qty === 0) {
        items.splice(index, 1);
      } else {
        items[existsInCart(product)].qty -= 1;
        // check to see if the item should be removed from the cart
        if (items[existsInCart(product)].qty === 0) {
          items.splice(index, 1);
        }
      }
    }

    return {
      add: add,
      remove: remove,
      getCart: getCart,
    };
  });