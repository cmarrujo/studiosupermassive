import { qs, qsa, $on, $delegate } from './utils';
import { TimelineLite, CSSPlugin, AttrPlugin, Power1 }  from "gsap/all";
import '../stylesheets/style.scss';
import '../scripts/hammer.js';
import { Power0 } from 'gsap';

class StudioSupermassive {
  constructor() {
    this.superMassiveIntro();
    // this.superMassiveParallax();
    // this.superMassiveGlitch();
    this.superMassiveForm();
  }

  superMassiveIntro = () => {
    const plugins = [ CSSPlugin, AttrPlugin ];
    const timeline = new TimelineLite();

    timeline.to(".ssm-logo--svg", 5, {
      ease: Power4.easeOut,
      width: '100%',
      // onComplete: this.superMassiveStagger
    })
    .to(".ssm-mission--wrapper", 4.5, {
      ease: Power4.easeOut,
      opacity: 1,
      top: '200%',
    },'-=4.5');
  }

  superMassiveStagger = () => {
    const ssmLogoSVG1 = qsa('.ssm-logo--svg.magenta');
    const ssmLogoSVG2 = qsa('.ssm-logo--svg.yellow');
    const ssmLogoSVG3 = qsa('.ssm-logo--svg.cyan');
    const ssmLogoSVG4 = qsa('.ssm-logo--svg.lightest');
    const timeline1 = new TimelineLite();
    const timeline2 = new TimelineLite();
    const timeline3 = new TimelineLite();
    const timeline4 = new TimelineLite();
       
    timeline1.to(ssmLogoSVG1, .20, {
      left: `${Math.floor(Math.random() * 2) + 52}%`,
      top: `${Math.floor(Math.random() * 2) + 49}%`,
      opacity: 1,
      ease: Power1.easeOut
    })
    .to(ssmLogoSVG1, .25, {
      left: `53%`,
      top: `50%`,
      opacity: 0,
      ease: Power2.easeOut
    })
    
    timeline2.to(ssmLogoSVG2, .21, {
      left: `${Math.floor(Math.random() * 2) + 52}%`,
      top: `${Math.floor(Math.random() * 2) + 50}%`,
      opacity: 1,
      ease: Power3.easeOut
    })
    .to(ssmLogoSVG2, .25, {
      left: `53%`,
      top: `50%`,
      opacity: 0,
      ease: Power4.easeOut
    })
    
    timeline3.to(ssmLogoSVG3, .20, {
      left: `${Math.floor(Math.random() * 2) + 53}%`,
      top: `${Math.floor(Math.random() * 2) + 50}%`,
      opacity: 1,
      ease: Power4.easeOut
    })
    .to(ssmLogoSVG3, .25, {
      left: `53%`,
      top: `50%`,
      opacity: 0,
      ease: Power3.easeOut
    })
    
    timeline4.to(ssmLogoSVG4, .20, {
      left: `${Math.floor(Math.random() * 2) + 53}%`,
      top: `${Math.floor(Math.random() * 2) + 50}%`,
      opacity: 1,
      ease: Power4.easeOut
    })
    .to(ssmLogoSVG4, .25, {
      left: `53%`,
      top: `50%`,
      opacity: 0,
      ease: Power2.easeOut
    })
  }

  superMassiveParallax = () => {
    const ssm = qs('.ssm');
    ssm.addEventListener('mousemove', (e) => {
      this.superMassiveParallaxEngine(e, ".ssm-logo", -30);
    });
  }
  
  superMassiveParallaxEngine = (e, target, movement) => {
    const ssm = qs('.ssm');
    const relX = e.pageX - ssm.offsetLeft;
    const relY = e.pageY - ssm.offsetTop;
  
    TweenMax.to(target, 1, {
      x: (relX - ssm.offsetWidth / 2) / ssm.offsetWidth * movement,
      y: (relY - ssm.offsetHeight / 2) /ssm.offsetHeight * movement
    });
  }

