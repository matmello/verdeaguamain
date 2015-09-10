Template.mainPage.onRendered(function(){
  scrollToPath();
  updateOnScroll();
});

function scrollToPath(){
  var path = Iron.Location.get().path.slice(1);
  if(path){
    var element = $("#" + path);
    if(element.length > 0){
      $(document).scrollTop(element.offset().top);
    }
  }
}

function updateOnScroll(){
  $(window).on('scroll', function(){
    var sections = $('.section');
    var scrollPosition = window.pageYOffset;
    var pastSections = sections.filter(function(index, element){
      return $(element).offset().top <= scrollPosition;
    });
    var lastSection = pastSections[pastSections.length - 1];
    var newPath = lastSection.attributes['id'].value;
    var currentPath = location.pathname.slice(1);
    if(currentPath !== newPath){
      window.history.replaceState(newPath, "", "/" + newPath);
    }
  });
}