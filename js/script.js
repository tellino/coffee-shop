function loaded(){
  videos = document.querySelectorAll("video");

  for (var i = 0; i < videos.length; i++){
    videos[i].classList.add("dissolve");
  }
}

window.onload = loaded;