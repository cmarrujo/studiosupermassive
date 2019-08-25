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
    this.superMassiveMenu();
    this.superMassiveForm();
    this.superMassiveAction();
  }

  superMassiveLock = (link) => {
    const detailsWrapper = qs('.ssm-slideout--content_details-wrapper');
    const positionMarkers = qsa('.ssm-slideout--position_marker');

    if (link && link.hasAttribute('data-section')) {
      const section = link.getAttribute('data-section');
      const currentPosition = qs(`.ssm-slideout--position_marker[data-section='${section}']`);

      positionMarkers.forEach((marker) => {
        marker.setAttribute('data-current', 'false');  
      });
      currentPosition.setAttribute('data-current', 'true');

      if (detailsWrapper) {
        detailsWrapper.setAttribute('data-section', section);
      }
    }
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

  superMassiveMenu = () => {
    const menuContent = qs('.ssm-slideout--content');
    const menuControlBack = qs('.ssm-controls--back');
    const menuLinks = qsa('.ssm-slideout--navigation--menu_link');
    const hiddenElements = qsa('[aria-hidden]');
    
    if (menuLinks.length && menuContent && hiddenElements.length) {
      menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          if (menuContent.hasAttribute('data-active')) {
            menuContent.setAttribute('data-active', 'true');
            this.superMassiveLock(e.target);
          }
         
          if (menuControlBack.hasAttribute('data-active')) {
            menuControlBack.setAttribute('data-active', 'true');
          }
          
          hiddenElements.forEach((el) => {
            if (el.hasAttribute('aria-hidden')) {
              el.setAttribute('aria-hidden', 'true');
            }
          });          
        });
      })
    }

    if(menuControlBack) {
      const menuContent = qs('.ssm-slideout--content');
      const hiddenElements = qsa('[aria-hidden]');

      menuControlBack.addEventListener('click', (e) => {
        if (menuContent && menuContent.getAttribute('data-active') === 'true') {
          menuContent.setAttribute('data-active', 'false');

          if (hiddenElements.length) {
            hiddenElements.forEach((el) => {
              if (el.hasAttribute('aria-hidden')) {
                el.setAttribute('aria-hidden', 'false');
              }
            });
          }
        }
      });
    }
  }

  superMassiveWindow = () => {
    return window.innerWidth;;
  }

  superMassiveAction = () => {
    const actionButton = qs('.ssm-action--button');
    const navigation = qs('.ssm-slideout--navigation');
    const mission = qs('.ssm-slideout--mission');
    const content = qs('.ssm-slideout--content');

    actionButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click');
      if(navigation && mission) {
        navigation.setAttribute('data-active', 'true');
        navigation.setAttribute('aria-hidden', 'true');
        mission.setAttribute('data-active', 'true');
        content.setAttribute('data-disabled', 'true');
      }
    });
  }

  superMassiveForm = () => {
    const slideout = qs('.ssm-slideout');
    const slideoutToggle = qs('.ssm-controls--menu');
    const ssmLogoWrapper = qs('.ssm-logo');
    const hiddenElements = qsa('[aria-hidden]');

    if(slideout && slideoutToggle && hiddenElements.length) {
      slideoutToggle.addEventListener('click', (e) => {
        const isActive = (qs('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
        const menuContentBack = qs('.ssm-controls--back');
        const menuContent = qs('.ssm-slideout--content');
        const plugins = [ CSSPlugin, AttrPlugin ];
        const timeline = new TimelineLite();

        const positionMarkers = qsa('.ssm-slideout--position_marker');

        const mission = qs('.ssm-slideout--mission');
        mission.setAttribute('data-active', `${!isActive}`);

        positionMarkers.forEach((marker) => {
          marker.setAttribute('data-current', 'false');  
        });
        positionMarkers[0].setAttribute('data-current', 'true');

        slideoutToggle.setAttribute('data-active', `${isActive}`);
        slideout.setAttribute('data-active', `${isActive}`);

        const innerWidth = this.superMassiveWindow();

        if (innerWidth >= 1440) {
          if (isActive === 'false') {
            menuContentBack.setAttribute('data-active', `false`);
            menuContent.setAttribute('data-active', `false`);
  
            timeline.to(slideout, .85, {
              ease: Power4.easeOut,
              left: '100%',
            });

            timeline.to(ssmLogoWrapper, .25, {
              ease: Power4.easeOut,
              left: '50%',
            }, '-=1.1')
          } else {
            timeline.to(slideout, .85, {
              ease: Power4.easeOut,
              left: '50%',
            });

            timeline.to(ssmLogoWrapper, .25, {
              ease: Power4.easeOut,
              left: '15%',
            }, '-=1.1')
          }
        } else if(innerWidth >= 1024) {
          if (isActive === 'false') {
            menuContentBack.setAttribute('data-active', `false`);
            menuContent.setAttribute('data-active', `false`);
  
            timeline.to(slideout, .85, {
              ease: Power4.easeOut,
              left: '100%',
            });

            timeline.to(ssmLogoWrapper, .25, {
              ease: Power4.easeOut,
              left: '50%',
            }, '-=1.1')
          } else {
            timeline.to(slideout, .85, {
              ease: Power4.easeOut,
              left: '30%',
            });

            timeline.to(ssmLogoWrapper, .25, {
              ease: Power4.easeOut,
              left: '-4%',
            }, '-=1.1')
          }
        } else if (innerWidth >= 320 && innerWidth < 1024) {
          if (isActive === 'false') {
            menuContentBack.setAttribute('data-active', `false`);
            menuContent.setAttribute('data-active', `false`);
  
            timeline.to(slideout, 1, {
              ease: Power4.easeOut,
              bottom: '-100%',
            })
          } else {
            timeline.to(slideout, 1, {
              ease: Power4.easeOut,
              bottom: '0',
            })
          }
        }

        hiddenElements.forEach((el) => {
          if (el.hasAttribute('aria-hidden')) {
            el.setAttribute('aria-hidden', `${!isActive}`);
          }
        });
      });
    }
  }
}

new StudioSupermassive();
