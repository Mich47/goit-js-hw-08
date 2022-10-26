import Player from '@vimeo/player';

let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = ({ seconds }) => {
  saveCurrentTimeToLS(Math.floor(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000, { trailing: false }));

const currentTime = getCurrentTimeFromLS();
player
  .setCurrentTime(currentTime)
  .then()
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Error: ', error.message);
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });

function saveCurrentTimeToLS(time) {
  try {
    localStorage.setItem('videoplayer-current-time', time);
  } catch (error) {
    console.log('Error: ', error.message);
  }
}

function getCurrentTimeFromLS() {
  try {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (!Number(currentTime) || currentTime < 0) {
      console.log('Error: ', 'Wrong local data!');
      return 0;
    }
    return currentTime;
  } catch (error) {
    console.log('Error: ', error.message);
  }
}
