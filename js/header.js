window.onscroll = function() {scrollFunction(); scrollFunctionTop(); testForsideBillede()};
function scrollFunction() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  document.getElementById("bagg").style.background = "#00454e";
  document.getElementById("bagg").style.transition = "all 0.2s";
  document.getElementById("bagg").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
} else {
  document.getElementById("bagg").style.background = "none";
  document.getElementById("bagg").style.boxShadow = "none";
}
}







let mybutton = document.getElementById("toppen-1");


function scrollFunctionTop() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


let test = document.getElementById("gf1-pic");


function testForsideBillede() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    test.style.display = "none";
  } else {
    test.style.display = "block";
  }
}
