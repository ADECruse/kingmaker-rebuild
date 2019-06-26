$(document).ready(function() {

    

      $(function(){
        $(window).scroll(function(){
            var scrollBottom = $(window).scrollTop() + $(window).height();
            var aTop = $('.banner').height();
            if($(this).scrollTop()>=aTop){
                $("ul").fadeIn(500).show();
                // $(".banner").css({'position':'fixed','min-height':'30px'});
            } else {
                $("ul").fadeOut(300,$("ul").hide());
                // $(".banner").css({'position':'relative','min-height':'100vh'});
            }
        });
      });

    $('.fadeonload').each( function(i){
        $(this).animate({'opacity':'1','margin-left':'0px'},900);
    }); 

    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});

$(document).ready(function() {
   
});
