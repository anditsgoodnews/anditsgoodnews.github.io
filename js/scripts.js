var played = false;
var isGood = true;

document.addEventListener("DOMContentLoaded", function() {
  var chance = Math.floor(Math.random() * 11);
  if (chance < 2) {
    isGood = false;
  }

  content = document.getElementById("content");
  newstext = document.getElementById("newstext");

  if (isGood) {
    document.title = "Good news!"
    content.style.backgroundColor = "#1e824c"
    newstext.innerHTML = "Good news!"
    psound.src = ['js/sounds/good_news_clean.mp3']
  } else {
    document.title = "Bad news!"
    content.style.backgroundColor = "#d91e18"
    newstext.innerHTML = "Bad news!"
    psound.src = ['js/sounds/bad_news_clean.mp3']
  }
});

document.addEventListener('mousemove', e => {
  if (!played) {
    if (isGood) {
      var psound = new Howl({
        src: ['js/sounds/good_news_clean.mp3']
      });
      psound.play()
    } else {
      var psound = new Howl({
        src: ['js/sounds/bad_news_clean.mp3']
      });
      psound.play()
    }
    played = true
  }
});
