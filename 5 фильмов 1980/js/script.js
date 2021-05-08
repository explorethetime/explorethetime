$(document).ready(function(){
  $('.slider').slick({
    dots:false,
    adaptiveHeight:true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 400, 
    easing: 'ease',
    infinite: true,
     initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus:true,
      pauseOnHover:true,
      waitForAnimate: true,
   
  });
});