import { qs, qsa, $on, $delegate } from './utils';
import '../stylesheets/style.scss';
import '../scripts/hammer.js';

class StudioSupermassive {
  constructor() {
    this.exposeContactForm();
  }

  exposeContactForm = () => {
    const slideout = document.querySelector('.ssm-slideout');
    const slideoutToggle = document.querySelectorAll('.ssm-slideout--toggle, .ssm-action--link');

    if(slideout && slideoutToggle.length) {
      slideoutToggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const isActive = (document.querySelector('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
          slideout.setAttribute('data-active', `${isActive}`);
        });
      });
    }
  }
}

new StudioSupermassive();