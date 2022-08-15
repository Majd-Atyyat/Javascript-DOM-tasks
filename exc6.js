
function addsong() {
    var ul = document.getElementById("playlist");
    var li = document.createElement("li");
   var btn=   document.createElement("button")
   btn.innerHTML="Delete"
   btn.onclick=function (e){
    li.remove()
   }
   btn.style.border="2px black solid"
   btn.style.color="red"
   btn.style.backgroundColor="white"
   btn.style.textDecoration="underline"
   btn.style.float="right"
   li.appendChild(btn)
    li.appendChild(document.createTextNode(songTextInput.value));
    ul.appendChild(li);}