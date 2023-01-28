var gifRunning = false;
var groundInterval;
var currentBackgroundPosition = '';

    document.addEventListener("keydown", function(event) {
      if (event.code === "ArrowRight" && !gifRunning) {
        gifRunning = true;
        mario.src = "./img/mario_running.gif";

        groundInterval = setInterval(function() {
          var imageElement = document.getElementById('super-mario');
          if(imageElement.style.backgroundPosition == currentBackgroundPosition){
          imageElement.style.backgroundPosition = currentBackgroundPosition -10 + 'px';
          }
          else{
            imageElement.style.backgroundPosition = currentBackgroundPosition;
          }
        }, 1000 / 20);
      }
    });
    document.addEventListener('keyup', function(event) {
      if (event.code === 'ArrowRight') {
        mario.src ="./img/mario.png";
        clearInterval(groundInterval);
        gifRunning = false;
      }
    });


    document.addEventListener('contextmenu', function() {
      if (!gifRunning) {
        gifRunning = true;
        mario.src = "./images/mario_running.gif";

        groundInterval = setInterval(function() {
          var imageElement = document.getElementById('super-mario');
          if(imageElement.style.backgroundPosition == currentBackgroundPosition){
          imageElement.style.backgroundPosition = currentBackgroundPosition -10 + 'px';
          }
          else{
            imageElement.style.backgroundPosition = currentBackgroundPosition;
          }
        }, 1000 / 20);
      }
    });
    document.addEventListener('mousedown', function() {
        mario.src ="./img/mario.png";
        clearInterval(groundInterval);
        gifRunning = false;
      });