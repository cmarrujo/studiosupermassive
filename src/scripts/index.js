import { qs, qsa, $on, $delegate } from './utils';
import '../stylesheets/style.scss';
import '../scripts/hammer.js';

class StudioSupermassive {
  constructor() {
    this.exposeContactForm();
  }

  exposeContactForm = () => {
    const slideout = document.querySelector('.ssm-slideout');
    const slideoutToggle = document.querySelector('.ssm-slideout--toggle');
    const contactLink = document.querySelector('.ssm-contact--link');

    if(slideout) {
      slideoutToggle.addEventListener('click', () => {
        const isActive = (document.querySelector('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
        slideout.setAttribute('data-active', `${isActive}`);
      });
    }
    
    if(contactLink) {
      contactLink.addEventListener('click', () => {
        const isActive = (document.querySelector('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
        slideout.setAttribute('data-active', `${isActive}`);
      });
    }
  }
}

new StudioSupermassive();