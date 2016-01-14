'use strict';

describe('Service: cart', function () {

  // load the service's module
  beforeEach(module('ngShoppingCartApp'));

  // instantiate service
  var cartApi, Products, availableProducts;
  beforeEach(inject(function (_cartApi_, _Products_) {
    cartApi = _cartApi_;
    Products = _Products_;
    availableProducts = readJSON('app/products/products.json').products;
  }));

  it('should start with an empty cart', function () {
    expect(cartApi.getCart().length).toEqual(0);
  });

  it('should let you add items to the cart', function () {
    var item = availableProducts[0];
    cartApi.add(item, 1);
    expect(cartApi.getCart().length).toEqual(1);
  });

  it('should let you remove items from the cart', function () {
    var item = availableProducts[0];
    cartApi.remove(item);
    expect(cartApi.getCart().length).toEqual(0);
  });

  it('should let you add different items to the cart', function () {
    var item = availableProducts[0];
    var anotherItem = availableProducts[1];
    cartApi.add(item, 1);
    cartApi.add(anotherItem, 1);
    expect(cartApi.getCart().length).toEqual(2);
  });

  it('should not let you add items not in stock to the cart', function () {
    var unavailableItem = availableProducts[2];
    cartApi.add(unavailableItem, 1);
    expect(cartApi.getCart().length).toEqual(0);
  });


  it('should return the subtotal', function () {
    cartApi.add(availableProducts[0], 1);
    cartApi.add(availableProducts[1], 1);
    expect(cartApi.getCart().length).toEqual(2);
    expect(+cartApi.subTotal().toFixed(2)).toEqual(20.49);
  });

  afterEach(function () {
    cartApi.clear();
  });

});
