let clicks = 0;

function increaseClicks() {
  clicks = clicks + 1;
  document.getElementById("clickerP").innerHTML="Button clicked: "+clicks+" times";
}