


/* function flipintitle() {
  setTimeout(function() {$("#phototitle span:nth-of-type(1)").addClass("flip-in-hor-bottom")}, 200);
  setTimeout(function() {$("#phototitle span:nth-of-type(2)").addClass("flip-in-hor-bottom")}, 400);
  setTimeout(function() {$("#phototitle span:nth-of-type(3)").addClass("flip-in-hor-bottom")}, 600);
  setTimeout(function() {$("#phototitle span:nth-of-type(4)").addClass("flip-in-hor-bottom")}, 800);
  setTimeout(function() {$("#phototitle span:nth-of-type(5)").addClass("flip-in-hor-bottom")}, 1000);
  setTimeout(function() {$("#phototitle span:nth-of-type(6)").addClass("flip-in-hor-bottom")}, 1200);
  setTimeout(function() {$("#phototitle span:nth-of-type(7)").addClass("flip-in-hor-bottom")}, 1400);
  setTimeout(function() {$("#phototitle span:nth-of-type(8)").addClass("flip-in-hor-bottom")}, 1600);
  setTimeout(function() {$("#phototitle span:nth-of-type(9)").addClass("flip-in-hor-bottom")}, 1800);
}
*/

function flipincol1() {
  setTimeout(function() {$("#col1 .eachimage:nth-of-type(1)").addClass("fade-in-left")}, 200);
  setTimeout(function() {$("#col1 .eachimage:nth-of-type(2)").addClass("fade-in-left")}, 800);
  setTimeout(function() {$("#col1 .eachimage:nth-of-type(3)").addClass("fade-in-left")}, 1400);
  setTimeout(function() {$("#col1 .eachimage:nth-of-type(4)").addClass("fade-in-left")}, 2000);
}
function flipincol2() {
  setTimeout(function() {$("#col2 .eachimage:nth-of-type(1)").addClass("fade-in-left")}, 200);
  setTimeout(function() {$("#col2 .eachimage:nth-of-type(2)").addClass("fade-in-left")}, 800);
  setTimeout(function() {$("#col2 .eachimage:nth-of-type(3)").addClass("fade-in-left")}, 1400);
  setTimeout(function() {$("#col2 .eachimage:nth-of-type(4)").addClass("fade-in-left")}, 2000);
}
function flipincol3() {
  setTimeout(function() {$("#col3 .eachimage:nth-of-type(1)").addClass("fade-in-left")}, 200);
  setTimeout(function() {$("#col3 .eachimage:nth-of-type(2)").addClass("fade-in-left")}, 800);
  setTimeout(function() {$("#col3 .eachimage:nth-of-type(3)").addClass("fade-in-left")}, 1400);
  setTimeout(function() {$("#col3 .eachimage:nth-of-type(4)").addClass("fade-in-left")}, 2000);
}
function flipincol4() {
  setTimeout(function() {$("#col4 .eachimage:nth-of-type(1)").addClass("fade-in-left")}, 200);
  setTimeout(function() {$("#col4 .eachimage:nth-of-type(2)").addClass("fade-in-left")}, 800);
  setTimeout(function() {$("#col4 .eachimage:nth-of-type(3)").addClass("fade-in-left")}, 1400);
  setTimeout(function() {$("#col4 .eachimage:nth-of-type(4)").addClass("fade-in-left")}, 2000);
}


function startanimations() {
  //setTimeout(flipintitle, 100);
  setTimeout(flipincol1, 1600);
  setTimeout(flipincol2, 2400);
  setTimeout(flipincol3, 3200);
  setTimeout(flipincol4, 3800);
}




/* playing around with loops */

var children = $("#phototitle span");

for (var i = 0; i <= children.length; i++) {
  var x = children[i]
  $("#phototitle span:nth-of-type(" + i + ")").addClass("flip-in-hor-bottom");
  console.log(x);
}


//$("#phototitle div").addClass("flip-in-hor-bottom");









//
