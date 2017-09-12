function init() {
  const $video = document.querySelector('video')

  $video.addEventListener("loadedmetadata", (data) => {
    console.warn('============loadedmetadata==========')
    console.log(data)
  }, true);

  $video.addEventListener("loadeddata", (data) => {
    console.warn('============loadeddata==========')
    console.log(data)
  }, true);

  $video.addEventListener("seeked", function () {
    console.warn('============seeked==========')
    // $video.play();
  }, true);
  $video.currentTime = 40.0;

  $video.addEventListener('loadstart', (data) => {
    console.log(data)
  }, true)

  $video.addEventListener('progress', (data) => {
    console.warn('============progress==========')
    console.log(data)
  }, true)

  $video.addEventListener('playing', (data) => {
    console.warn('============playing==========')
    console.log(data)
  }, true)

  $video.addEventListener('play', (data) => {
    console.warn('============play==========')
    console.log(data)
  }, true)

  $video.addEventListener('ended', (data) => {
    console.warn('============ended==========')
    $video.play()
    console.log(data)
  }, true)
}