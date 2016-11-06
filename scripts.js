$(document).ready(function() {
  // SMOOTH SCROLLING
  if (location.pathname == "/") {
    $("#navWrapper a").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
    });
  }

  // LOAD PORTFOLIO PIECES
  $.getJSON("/spotlight.json").then(d => spotPrint(d.spotlight))

  function spotPrint(content) {
    for (i in content) {
      $('.spotlightOutput').append(`
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <a href="#" data-toggle="modal" data-target="#${content[i].modal}">
            <img class="spotlightLogo" src="${content[i].img_src}">
            <p>${content[i].title}</p>
          </a>
        </div>
        `)
    }
  }

  $.getJSON("/technology.json").then(d => techPrint(d.spotlight))

  function techPrint(content) {
    for (i in content) {
      $('.technologyOutput').append(`
        <div class="techContainer col-lg-2 col-md-2 col-sm-4 col-xs-4">
          <span class="logoHelper"></span>
          <img src="${content[i].img_src}">
          <p>${content[i].title}</p>
        </div>
        `)
    }
  }

  // STICKY NAVBAR ON SCROLL
  $(window).scroll(function(){
    var window_top = $(window).scrollTop();
    var div_top = $('#contentSection').offset().top;
      if (window_top > div_top) {
      $('#navWrapper').addClass('stick');
    } else {
      $('#navWrapper').removeClass('stick');
    }
  });

  // HIGHLIGHT NAVBAR ON SCROLL
  if (location.pathname == "/") {
    var aChildren = $("#navWrapper ul").children();
    var aArray = [];
    for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
    }

    $(window).scroll(function(){
      var windowPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i].slice(1);
        var divPos = $(theID).offset().top;
        var divHeight = $(theID).height();
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
          $("a[href='/" + theID + "']").children("li").addClass("nav-active");
        } else {
          $("a[href='/" + theID + "']").children("li").removeClass("nav-active");
        }
      }

      if(windowPos + windowHeight == docHeight) {
        if (!$("nav li:last-child a").hasClass("nav-active")) {
          var navActiveCurrent = $(".nav-active").parent("a").attr("href");
          $("a[href='" + navActiveCurrent + "']").children("li").removeClass("nav-active");
          $("nav a:last-child").children("li").addClass("nav-active");
        }
      }
    });
  }
})

