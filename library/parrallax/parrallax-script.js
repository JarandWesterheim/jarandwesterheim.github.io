$(window).scroll(function() {
  parrallax();
})
function parrallax() {

  var wScroll = $(window).scrollTop();

  $('.parrallax--bg').css('background-position', 'center '+(wScroll*0.75)+'px')

  
}
