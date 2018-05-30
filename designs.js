
// ------------------- landing page

//hide everything initially
$("path").addClass("hide");

//making each paths individual functions
function mainorangerect() {
   $("#mainorangerect").toggleClass("popiny");
};
function centrerectlarge() {
   $("#centrerectlarge").toggleClass("popiny");
};
function topleftring() {
   $("#topleftring").toggleClass("popinxy");
};
function orangerecttopright() {
   $("#orangerecttopright").toggleClass("popiny");
};
function topblueysquare() {
   $("#topblueysquare").toggleClass("popinxy");
};
function orangerecttop3() {
   $("#orangerecttop3").toggleClass("popiny");
};
function orangerecttop2() {
   $("#orangerecttop2").toggleClass("popiny");
};
function orangerecttop1() {
   $("#orangerecttop1").toggleClass("popiny");
};
function bottomrectlarge() {
   $("#bottomrectlarge").toggleClass("popiny");
};
function bottomrectsmall() {
   $("#bottomrectsmall").toggleClass("popiny");
};
function lensshade() {
   $("#lensshade").toggleClass("popinxy");
};
function lenscircorange() {
   $("#lenscircorange").toggleClass("popinxy");
};
function pinklens() {
   $("#pinklens").toggleClass("popinxy");
};
function purplelens() {
   $("#purplelens").toggleClass("popinxy");
};
function blueylens() {
   $("#blueylens").toggleClass("popinxy");
};
function purplelens() {
   $("#purplelens").toggleClass("popinxy");
};
function lensglare() {
   $("#lensglare1, #lensglare2").toggleClass("popinxy");
};
function littleorangecirccentre() {
   $("#littleorangecirccentre").toggleClass("popinxy");
};
function flashenlarge1() {
   $("#firstflashsquare1").toggleClass("flashenlarge");
};
function firstflashsquare1bits() {
   $(".firstflashsquare1bits").toggleClass("flashenlargebits");
};
function flashenlarge2() {
   $("#firstflashsquare2").toggleClass("flashenlarge");
};
function firstflashsquare2bits() {
   $(".firstflashsquare2bits").toggleClass("flashenlargebits");
};
function flashpressmove() {
   $("#orangerecttop1").toggleClass("flashpress");
}

// creating function to move photodown then click
function movephoto() {
      $("#photograph").toggleClass("movephotodown");
   };

// to create the final peice, making sure photo can expand, taking out overflow:hidden
function photobig() {
   $("#photocontainer2").toggleClass("fillwindow");
};

//on blue button click
function cameraanimation() {
   setTimeout(mainorangerect, 100);
   setTimeout(centrerectlarge, 150);
   setTimeout(topleftring, 1400);
   setTimeout(orangerecttopright, 1100);
   setTimeout(topblueysquare, 1150);
   setTimeout(orangerecttop3, 900);
   setTimeout(orangerecttop2, 950);
   setTimeout(orangerecttop1, 1000);
   setTimeout(bottomrectsmall, 750);
   setTimeout(bottomrectlarge, 650);
   setTimeout(lensshade, 100);
   setTimeout(lenscircorange, 400);
   setTimeout(pinklens, 200);
   setTimeout(purplelens, 300);
   setTimeout(blueylens, 100);
   setTimeout(lensglare, 400);
   setTimeout(littleorangecirccentre, 700);
   setTimeout(flashpressmove, 2050);
   setTimeout(flashenlarge1, 2100);
   setTimeout(firstflashsquare1bits, 2100);
   setTimeout(flashenlarge2, 2200);
   setTimeout(firstflashsquare2bits, 2200);
   setTimeout(movephoto, 2400);
   setTimeout(photobig, 3000);
}

// --------------landing page end



/* adds fade ins to each letter of Photoblog using a loop */
var children = $("#phototitle span");

function titleanim() {
(function myLoop (i) {
   setTimeout(function () {
      $("#phototitle span:nth-of-type(" + i + ")").addClass("flip-in-hor-bottom");
      if (i++ < children.length){
        myLoop(i);
      }
   }, 200)
})(1);
}

