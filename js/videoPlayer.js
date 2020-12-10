const media = document.querySelector('video');
const controls = document.querySelector('.controls');

media.muted = true; 

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const fullscreen = document.querySelector('.fullscreen');

const timmerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

const fullscreenButton = document.getElementById('fullscreen-button')

media.removeAttribute('controls');
controls.style.visibility = 'visible';


function playPauseMedia()
{
	if(media.paused) {
		play.dataset.icon = 'u';
		media.play()
	} else {
		play.dataset.icon = 'P';
		media.pause();
	}
}

function stopMedia() {
	media.pause();
	media.currentTime = 0;
	play.dataset.icon = 'P';
}

function setTime() {
	//console.log(media.currentTime);
	let minutes = Math.floor(media.currentTime/60);
	//console.log(minutes); //0, our movie is under a minute
	let seconds = Math.floor(media.currentTime - minutes * 60);
	//console.log(seconds);
	let minuteValue;
	let secondValue;

	//if minutes is less than 10, minute value = 0 +minutes
	//i.e. 09:01
	if(minutes < 10) {
		minuteValue = '0' + minutes;
	} else {
		minuteValue = minutes;
	}

	//if seconds is less than 10, second value = 0, i.e. 09
	if(seconds < 10) {
		secondValue = '0' + seconds;
	} else {
		secondValue = seconds
	}

	let mediaTime = minuteValue + ':' + secondValue;
	timer.innerHTML = mediaTime;

	let barLength = timmerWrapper.clientWidth * (media.currentTime/media.duration);
	timerBar.style.width = barLength + 'px';
}


/*if user clicks on video player, the video opens in fullscreen*/

function fullScreen() {
	if (document.fullscreenElement) {
	  document.exitFullscreen();
	} else {
	  media.requestFullscreen();
	}
  }


play.addEventListener('click', playPauseMedia);
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);
media.addEventListener('timeupdate', setTime);
fullscreen.addEventListener('click', fullScreen);