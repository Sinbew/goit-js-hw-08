import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(throttle);
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const lastPosition = localStorage.getItem('videoplayer-current-time');
if (lastPosition) {
  player.setCurrentTime(lastPosition);
}
