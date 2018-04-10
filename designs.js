

/* adds fade ins to each letter of Photoblog using a loop */
var children = $("#phototitle span");
(function myLoop (i) {
   setTimeout(function () {
      $("#phototitle span:nth-of-type(" + i + ")").addClass("flip-in-hor-bottom");
      if (i++ < children.length){
        myLoop(i);
      }
   }, 200)
})(1);


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

setTimeout(callcol1,1800);
setTimeout(callcol2,2200);
setTimeout(callcol3,2600);
setTimeout(callcol4,3000);



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

  showSlides(slideIndex);


};



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