  superMassiveGlitch = () => {
    const ssmLogo = qs('.ssm-logo');
    const ssmLogoSVG = qsa('.ssm-logo--svg');
    const ssmLogoSVG1 = qsa('.ssm-logo--svg.magenta');
    const ssmLogoSVG2 = qsa('.ssm-logo--svg.yellow');
    const ssmLogoSVG3 = qsa('.ssm-logo--svg.cyan');
    const ssmLogoSVG4 = qsa('.ssm-logo--svg.lightest');
    const timeline1 = new TimelineLite();
    const timeline2 = new TimelineLite();
    const timeline3 = new TimelineLite();
    const timeline4 = new TimelineLite();

    ssmLogo.addEventListener('mousedown', (e) => {
      ssmLogoSVG.forEach((svg) => {
        if(svg.hasAttribute('data-animate')) {
          timeline1.to(ssmLogoSVG1, .20, {
            left: `${Math.floor(Math.random() * 2) + 53}%`,
            top: `${Math.floor(Math.random() * 2) + 50}%`,
            opacity: 1,
            ease: Power1.easeOut,
          })
          .to(ssmLogoSVG1, .15, {
            left: `${Math.floor(Math.random() * 3) + 53}%`,
            top: `${Math.floor(Math.random() * 3) + 50}%`,
            opacity: 1,
            ease: Power1.easeOut
          })
          
          timeline2.to(ssmLogoSVG2, .20, {
            left: `${Math.floor(Math.random() * 2) + 53}%`,
            top: `${Math.floor(Math.random() * 2) + 50}%`,
            opacity: 1,
            ease: Power3.easeOut
          })
          .to(ssmLogoSVG2, .15, {
            left: `${Math.floor(Math.random() * 3) + 53}%`,
            top: `${Math.floor(Math.random() * 3) + 50}%`,
            opacity: 1,
            ease: Power3.easeOut
          })
          
          timeline3.to(ssmLogoSVG3, .20, {
            left: `${Math.floor(Math.random() * 2) + 53}%`,
            top: `${Math.floor(Math.random() * 2) + 50}%`,
            opacity: 1,
            ease: Power4.easeOut
          })
          .to(ssmLogoSVG3, .15, {
            left: `${Math.floor(Math.random() * 3) + 53}%`,
            top: `${Math.floor(Math.random() * 3) + 50}%`,
            opacity: 1,
            ease: Power4.easeOut
          })
          
          timeline4.to(ssmLogoSVG4, .20, {
            left: `${Math.floor(Math.random() * 2) + 53}%`,
            top: `${Math.floor(Math.random() * 2) + 50}%`,
            opacity: 1,
            ease: Power4.easeOut
          })
          .to(ssmLogoSVG4, .15, {
            left: `${Math.floor(Math.random() * 3) + 53}%`,
            top: `${Math.floor(Math.random() * 3) + 50}%`,
            opacity: 1,
            ease: Power4.easeOut
          })
        }
      });
    });

    ssmLogo.addEventListener('mouseup', (e) => {
      ssmLogoSVG.forEach((svg) => {
        if(svg.hasAttribute('data-animate')) {
          timeline1.to(ssmLogoSVG1, .25, {
            left: `53%`,
            top: `50%`,
            opacity: 0,
            ease: Power2.easeOut
          })
          
          timeline2.to(ssmLogoSVG2, .25, {
            left: `53%`,
            top: `50%`,
            opacity: 0,
            ease: Power4.easeOut
          })
          
          timeline3.to(ssmLogoSVG3, .25, {
            left: `53%`,
            top: `50%`,
            opacity: 0,
            ease: Power3.easeOut
          })
          
          timeline4.to(ssmLogoSVG4, .25, {
            left: `53%`,
            top: `50%`,
            opacity: 0,
            ease: Power2.easeOut
          })
        }
      });
    });
  }

  superMassiveForm = () => {
    const slideout = qs('.ssm-slideout');
    const slideoutToggle = qs('.ssm-controls--menu');
    const ssmLogoWrapper = qs('.ssm-logo--wrapper');

    if(slideout && slideoutToggle) {
      slideoutToggle.addEventListener('click', (e) => {
        const isActive = (qs('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
        slideoutToggle.setAttribute('data-active', `${isActive}`);
        slideout.setAttribute('data-active', `${isActive}`);
        ssmLogoWrapper.setAttribute('data-active', `${isActive}`);
      });
    }
  }
}

new StudioSupermassive();