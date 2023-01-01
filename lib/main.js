'use strict';

document.addEventListener("DOMContentLoaded", function() { 


  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
  
        $('.hero.is-strongslime').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight - 0.15);
            return opacity;
        }
    });
  });
  
  


  
});