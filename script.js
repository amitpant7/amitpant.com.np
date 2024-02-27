
var aText = new Array(
    "Hi! ........","","",
    "I am student, and I am trying to figure out things on my own."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}
typewriter();


window.onresize = function(event) {
    var windowWidth = window.innerWidth;
    var fontSize;

  
    if (1000> windowWidth > 600) {
  
      fontSize = int(windowWidth/100)+1
    } 
  
  else {
      fontSize = 12;
    }
  
    total_par = document.querySelectorAll('.project p');
    for (var i = 0; i < total_par.length; i++){
        total_par[i].style.fontSize = fontSize + 'pt'
    }
  }