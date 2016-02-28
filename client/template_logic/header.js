Template.header.events({
  'click .scroll-link': function(e) {
    e.preventDefault();
    var path = e.currentTarget.attributes['href'].value;
    var section = $("#" + path);
    window.history.pushState(path, "", "/" + path);

    Session.set('scrolling', true);
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 1000, function() {
      Session.set('scrolling', false);
    });
  },

  'click .navbar-brand': function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }



});

var target = $('.section-title');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    //Navbar esta no topo
    if(window.scrollY <= 130){
        $('.navbar-default').css('background-color', 'transparent');
        $('.navbar-default').css('margin-top', '3%');
        $('.navbarLogo').css('width', 150);
        
    }
    //Navbar esta acompanhando a rolagem
    else {
      $('.navbar-default').css('background-color', 'black');
      $('.navbar-default').css('margin-top', '0');
      $('.navbarLogo').css('width', 100);

    }
});
