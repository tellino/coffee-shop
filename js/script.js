function loaded(){
  videos = document.querySelectorAll("video");

  for (var i = 0; i < videos.length; i++){
    videos[i].classList.add("dissolve");
  }
}

function show_navbar(){
  document.getElementById("side-nav").classList.add("translate-x");
}

function hide_navbar(){
  document.getElementById("side-nav").classList.remove("translate-x");
}

window.onload = loaded;