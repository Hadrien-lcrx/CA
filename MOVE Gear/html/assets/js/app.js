var main = function() {
  $('.login p').click(function() {
    $('.login .dropdown-menu').toggle();
  });
    $( "#accordion" ).accordion();
};

$(document).ready(main);