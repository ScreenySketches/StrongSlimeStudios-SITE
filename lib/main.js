'use strict';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

$(window).on('unload', function(){
  $(window).scrollTop(0);
});

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