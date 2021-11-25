// Portfolio section
$(document).ready(function() {
    $('.col-md-3 img').animate({'opacity':'0.5'});
    $('.col-md-3 img').hover(function(){
        $(this).stop().animate({'opacity':'1.0'});
    },function(){
      $(this).stop().animate({'opacity':'0.5'});
    });
    });
    !