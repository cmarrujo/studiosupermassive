import { qs, qsa, $on, $delegate } from './utils';
import { TimelineLite, CSSPlugin, AttrPlugin, Power1 }  from "gsap/all";
import '../stylesheets/style.scss';
import '../scripts/hammer.js';
import { Power0 } from 'gsap';

const plugins = [ CSSPlugin, AttrPlugin ];
const timeline = new TimelineLite();

timeline.to(".ssm-logo--svg", 5, {
  ease: Power4.easeOut,
  width: '100%'
})
.to(".ssm-mission--wrapper", 5, {
  ease: Power4.easeOut,
  opacity: 1,
  top: '50%'
},'-=4.5');

class StudioSupermassive {
  constructor() {
    this.exposeContactForm();
  }

  exposeContactForm = () => {
    const slideout = qs('.ssm-slideout');
    const slideoutToggle = qsa('.ssm-slideout--toggle, .ssm-action--link');
    const ssmLogoWrapper = qs('.ssm-logo--wrapper');

    if(slideout && slideoutToggle.length) {
      slideoutToggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const isActive = (qs('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
          slideout.setAttribute('data-active', `${isActive}`);
          ssmLogoWrapper.setAttribute('data-active', `${isActive}`);
        });
      });
    }
  }
}

new StudioSupermassive();