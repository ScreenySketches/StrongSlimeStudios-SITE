document.addEventListener("DOMContentLoaded", function(event) { 


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
  
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(nav, a).forEach


  
});


