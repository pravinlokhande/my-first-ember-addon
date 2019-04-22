import Component from '@ember/component';
import layout from '../templates/components/my-video';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  matcher: null,
  classNames: ['video-wrapper'],
  video: service(),
  init() {
    this._super(...arguments);
    let video = this.video;
    let matcher = this.matcher;
    video.addVideo(matcher);
  }
});
