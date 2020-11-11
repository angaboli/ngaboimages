jQuery(function($){
    var $navbar = $('.navbar');
    $(window).scroll(function(event) {
    var $current = $(this).scrollTop();
         if( $current > 0 ){
              $navbar.addClass('navbar-color');
         } else {
              $navbar.removeClass('navbar-color');
         }
    });
 });