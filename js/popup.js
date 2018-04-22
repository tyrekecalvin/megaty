var modal = document.getElementById('images');
var motal = document.getElementById('image');


var btn = document.getElementById('imgview');
var butn = document.getElementById('imgv');


btn.onclick = function(){
    modal.style.display = "block";
}
butn.onclick = function(){
    motal.style.display = "block";
}


window.onclick = function(event) {
    if (event.target === modal){
      modal.style.display = "none"
    }

    if (event.target === motal){
      motal.style.display = "none"
    }
}
