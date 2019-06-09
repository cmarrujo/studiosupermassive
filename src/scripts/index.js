import { qs, qsa, $on, $delegate } from './utils';
import { TimelineLite, CSSPlugin, AttrPlugin, Power1 }  from "gsap/all";
import '../stylesheets/style.scss';
import '../scripts/hammer.js';
import { Power0 } from 'gsap';

class StudioSupermassive {
  constructor() {
    this.exposeContactForm();
    this.superMassiveIntro();
    this.superMassiveParallax();
  }

  superMassiveIntro = () => {
    const plugins = [ CSSPlugin, AttrPlugin ];
    const timeline = new TimelineLite();

    timeline.to(".ssm-logo--svg", 5, {
      ease: Power4.easeOut,
      width: '100%'
    })
    .to(".ssm-mission--wrapper", 4.5, {
      ease: Power4.easeOut,
      opacity: 1,
      top: '50%'
    },'-=4.5');
  }

  superMassiveParallax = () => {
    const ssm = document.querySelector('.ssm');
    ssm.addEventListener('mousemove', (e) => {
      this.superMassiveParallaxEngine(e, ".ssm-logo", -30);
    });
  }
  
  superMassiveParallaxEngine = (e, target, movement) => {
    const ssm = document.querySelector('.ssm');
    const relX = e.pageX - ssm.offsetLeft;
    const relY = e.pageY - ssm.offsetTop;
  
    TweenMax.to(target, 1, {
      x: (relX - ssm.offsetWidth / 2) / ssm.offsetWidth * movement,
      y: (relY - ssm.offsetHeight / 2) /ssm.offsetHeight * movement
    });
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