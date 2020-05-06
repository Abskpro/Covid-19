// this part is for the sticky nav bar
var sidebar = new StickySidebar('#sidebar', {
  containerSelector: '.main-content',
  topSpacing: 20,
  bottomSpacing: 20,
  resizeSensor: true,
  stickClass: 'is-affixed',
  minWidth: 300,
});

///////mapbox

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '400',
    width: '840',
    videoId: '0lG1w_U7kss',
  });
}
