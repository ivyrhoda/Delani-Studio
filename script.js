// WHAT WE DO SECTION
$(document).ready(function() {
    $('.click').click(function() {
        $(this).children('.hide').slideToggle(1500);
        $(this).children('.show').toggle(1200);
      });
    });


