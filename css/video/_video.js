document.querySelector('.video__play').onclick = play;
document.querySelector('.video__video').onclick = stop;

let video;
let display;
let progress;

video = document.querySelector('.video__video');

function play() {
   video.play();
   document.querySelector('.video__buttons').style = 'display: none';

}
function stop() {
   video.pause();
   video.currentTime = 0;
   video.poster = video.poster;
   document.querySelector('.video__buttons').style = 'display: flex';
   //document.querySelector('.video__video').load();
}