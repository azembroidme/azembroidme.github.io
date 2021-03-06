var loc = window.location.pathname.split("/").slice(-1),
    actives = document.querySelectorAll("nav a[href]")

loc = (loc[0] == "") ? "index.html" : loc

for (var i=0;i<actives.length;i++) {
  var a = actives[i]
  a.classList.add("hfx")
  if (a.getAttribute("href") == loc) {
    a.classList.add("active")
  }
}

if (window.innerWidth < 600) {
  $("#last-tab").remove()
  $("#last-slide").remove()
  $("#intro-carousel").carousel().height(document.querySelector(".item img").height/1.6)
}

var videoCount  = 1,
    videoPlayer = document.querySelector("video");

function playNextVideo(){
  videoCount++;
  if (videoCount === 4) {
    videoCount = 1; 
    return videoPlayer.src = "img/video"+videoCount+".mp4";
  }
  videoPlayer.src = "img/video"+videoCount+".mp4";
  videoPlayer.play();
};

