const introTitle = document.getElementsByClassName("intro__title")[0];

const title = "W O L F";

let cnt = 0;
let timer = 0;

function typingIntroTitle() {
    let character = title[cnt++];

    if (character === "\n") {
        introTitle.innerHTML = introTitle.innerHTML + "<br/>";
    } else {
        introTitle.innerHTML = introTitle.innerHTML + character;
    }

    if (cnt === title.length) {
        clearInterval(timer);
        
        return;
    }
}

window.onload = function() {
    timer = setInterval(typingIntroTitle, 200);
}

let audio;
      let progress;
  
    document.querySelector("img").addEventListener("click", function () {
      if (audio && !audio.paused) {
        audio.pause();
        return;
      }
  
      audio = new Audio("Colde - 울프 Wolf [LIVE].mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
  
      progress = setInterval(updateProgress, 100);
    });
    function updateProgress() {
      if (audio && audio.duration) {
        const progressBar = document.querySelector(".progress-bar");
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      var image = document.getElementById("image");
      var angle = 0;
      var isRotating = false;
    
      function rotateImage() {
        angle += 1;
        image.style.transform = "rotate(" + angle + "deg)";
        if (isRotating) {
          requestAnimationFrame(rotateImage);
        }
      }
    
      image.addEventListener("click", function() {
        if (isRotating) {
          isRotating = false;
        } else {
          isRotating = true;
          rotateImage();
        }
      });
    });
    
    
    
    