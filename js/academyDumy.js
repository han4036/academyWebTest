/*$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }); */
// var link = 'http://127.0.0.1:5500/html/academyDumy.html#';
var link = 'http://127.0.0.1:5500/html/academyDumy.html'

  $(function() {

      $(".logo1").click(function() {
        location.href=link;
      })

      $(".logo1").hover
      
      $('.slider').bxSlider({
        auto: true,
        autoControl : true,
        stopAutoOnClick: true,
        pause: 4000,
        pager: true,
        slideWith: 600
      });
      
      
  })