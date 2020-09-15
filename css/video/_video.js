document.querySelector('.video__play').onclick = play;
document.querySelector('.video__panel').onclick = stop;

let video;
let display;
let progress;

video = document.querySelector('.video__video');

function play() {
   video.play();
   document.querySelector('.video__buttons').style = 'display: none';
   document.querySelector('.video__panel').style = 'background-image: none';
}
function stop() {
   video.pause();
   video.currentTime = 0;
   video.poster = video.poster;
   document.querySelector('.video__buttons').style = 'display: flex';
   document.querySelector('.video__panel').style = 'background-image: linear-gradient(to top, rgba(255,255,255,.9),rgba(255,255,255,.9)), url(/css/video/img/video.png)';
}