import { qs, qsa, $on, $delegate } from './utils';
import { TimelineLite, CSSPlugin, AttrPlugin, Power1 }  from "gsap/all";
import '../stylesheets/style.scss';
import '../scripts/hammer.js';
import { Power0 } from 'gsap';

const plugins = [ CSSPlugin, AttrPlugin ];
const timeline = new TimelineLite();

timeline.to(".ssm-logo--svg", 5, {
  ease: Power4.easeOut,
  width:'100%'
});

class StudioSupermassive {
  constructor() {
    this.exposeContactForm();
  }

  exposeContactForm = () => {
    const slideout = qs('.ssm-slideout');
    const slideoutToggle = qsa('.ssm-slideout--toggle, .ssm-action--link');

    if(slideout && slideoutToggle.length) {
      slideoutToggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const isActive = (qs('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
          slideout.setAttribute('data-active', `${isActive}`);
        });
      });
    }
  }
}

new StudioSupermassive();