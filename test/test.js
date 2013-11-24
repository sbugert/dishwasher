var chai = require('chai')
  , should = chai.should()
  , plates = require('plates')
  , dishwasher = require(__dirname + "/../lib/dishwasher")
  , fo = require('./fakeobjects')
  , fr = require('./fakeresults');

dishwasher.setFolder('testtemplates', __dirname);

function singlemap (singledest) {
  var map = plates.Map();
  map.where('id').is(singledest).use('fragment');
  return map;
}

function multimap (collection) {
  var map = plates.Map();
  map.where('id').is(collection).use('fragment');
  return map;
}

function pagemap () {
  var map = plates.Map();
  map.where('name').is('description').use('description').as('content');
  map.tag('title').use('title');
  return map;
}

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML even if no singleobjects are passed', function() {
    dishwasher.rinse(
      fo.examples.pageobject,
      fo.examples.finalarraynosingle,
      pagemap,
      null,
      multimap).should.equal(fr.result.examplesmulticollection);
  });
});

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML even if no multiobjects are passed', function() {
    dishwasher.rinse(
      fo.examples.pageobject,
      fo.examples.finalarraynomulti,
      pagemap,
      singlemap,
      multimap).should.equal(fr.result.examplessinglecollection);
  });
});

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML if array and mapping are passed', function() {
    dishwasher.rinse(
      fo.examples.pageobject,
      fo.examples.finalarray,
      pagemap,
      singlemap,
      multimap).should.equal(fr.result.examplescompletecollection);
  });
});

describe('dishwasher.rinse() test', function() {
  it('should spit out HTML even if no array is passed', function() {
    // console.log(dishwasher.rinse(fo.examples.pageobject, null , pagemap));
    dishwasher.rinse(fo.examples.pageobject, null, pagemap)
      .should.equal(fr.result.examplesmaster);
  });
});