/* fadein each column */
function callcol1() {
(function colloop(i) {
setTimeout(function () {
    $("#col1 .eachimage:nth-of-type(" + i + ")").addClass("fade-in-left");
    if (i++ < children.length){
      colloop(i);
    }
 }, 400)
})(1);
};
function callcol2() {
(function colloop(i) {
setTimeout(function () {
    $("#col2 .eachimage:nth-of-type(" + i + ")").addClass("fade-in-left");
    if (i++ < children.length){
      colloop(i);
    }
 }, 400)
})(1);
};
function callcol3() {
(function colloop(i) {
setTimeout(function () {
    $("#col3 .eachimage:nth-of-type(" + i + ")").addClass("fade-in-left");
    if (i++ < children.length){
      colloop(i);
    }
 }, 400)
})(1);
};
function callcol4() {
(function colloop(i) {
setTimeout(function () {
    $("#col4 .eachimage:nth-of-type(" + i + ")").addClass("fade-in-left");
    if (i++ < children.length){
      colloop(i);
    }
 }, 400)
})(1);
};



/* menu interaction */
function showsidebar() {
  $("#sidemenu").css("display", "block")
  $("#sidemenu").toggleClass("slidesidemenuin");
  $("#sidemenu").toggleClass("slidesidemenuout");
  $("#sidemenu").mouseenter(function () {
    $("#sidemenu").mouseleave(function() {
      $("#sidemenu").toggleClass("slidesidemenuin");
      $("#sidemenu").toggleClass("slidesidemenuout");
    });
  });
}
$("#hamburgermenu").click(showsidebar);


function showhamburgermenu() {
  $("#hamburgermenu").animate({
    opacity: 1
  },1500);
}

// function setting up page - title, columns and menu
function mainpageanimations() {
  titleanim();
  setTimeout(callcol1,1800);
  setTimeout(callcol2,2200);
  setTimeout(callcol3,2600);
  setTimeout(callcol4,3000);
  setTimeout(showhamburgermenu,1800);
}


// function for hiding landing page after it is done
function hidelandingpage() {
  $("#landingpagecontainer").fadeOut();
  $("#mainbodyofblog").fadeIn();
}

// function to start all animations on pageload
function startallanims() {
  $("#landingpagecontainer").fadeIn();
  setTimeout(cameraanimation, 500);
  setTimeout(hidelandingpage, 5200);
  setTimeout(mainpageanimations, 6400)
}






/* lightbox */
$("#lightbox").hide();

/* function holding everything in #lightbox, all starting from eachimage clicked on */
function imgchosen(chosenid) {
  $("#lightbox").show();
  var slideIndex = 1;

  /*first adding all eachimage to an array, to get index numbers of whatever clicked */
    var c;
    var imgnamearray = [];
    var x = document.getElementsByClassName("eachimage");
    console.log(x);
    for (c = 0; c < x.length; c++) {
      var nameid = x[c].id;
      imgnamearray.push(nameid);
    }
    console.log(imgnamearray)

    /* now finding the index no of whichever chosenid was clicked, within the array */
    console.log(chosenid);
    var indexno;
    var t = imgnamearray.length;
    for (c = 0; c < t; c++) {
      if (imgnamearray[c] === chosenid){
        indexno = c;
      }
    }
    console.log(indexno);

    slideIndex = indexno + 1;

    showSlides(slideIndex);

    /*moving the slides */
    function moveSlide(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      var i;
      var x = document.getElementsByClassName("lightboxslides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
    }

    $(".slidenext").click(function () {
      moveSlide(1);
    });
    $(".slideprev").click(function () {
      moveSlide(-1);
  });


};


/* closing the lightbox */
$("#closelightbox").click(function (){
  $("#lightbox").hide();
});





// messing around with lightbox that didnt quite work
/*
function imgchosen(chosenid){
  $("#"+chosenid).css("border","10px solid blue");
  var slideCount = $('#slider ul li').length;
  for (var i = 0; i < slideCount; i++) {
    $("#slider ul li:nth-of-type(" + i + ")").css("display","none")
    console.log(i);
  }
  console.log(chosenid);
  $("li[id*='" + chosenid + "']").addClass("showelement");
  $("#lightbox").show();
};


$(".slidenext").click( function () {
  var currentelement = $(".showelement:nth-of-type(1)").attr("id");
  var nextElement = $(".showelement").next()
  $("nextElement").addClass("showelement");
  $("nextElement").removeClass("showelement");
}
);
$(".slideprev").click();
*/
