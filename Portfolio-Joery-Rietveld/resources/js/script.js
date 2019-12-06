$(document).ready(function () {
    /* For the sticky navigation */
    $('.js--section-service').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } 
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '75px'
    });

   /* Scroll on buttons */
    $('.js--scroll-to-service').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-service').offset().top -60}, 100);
    });

    $('.js--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top -60}, 100);
    }); 

    /* Navigation scroll */ 
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top -60
              }, 100);
              return false;
            }
          }
        });
      });


      /* Mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
  
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
        } 
        
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
  
      });
});



