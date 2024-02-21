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


//0.15 for desktop..?
var opacityoffset;



$(window).on('unload', function(){
  $(window).scrollTop(0);
});

document.addEventListener("DOMContentLoaded", function() {
  
  

  $(window).on('scroll', function() {

    if(window.innerHeight <= 769){
      opacityoffset = -0.5;

    }else if(window.innerHeight > 769){
      opacityoffset =  0.15
    }

    var scrollTop = $(this).scrollTop();
  
    $('.hero.is-strongslime').css({
      
      opacity: function() {

        
        var elementHeight = $(this).height(),
        opacity = ((elementHeight - scrollTop) / elementHeight - opacityoffset);
        return opacity;

      }

    });

  });

});


document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("topnav");
  var scrollAmount = 200;

  function addScrollClass() {
    nav.classList.add("bg-scroll");
  }

  function removeScrollClass() {
    nav.classList.remove("bg-scroll");
  }

  function handleScroll() {
    if (window.innerWidth > 768) { // Adjust the breakpoint as needed
      if (window.scrollY > scrollAmount) {
        addScrollClass();
      } else {
        removeScrollClass();
      }
    } else {
      removeScrollClass();
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
});