var chai = require('chai')
  , should = chai.should()
  , plates = require('plates')
  , dishwasher = require(__dirname + "/../lib/dishwasher")
  , fo = require('./fakeobjects')
  , fr = require('./fakeresults');

dishwasher.setFolder('testtemplates', __dirname);

var maps = {};

maps.singlemap = function singlemap (singledest) {
  var map = plates.Map();
  map.where('id').is(singledest).use('fragment');
  return map;
};

maps.multimap = function multimap (collection) {
  var map = plates.Map();
  map.where('id').is(collection).use('fragment');
  return map;
};

maps.pagemap = function pagemap () {
  var map = plates.Map();
  map.where('name').is('description').use('description').as('content');
  map.tag('title').use('title');
  return map;
};

maps.fragments = function fragments () {
  var map = plates.Map();
  map.where('id').is('icon').use('icon').as('src');
  map.where('id').is('title').use('title');
  map.class('description').to('description');
  return map;
};

maps.collections = function collections () {
  var map = plates.Map();
  map.where('id').is('location').use('location');
  map.where('id').is('time').use('time');
  map.class('title').to('title');
  map.class('description').to('description');
  return map;
};

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML even if no singleobjects are passed', function() {
    dishwasher.rinse(fo.examples.pageobject, fo.examples.finalarraynosingle,
      maps).should.equal(fr.result.examplesmulticollection);
  });
});

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML even if no multiobjects are passed', function() {
    dishwasher.rinse(fo.examples.pageobject, fo.examples.finalarraynomulti,
      maps).should.equal(fr.result.examplessinglecollection);
  });
});

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML if array and mapping are passed', function() {
    dishwasher.rinse(fo.examples.pageobject, fo.examples.finalarray,
      maps).should.equal(fr.result.examplescompletecollection);
  });
});

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML even if no array is passed', function() {
    dishwasher.rinse(fo.examples.pageobject, null, maps)
      .should.equal(fr.result.examplesmaster);
  });
});
