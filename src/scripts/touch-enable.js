import { qs, qsa, $on, $delegate } from './utils';

export default class TouchEnable {
  constructor() {
    this.initTouch();
  }

  superMassiveWindow = () => {
    return window.innerWidth;
  }

  initTouch = () => {
    const myElement = qs('.ssm-slideout--content');
    let cur = 0;
    const inner = this.superMassiveWindow()
    if (inner <= 768) {
      const mc = new Hammer(myElement);

      mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
      mc.on("swipeup tap", (ev) => {
        (cur >= 4) ? cur = 4 : cur++;
        this.content(ev.type, cur);
      });
      
      mc.on("swipedown", (ev) => {
        (cur <= 0) ? cur = 0 : cur--;
        this.content(ev.type, cur);
      });
    }
  }

  simulateClick = (elem) => {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    // If cancelled, don't dispatch our event
    var canceled = !elem.dispatchEvent(evt);
  };

  content = (gesture, cur) => {
    console.log(gesture + " gesture detected.");
    const content = qs('.ssm-slideout--content_details-wrapper[data-section]');
    const contentDetails = qsa('.ssm-slideout--content_details');
    const menuLinks = qsa('.ssm-slideout--navigation--menu_link');
    console.log(cur);
    this.simulateClick(menuLinks[cur]);
  }
}

new TouchEnable();