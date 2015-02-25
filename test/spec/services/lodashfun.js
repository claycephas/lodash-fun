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
    expect(LodashFun.getAll().length).toEqual(100);
  });

  it('should return email addresses', function() {
    var emails = LodashFun.getAllEmails();
    expect(emails).toContain('sed.tortor@Maecenasmalesuadafringilla.com');
  });

  it('should only return Colorado', function() {
    var filtered = LodashFun.getColoradoPeople();
    expect(filtered.length).toEqual(2);
    expect(filtered[0].State).toEqual('CO');
    expect(filtered[1].State).toEqual('CO');
  });

  it('should sort by age', function() {
    var sorted = LodashFun.getSortedByAge();
    expect(sorted[0].Age).toBeLessThan(sorted[sorted.length-1].Age);
  });

  it('should group by state', function() {
    var grouped = LodashFun.getGroupedByState();
    expect(grouped.WI.length).toEqual(4);
    expect(grouped.WI[2].State).toEqual('WI');
  });

  it('should count by state', function() {
    var counts = LodashFun.getCountsByState();
    expect(counts.WI).toEqual(4);
  });

  it('should find that not everyone has a space in their name', function() {
    var allHaveSpaces = LodashFun.doesEveryoneHaveSpacesInTheirName();
    expect(allHaveSpaces).toEqual(false);
  });

  it('should find the oldest person', function() {
    var oldest = LodashFun.getOldestPerson();
    expect(oldest.Name).toEqual('Ross Klein');
  });

  it('should return an array', function() {
    var all = LodashFun.getAll();
    // TODO: expect(_.???).toEqual(true);
  });

  it('should get all property names starting with s', function() {
    var properties = LodashFun.getPropertyNamesStartingWithS();
    expect(properties.length).toEqual(2);
    expect(properties[0]).toEqual('StreetAddress');
    expect(properties[1]).toEqual('State');
  })

});
