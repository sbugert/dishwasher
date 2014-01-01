var examples = {};

// teasertext: 'Ich bin Teasertext für Partys',
// footnote: 'Ich müsste ganz unten stehen',
// pagesingleset: [ 'arbeiterwoche', 'arbeiterjahr' ],
// pagemultiset: [ 'cars', 'partys' ] }

examples.pageobject = {
  title:'I am a party',
  description: 'I am a party description',
  mastertemplate:'master',
  pagesingleset: [ 'employee', 'motd' ],
  pagemultiset: ['parties', 'cars']
};

examples.employee = {
  title:'I am the employee of the month',
  description:'I am a pretty good employee',
  partial:'employee',
  destination:'empl',
  mastertemplate:'master',
  collection:'none'
};

examples.motd = {
  title:'I am the message of the day',
  description:'You\'ve got mail',
  icon: 'letter.png',
  partial:'motd',
  destination:'motd',
  mastertemplate:'master',
  collection:'none'
};

examples.party1 = {
  title:'I am the first party',
  location:'Mannheim',
  time:'28-10-2013',
  description:'This party was good',
  mastertemplate:'master',
  collection:'parties'
};

examples.party2 = {
  title:'I am the second party',
  location:'Heidelberg',
  time:'12-11-2013',
  description:'This party was bad',
  mastertemplate:'master',
  collection:'parties'
};

examples.car1 = {
  title:'I am the first car',
  location:'Stuttgart',
  time:'28-10-2013',
  description:'This car is pretty good',
  mastertemplate:'master',
  collection:'cars'
};

examples.car2 = {
  title:'I am the second car',
  location:'Ruesselsheim',
  time:'12-11-2013',
  description:'This car is bad',
  mastertemplate:'master',
  collection:'cars'
};

examples.finalarray = [
  examples.party1
, examples.party2
, examples.car1
, examples.car2
, examples.employee
, examples.motd
];

examples.finalarraynosingle = [
  examples.party1
, examples.party2
, examples.car1
, examples.car2
];

examples.finalarraynomulti = [
  examples.employee
, examples.motd
];
exports.examples = examples;
