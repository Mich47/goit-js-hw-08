import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getTimeUpdate = ({ seconds }) => {
  console.log('seconds ', Math.floor(seconds));
};

player.on('timeupdate', throttle(getTimeUpdate, 1000, { trailing: false }));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
