document.addEventListener("DOMContentLoaded", function() {
  var chance = Math.floor(Math.random() * 11);
  var isGood = true;
  if (chance < 2) {
    isGood = false;
  }

  content = document.getElementById("content");
  newstext = document.getElementById("newstext");

  if (isGood) {
    document.title = "Good news!"
    content.style.backgroundColor = "#1e824c"
    newstext.innerHTML = "Good news!"
    var good_sound = new Howl({
        src: ['js/sounds/good_news_clean.mp3']
    });

    good_sound.play();
  } else {
    document.title = "Bad news!"
    content.style.backgroundColor = "#d91e18"
    newstext.innerHTML = "Bad news!"
    var bad_sound = new Howl({
        src: ['js/sounds/bad_news_clean.mp3']
    });

    bad_sound.play();
  }
});
