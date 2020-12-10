ant1 = document.getElementById("ant1");
ant2 = document.getElementById("ant2");
antmimick = document.getElementById("antmimick");
gameWrong = document.getElementById("gameWrong");
gameRight = document.getElementById("gameRight");

ant1.onclick = function() {
    gameWrong.style.display = "block";
    gameRight.style.display = "none";
    ant1.style.scale = "1.3";
    antmimick.style.scale = "1";
    ant2.style.scale = "1";
  };

ant2.onclick = function() {
    gameWrong.style.display = "block";
    gameRight.style.display = "none";
    ant2.style.scale = "1.3";
    ant1.style.scale = "1";
    antmimick.style.scale = "1";
  };

antmimick.onclick = function() {
    gameWrong.style.display = "none";
    gameRight.style.display = "block";
    antmimick.style.scale = "1.3";
    ant2.style.scale = "1";
    ant1.style.scale = "1";
  };