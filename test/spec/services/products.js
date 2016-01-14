'use strict';

describe('Service: products', function () {

  // load the service's module
  beforeEach(module('ngShoppingCartApp'));

  // instantiate service
  var products;
  beforeEach(inject(function (_products_) {
    products = _products_;
  }));
});
