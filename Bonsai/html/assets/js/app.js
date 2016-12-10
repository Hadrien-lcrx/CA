var main = function() {
  $('#top-text').keyup(function() {
    var top_text = $(this).val();
    $('.top-caption').text(top_text);
});

$('#bottom-text').keyup(function() {
    var bottom_text = $(this).val();
    $('.bottom-caption').text(bottom_text);
});

$('#image-url').keyup(function() {
  var img_src = $(this).val();
   $('.thumbnail img').attr('src',img_src);
});
};

$(document).ready(main);