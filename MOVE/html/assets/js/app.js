
var main = function() {
    var cities = [
      "Berlin",
      "Bogota",
      "Boston",
      "Buenos Aires",
      "Chicago",
      "Firenze",
      "Hong Kong",
      "Lisboa",
      "London",
      "Los Angeles",
      "Lyon",
      "Madrid",
      "Mexico",
      "Miami",
      "Moscow",
      "New York",
      "Paris",
      "Reims",
      "Roma",
      "Shanghai",
      "Sydney"
    ];
    $( "#location" ).autocomplete({
      source: cities
    });
};

$(document).ready(main);