'use strict';

var fs = require('fs')
  , path = require('path')
  , plates = require('plates')
  , partials = {};

// This gets an object an an array of objects.
// The object defines how the data in the array is renderd
function rinse (pageobj, finalarray, maps) {

  // Map where data will be inserted
  var map = maps.pagemap();

  // Render data in temp object
  var ruffian = plates.bind(partials[pageobj.mastertemplate], pageobj, map);
  // Render plates' simple case scenario
  ruffian = plates.bind(ruffian, pageobj);

  // Iterate over Array of Strings
  if (pageobj.pagesingleset && finalarray) {
    insertSingleFragment();
  }
  if (pageobj.pagemultiset && finalarray) {
    pageobj.pagemultiset.forEach(insertMultiFragment);
  }
  return ruffian;

  // This filters and renders collections of data from the array of objects
  function insertMultiFragment (collection, index, array) {

    // Only get the objects with the correct collection value
    var filtered = finalarray.filter(function (element) {
      return element.collection === collection;
    });

    // Map data with corresponding partials
    var map = maps.multimap(collection)
      , obj = {fragment : plates.bind(partials[collection], filtered, maps.collections())};
    ruffian = plates.bind(ruffian, obj, map);
  }

  // This filters and renders objects which do not belong to a collection
  function insertSingleFragment () {
    for (var i = 0; i < finalarray.length; i++) {

      // Check whether the object belongs to a collection or not
      if (finalarray[i].collection === 'none') {
        var singlepartial = finalarray[i].partial
          , singledest = finalarray[i].destination
          , map = maps.singlemap(singledest)
          , obj = {
             'fragment':plates.bind(partials[singlepartial], finalarray[i],maps.fragments())};
        ruffian = plates.bind(ruffian, obj, map);
      }
    }
  }
}

// Read all partials from disk
function readPartials(userDir, cwd) {
  if (cwd) {
    userDir = path.join(cwd, userDir);
  }
  // Use working directory of process if not specified
  else {
    userDir = path.join(path.dirname(process.argv[1]), userDir);
  }
  partials = {};
  var filenames = fs.readdirSync(userDir);
  for (var i = 0; i < filenames.length; i++) {
    partials[filenames[i].slice(0, -5)] = fs.readFileSync(
      path.join(userDir, filenames[i]), 'utf8'
    );
  }
  return partials;
}

module.exports.setFolder = readPartials;
module.exports.rinse = rinse;
