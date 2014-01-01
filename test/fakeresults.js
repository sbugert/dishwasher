var result = {};

result.examplesmaster =
  '<!DOCTYPE html>'+
  '<html lang="en">'+
    '<head>'+
      '<meta charset="UTF-8"/>'+
      '<title>I am a party</title>'+
    '</head>'+
    '<body>'+
      '<div id=\"parties\">'+
      '</div>'+
      '<div id=\"cars\">'+
      '</div>'+
      '<div id=\"empl\">'+
      '</div>'+
      '<div id=\"motd\">'+
      '</div>'+
    '</body>'+
  '</html>\n';

result.examplescompletecollection =
  '<!DOCTYPE html>'+
  '<html lang=\"en\">'+
    '<head>'+
      '<meta charset=\"UTF-8\"/>'+
      '<title>I am a party</title>'+
    '</head>'+
    '<body>'+
      '<div id=\"parties\">'+
        '<div id=\"location\">Mannheim</div>\n'+
        '<div id=\"time\">28-10-2013</div>\n'+
        '<div id=\"location\">Heidelberg</div>\n'+
        '<div id=\"time\">12-11-2013</div>\n'+
      '</div>'+
      '<div id=\"cars\">'+
        '<div id=\"location\">Stuttgart</div>\n'+
        '<div id=\"time\">28-10-2013</div>\n'+
        '<div class=\"description\">This car is pretty good</div>\n'+
        '<div class=\"title\">I am the first car</div>\n'+
        '<div id=\"location\">Ruesselsheim</div>\n'+
        '<div id=\"time\">12-11-2013</div>\n'+
        '<div class=\"description\">This car is bad</div>\n'+
        '<div class=\"title\">I am the second car</div>\n'+
      '</div>'+
      '<div id=\"empl\">'+
        '<div class=\"description\">I am a pretty good employee</div>\n'+
        '<div id=\"title\">I am the employee of the month</div>\n'+
      '</div>'+
      '<div id=\"motd\">'+
        '<div class=\"description\">You\'ve got mail</div>\n'+
        '<div id=\"title\">I am the message of the day</div>\n'+
        '<img id=\"icon\" src=\"letter.png\"/>\n'+
      '</div>'+
    '</body>'+
  '</html>\n';


result.examplessinglecollection =

  '<!DOCTYPE html>'+
  '<html lang=\"en\">'+
    '<head>'+
      '<meta charset=\"UTF-8\"/>'+
      '<title>I am a party</title>'+
    '</head>'+
    '<body>'+
      '<div id=\"parties\">'+
      '</div>'+
      '<div id=\"cars\">'+
      '</div>'+
      '<div id=\"empl\">'+
        '<div class=\"description\">I am a pretty good employee</div>\n'+
        '<div id=\"title\">I am the employee of the month</div>\n'+
      '</div>'+
      '<div id=\"motd\">'+
        '<div class=\"description\">You\'ve got mail</div>\n'+
        '<div id=\"title\">I am the message of the day</div>\n'+
        '<img id=\"icon\" src=\"letter.png\"/>\n'+
      '</div>'+
    '</body>'+
  '</html>\n';


result.examplesmulticollection =

  '<!DOCTYPE html>'+
  '<html lang=\"en\">'+
    '<head>'+
      '<meta charset=\"UTF-8\"/>'+
      '<title>I am a party</title>'+
    '</head>'+
    '<body>'+
      '<div id=\"parties\">'+
        '<div id=\"location\">Mannheim</div>\n'+
        '<div id=\"time\">28-10-2013</div>\n'+
        '<div id=\"location\">Heidelberg</div>\n'+
        '<div id=\"time\">12-11-2013</div>\n'+
      '</div>'+
      '<div id=\"cars\">'+
        '<div id=\"location\">Stuttgart</div>\n'+
        '<div id=\"time\">28-10-2013</div>\n'+
        '<div class=\"description\">This car is pretty good</div>\n'+
        '<div class=\"title\">I am the first car</div>\n'+
        '<div id=\"location\">Ruesselsheim</div>\n'+
        '<div id=\"time\">12-11-2013</div>\n'+
        '<div class=\"description\">This car is bad</div>\n'+
        '<div class=\"title\">I am the second car</div>\n'+
      '</div>'+
      '<div id=\"empl\">'+
      '</div>'+
      '<div id=\"motd\">'+
      '</div>'+
    '</body>'+
  '</html>\n';

exports.result = result;
