import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const key = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

const currentTime = localStorage.getItem(key);

if (currentTime < 530) {
  player.setCurrentTime(currentTime);
}

function saveTime(event) {
  localStorage.setItem(key, event.seconds);
}
