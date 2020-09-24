// Navbar Search filed  

// $(".form-field input").on('focus blur', function() {
//   $(this).parent().toggleClass('active');
// })
$(".form-field i").on('mousedown', function(e) {
  $(this).parent().toggleClass('active');
})

$(".form-field i").on('mouseup', function(e) {
  $(this).next('input').focus()
  if (!$(this).parent().hasClass('active')) {
    $(this).next('input').blur()
  }
})

$(".form-field input").on('focus', function(e) {
  if (!$(this).parent().hasClass('active')) {
    $(this).blur()
  }
})

$(".form-field input").on('blur', function(e) {
  $(this).parent().removeClass('active')
})


// Back To Top Script 

$(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('#toTop').fadeIn();
  } else {
      $('#toTop').fadeOut();
  }
});

$("#toTop").click(function () {

 $("html, body").animate({scrollTop: 0}, 1000);
});
