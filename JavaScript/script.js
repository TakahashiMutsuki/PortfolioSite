const pics_src = ["image/mercariApp01.png","image/mercariApp02.png","image/mercariApp.png","image/mercariApp03.png","image/mercariApp04.png","image/mercariApp05.png"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 5){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 2000);

