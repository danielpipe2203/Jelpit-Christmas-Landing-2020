//3D Hover Card effect
var card = $("#BoxCard");
$(document).on("mousemove",function(e) {
  //the 3D effect works only on desktop :c https://css-tricks.com/annoying-mobile-double-tap-link-issue/
  if(window.innerWidth > 1080){
    var ax = -($(window).innerWidth()/2- e.pageX)/40;
    var ay = ($(window).innerHeight()/2- e.pageY)/20;
    card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
  } 
});
//Parallax Scrolling Elements list
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $("#Arbolesdeco").css({ 'transform': 'translate(0px, -' + wScroll / 20 + '%)' });
  $("#scroll_down").css({ 'transform': 'translate(0px, -' + wScroll / 6 + '%)' });
});
//scroll icon animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById('scroll_down'), // Required
  path: 'https://assets1.lottiefiles.com/packages/lf20_uigj9pu5.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
});
//Animate icon when scroll down
$(window).scroll(function () {
  animation.playSegments([0, 100], true);
});