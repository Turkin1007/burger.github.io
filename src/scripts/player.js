let video = $('#video');
let playbtn = $(".player__start--btn");
const splash = $(".player__splash");

window.onload = function() {
  video = document.getElementById("video");

$(".player__splash").click(e => {
  video.play();
  splash.addClass("player__splash--hiden");
  playbtn.addClass("player__start--btn-change");
});

$(".plaeyr__playback").click(e => {
  const bar = $(e.currentTarget);
  const clickedPosition = e.originalEvent.layerX;
  const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
  const newPlaybackPositionSec = (video.duration / 100) * newButtonPositionPercent;
  $(".player__playback-button").css({
    left: `${newButtonPositionPercent}`
  });
  console.log(newButtonPositionPercent);
  
 video.currentTime = newPlaybackPositionSec;
});

$(".player__sound-line").click(e => {
  const line = $(e.currentTarget);
  const clickPosition = e.originalEvent.layerX;
  const newBtnPositionPercent = clickPosition;
  const newSoundPosition = newBtnPositionPercent;

  $(".player__sound-button").css({
    left:`${newBtnPositionPercent}%`
  });
  
  video.volume = newSoundPosition / 100;
});

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = addZero(Math.floor(roundTime / 60));
  const seconds = addZero(roundTime - minutes * 60);

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return `${minutes} : ${seconds}`;

}

let interval;
const durationSec = video.duration;

 $(".player__duration-estimate").text(formatTime(durationSec));

interval = setInterval(() => {
  const completedSec = video.currentTime;
  const completedPercent = (completedSec / durationSec) * 100;

  $(".player__playback-button").css({
    left: `${completedPercent}%`
  });

  $(".player__duration-completed").text(formatTime(completedSec));
}, 1000);

}

function PlayPauseVideo() {
  if (video.paused) {
      video.play();
      playbtn.addClass("player__start--btn-change");
      splash.addClass("player__splash--hiden");
    } else {
      video.pause();
      playbtn.removeClass("player__start--btn-change");
      splash.removeClass("player__splash--hiden");
    }
}