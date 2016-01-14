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
        console.log(current);
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

    function subTotal() {
      subTotal = items.reduce(function(sum, current) {
        return sum += current.product.price * current.qty
      }, 0);
      if (discount()) {
        return subTotal -= (subTotal * 0.10);
      }
      return subTotal;
    }

    function total() {
      return subTotal += (subTotal * 0.075) + 4.99;
    }

    return {
      add: add,
      discount: discount,
      getCart: getCart,
      itemsInCart: itemsInCart,
      remove: remove,
      subTotal: subTotal,
      total: total,
    };
  });