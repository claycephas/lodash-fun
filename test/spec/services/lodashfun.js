'use strict';

describe('Service: lodashFun', function () {

  // load the service's module
  beforeEach(module('techShareApp'));

  // instantiate service
  var LodashFun;
  beforeEach(inject(function (_LodashFun_) {
    LodashFun = _LodashFun_;
  }));

  it('should return all', function() {
    expect(LodashFun.getAll().length).toBeGreaterThan(0);
  });

  it('should return serial numbers', function() {
    LodashFun.printAllSerialNumbers();
  });

  it('should only return Colorado', function() {
    var filtered = LodashFun.getColoradoAnonymousFunction();
    expect(filtered.length).toEqual(2);
    expect(filtered[0].State).toEqual('CO');
    expect(filtered[1].State).toEqual('CO');
  });


});
