// slick corouel
$(document).ready(function () {
  $(".carousel").slick({
    speed: 300,
    arrows: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
});

// menu show and hide
function nav_btn() {
  const navitem = document.querySelector(".navitems");
  if (navitem.style.transform == "scaleY(1)") {
    navitem.style.transform = "scaleY(0)";
    navitem.style.display = "none";
  } else {
    navitem.style.transform = "scaleY(1)";
    navitem.style.display = "flex";
  }
}

// video play button click pause resume
var playBtn = document.getElementById("play_btn");
var video = document.getElementById("video");
playBtn.addEventListener("click", function () {
  if (video.paused == true) {
    video.play();
    playBtn.innerHTML = "<i class='fas fa-pause-circle'></i>";
  } else {
    video.pause();
    playBtn.innerHTML = "<i class='fas fa-play-circle'></i>";
  }
});
