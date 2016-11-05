// SMOOTH SCROLLING
$("nav a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash);
  });

// LOAD PORTFOLIO PIECES
$.getJSON("/spotlight.json").then(d => spotPrint(d.spotlight))

function spotPrint(content) {
  for (i in content) {
    $('.spotlightOutput').append(`
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img class="spotlightLogo" src="${content[i].img_src}">
        <p>${content[i].title}</p>
      </div>
      `)
  }
}

// HIGHLIGHT NAVBAR ON SCROLL

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("#navWrapper ul").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i].slice(1);
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            console.log(divPos,divHeight)
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $($`a[href="/${theID}"]`).children("li").addClass("nav-active");
            } else {
                $($`a[href="/${theID}"]`).children("li").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });
