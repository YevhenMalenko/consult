$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,

  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });


	$('.menu').on('click','a', function (e) {
    e.preventDefault();

     if($(window).width() <= 576) {
       $('body').css('overflow','auto');
     }      
   var id  = $(this).attr('href'),
       top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 1500);	      
 });



  
});