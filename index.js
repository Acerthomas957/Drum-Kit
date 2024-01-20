// var w = document.getElementById("mywAudio"); 
// var a = document.getElementById("myaAudio");
// var s = document.getElementById("mysAudio"); 
// var d = document.getElementById("mydAudio"); 
// var j = document.getElementById("myjAudio");  
// var k = document.getElementById("mykAudio"); 
// var l = document.getElementById("mylAudio"); 
// function playAudio() { 
//   w.play(); 
// } 

// if(w==E){
//   var w = document.getElementById("wsound"); 
//   function playAudio() { 
//     w.play(); 
//   } 
// }
//  else if(k==E){
//   var k = document.getElementById("ksound"); 
//   function playAudio() { 
//     k.play(); 
//   } 
// }

var w = document.getElementById("wsound"); 
   function wsound() { 
    w.play();}
var a = document.getElementById("asound"); 
   function asound() { 
    a.play();}
var s = document.getElementById("ssound"); 
   function ssound() { 
    s.play();}
var d = document.getElementById("dsound"); 
   function dsound() { 
    d.play();}
var j = document.getElementById("jsound"); 
   function jsound() { 
    j.play();}
var k = document.getElementById("ksound"); 
   function ksound() { 
    k.play();}
var l = document.getElementById("lsound"); 
   function lsound() { 
    l.play();}

window.addEventListener("keypress",function(event){
  playAudio(event.key);
})
function playAudio(sound){
  switch(sound){
    case "w":
      w.play(); 
     break;
     case "a":
      a.play(); 
     break;
     case "s":
      s.play(); 
     break;
     case "d":
      d.play(); 
     break;
     case "j":
      j.play(); 
     break;
     case "k":
      k.play(); 
     break;
     case "l":
      l.play(); 
     break;
     default:
      console.log(sound);
  } 
}