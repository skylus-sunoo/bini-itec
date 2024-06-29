var i = 0;
var txt = 'Experience the perfect blend of flavor and comfort in<br>every cup. Where every sip brings you closer to coffee bliss.'; 
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sloganTagline").innerHTML = txt.substring(0, i + 1) + '<span id="cursor">|</span>';
    i++;
    setTimeout(typeWriter, speed);
  }
}