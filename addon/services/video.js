import Service from '@ember/service';

export default Service.extend({
  addVideo(matcher) {
    window._wq = window._wq || [];
    _wq.push({
      id: matcher,
      onReady: function(video) {
        // console.log("I got a handle to the video!", video);
        video.bind('play', function() {
          video.time(10);
          return video.unbind;
        });
      }
    });
  }
});
