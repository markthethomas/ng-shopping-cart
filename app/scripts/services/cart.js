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
    var subTotal;

    function getCart() {
      return items;
    }

    function existsInCart(product) {
      return _.findIndex(items, function checkDuplicate(obj) {
        return obj.product.name === product.name;
      });
    }

    function add(product, qty) {
      if (product.qtyAvailable === 0) {
        return
      };
      qty = qty || 1;
      if (existsInCart(product) === -1) {
        items.push({
          product: product,
          qty: qty
        });
      } else {
        items[existsInCart(product)].qty += 1;
      }
    }

    function remove(product) {
      items.forEach(function each(current, index, array) {
        if (current.product.name === product.name) {
          items[existsInCart(product)].qty -= 1;
          if (items[existsInCart(product)].qty === 0) {
            items.splice(index, 1);
          }
        }
      });
    }

    function itemsInCart() {
      return itemCount;
    }

    function discount() {
      var tags = [];
      var shouldApplyDiscount;
      items.forEach(function gatherTags(current) {
        tags = tags.concat(current.product.tags);
      });
      shouldApplyDiscount = _.uniq(tags).length !== items.length;
      return shouldApplyDiscount;
    }

    function getSubtotal() {
      subTotal = items.reduce(function(sum, current) {
        return sum += current.product.price * current.qty
      }, 0);
      if (discount()) {
        return subTotal -= (subTotal * 0.10);
      }
      return subTotal;
    }

    function total() {
      subTotal += ((subTotal * 0.075) + 4.99);
      return subTotal;
    }

    function clear() {
      items = [];
      return items;
    }

    return {
      add: add,
      clear: clear,
      discount: discount,
      getCart: getCart,
      itemsInCart: itemsInCart,
      remove: remove,
      subTotal: getSubtotal,
      total: total,
    };
  });