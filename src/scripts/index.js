import { qs, qsa, $on, $delegate } from './utils';
import { TimelineLite, CSSPlugin, AttrPlugin, Power1 }  from "gsap/all";
import '../stylesheets/style.scss';
import '../scripts/hammer.js';
import { Power0 } from 'gsap';
import '../scripts/touch-enable.js';

class StudioSupermassive {
  constructor() {
    const preloader = qs('.ssm--preloader');
    const progress = qs('.ssm--preloader_progress');
    let counter = 5;
    const svgLogoPaths = qsa('.ssm-logo--svg_path');

    svgLogoPaths.forEach((path) => {
      path.addEventListener('mouseenter', (evt) => {
        const timeline = new TimelineLite();
        timeline.to(path, 1.25, {
          scale: 1.2,
          transformOrigin: '50% 50%',
          ease: Power4.easeOut,
        });
      });
      
      path.addEventListener('mouseleave', (evt) => {
        const timeline = new TimelineLite();
        timeline.to(path, 1.5, {
          scale: 1,
          transformOrigin: '50% 50%',
          ease: Power4.easeOut,
        });
      });
    });

    const timeline = new TimelineLite();

    const interval = setInterval(() => {
      if(counter >= 100) {
        clearInterval(interval);

        timeline.to(preloader, 1.25, {
          delay: .50,
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: this.preloadIt()
        });
      } else {
        counter++;
        progress.innerHTML = `${counter}%`;
      }
    }, 50); 
  };

  preloadIt() {
    setTimeout(() => {
      this.superMassivePreloader();
    }, 1000)
  }

  superMassivePreloader = () => {
    this.superMassiveIntro();
    // this.superMassiveParallax();
    // this.superMassiveGlitch();
    this.superMassiveSocial();
    this.superMassiveMenu();
    this.superMassiveForm();
    this.superMassiveAction();
    this.preloader = qs('.ssm--preloader');
    this.preloader.setAttribute('data-loaded', '');
  }

  superMassiveSocial = () => {
    const social = qsa('.ssm-action--link.social');
    const socialTakeover = qs('.ssm-social--takeover');
    social.forEach((channel, index) => {
      channel.addEventListener('mouseover', (evt) => {
        const channelName = social[index].hasAttribute('data-channel') && social[index].getAttribute('data-channel');
        socialTakeover.setAttribute('data-channel', `${channelName}`);
      });

      channel.addEventListener('mouseleave', (evt) => {
        socialTakeover.removeAttribute('data-channel',);
      });
    });
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
      onComplete: (() => {qs('.ssm-mission').setAttribute('data-enter', '')})
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
    const navigation = qs('.ssm-slideout--navigation');
    const mission = qs('.ssm-slideout--mission');
    const content = qs('.ssm-slideout--content');
    const detailsInner = qs('.ssm-slideout--content_details-inner');
    const timeline = new TimelineLite();
    const slideout = qs('.ssm-slideout');
    
    if (menuLinks.length && menuContent && hiddenElements.length) {
      menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();

          const contentDetails = qsa('.ssm-slideout--content_details-inner');
          if(contentDetails.length) {
            contentDetails.forEach((content) => {
              content.setAttribute('data-active', 'false');
            });
          }
          if(e.target.getAttribute('data-section') === 'contact') {

            if(navigation && mission && content) {
              navigation.setAttribute('aria-hidden', 'true');
              mission.setAttribute('data-active', 'true');
              mission.setAttribute('aria-hidden', 'false');
              menuControlBack.setAttribute('data-active', 'true');

              const positionMarkers = qsa('.ssm-slideout--position_marker');
              positionMarkers.forEach((marker) => {
                marker.setAttribute('data-current', 'false');  
              });
              positionMarkers[4].setAttribute('data-current', 'true');
              
              if(menuControlBack && menuContent) {
                menuControlBack.addEventListener('click', (e) => {
                  if (menuContent.getAttribute('data-active') === 'true' 
                      || (menuContent.getAttribute('data-disabled') === 'true') 
                      || (mission.getAttribute('data-active') === 'true')) 
                  {
                    menuContent.setAttribute('data-active', 'false');
                    menuContent.setAttribute('data-disabled', 'false');
                    mission.setAttribute('data-active', 'false');

                    if (hiddenElements.length) {
                      hiddenElements.forEach((el) => {
                        if (el.hasAttribute('aria-hidden')) {
                          el.setAttribute('aria-hidden', 'false');
                        }
                      });
                      menuControlBack.setAttribute('data-active', 'false');
                    }
                  }
                });
              }
            }
          } else {
            if (menuContent.hasAttribute('data-active')) {
              menuContent.setAttribute('data-active', 'true');
              menuContent.setAttribute('data-disabled', 'false');
              this.superMassiveLock(e.target);

              let curSection = qs(`.ssm-slideout--content_details.${e.target.getAttribute('data-section')}`);
              curSection = curSection.querySelector('.ssm-slideout--content_details-inner');

              curSection.setAttribute('data-active', 'true');
            }

            mission.setAttribute('data-active', 'false');
           
            if (menuControlBack.hasAttribute('data-active')) {
              menuControlBack.setAttribute('data-active', 'true');
            }
            
            hiddenElements.forEach((el) => {
              if (el.hasAttribute('aria-hidden')) {
                el.setAttribute('aria-hidden', 'true');
                
                if (el.hasAttribute('data-disabled')) {
                  el.hasAttribute('data-disabled', 'false');
                }
              }
            }); 
          }        
        });
      });
    }

    if(menuControlBack) {
      const menuContent = qs('.ssm-slideout--content');
      const hiddenElements = qsa('[aria-hidden]');

      menuControlBack.addEventListener('click', (e) => {
        if (menuContent && menuContent.getAttribute('data-active') === 'true') {
          menuContent.setAttribute('data-active', 'false');

          const contentDetails = qsa('.ssm-slideout--content_details-inner');
          if(contentDetails.length) {
            contentDetails.forEach((content) => {
              content.setAttribute('data-active', 'false');
            });
          }

          if (hiddenElements.length) {
            hiddenElements.forEach((el) => {
              if (el.hasAttribute('aria-hidden')) {
                el.setAttribute('aria-hidden', 'false');
              }
            });
          }
          menuControlBack.setAttribute('data-active', 'false');
        }
      });
    }
  }

  superMassiveWindow = () => {
    return window.innerWidth;
  }

  superMassiveAction = () => {
    const actionButton = qs('.ssm-action--button');
    const navigation = qs('.ssm-slideout--navigation');
    const mission = qs('.ssm-slideout--mission');
    const content = qs('.ssm-slideout--content');

    actionButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      if(navigation && mission) {
        navigation.setAttribute('data-active', 'true');
        navigation.setAttribute('aria-hidden', 'true');
        mission.setAttribute('data-active', 'true');
        mission.setAttribute('aria-hidden', 'false');

        const positionMarkers = qsa('.ssm-slideout--position_marker');
        positionMarkers.forEach((marker) => {
          marker.setAttribute('data-current', 'false');  
        });
        positionMarkers[4].setAttribute('data-current', 'true');

        const menuControlBack = qs('.ssm-controls--back');

        if(menuControlBack) {
          const menuContent = qs('.ssm-slideout--content');
          const hiddenElements = qsa('[aria-hidden]');

          menuControlBack.setAttribute('data-active', 'true');

          menuControlBack.addEventListener('click', (e) => {
            
            mission.setAttribute('data-active', 'false');
  
            if (hiddenElements.length) {
              hiddenElements.forEach((el) => {
                if (el.hasAttribute('aria-hidden')) {
                  el.setAttribute('aria-hidden', 'false');
                }
              });
            }
          });
        }
      }
    });
  }

  resetMenuBackControl = () => {
    const menuContentBack = qs('.ssm-controls--back');
    const menuContent = qs('.ssm-slideout--content');
    menuContentBack.setAttribute('data-active', `false`);
    menuContent.setAttribute('data-active', `false`);
  }
  
  resetPositionMarkers = () => {
    const positionMarkers = qsa('.ssm-slideout--position_marker');
    positionMarkers.forEach((marker) => {
      marker.setAttribute('data-current', 'false');  
    });
    positionMarkers[0].setAttribute('data-current', 'true');
  }

  superMassiveForm = () => {
    const slideout = qs('.ssm-slideout');
    const slideoutToggle = qs('.ssm-controls--menu');
    const ssmLogoWrapper = qs('.ssm-logo');
    const hiddenElements = qsa('[aria-hidden]');

    if(slideout && slideoutToggle && hiddenElements.length) {
      slideoutToggle.addEventListener('click', (e) => {
        const isActive = (qs('.ssm-slideout').getAttribute('data-active') === 'false') ? 'true' : 'false';
        const plugins = [ CSSPlugin, AttrPlugin ];
        const timeline = new TimelineLite();
        const social = qs('.ssm-mission');
        
        social.setAttribute('data-active', `${isActive}`);

        const mission = qs('.ssm-slideout--mission');
        mission.setAttribute('data-active', `${!isActive}`);

        const content = qs('.ssm-slideout--content');
        content.setAttribute('data-disabled', 'false');

        slideoutToggle.setAttribute('data-active', `${isActive}`);
        slideout.setAttribute('data-active', `${isActive}`);

        const innerWidth = this.superMassiveWindow();

        this.resetPositionMarkers();

        window.addEventListener('resize', (e) => {
          const innerWidth = this.superMassiveWindow();
          
          if (innerWidth >= 1920) {
            if (isActive === 'false') {
              this.resetMenuBackControl();
    
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
                left: '60%',
              });
  
              timeline.to(ssmLogoWrapper, .25, {
                ease: Power4.easeOut,
                left: '25%',
              }, '-=1.1')
            }
          } else if (innerWidth >= 1440 && innerWidth < 1920) {
            if (isActive === 'false') {
              this.resetMenuBackControl();
    
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
          } else if (innerWidth >= 1024) {
            if (isActive === 'true') {
              slideout.style.bottom = 'auto';
              slideout.style.left = '30vw';
            } else {
              slideout.style.bottom = 'auto';
              slideout.style.left = '100%';
            }
          } else if (innerWidth >= 768 && innerWidth < 1024) {
            if (isActive === 'true') {
              slideout.style.bottom = '0px';
              slideout.style.left = 'auto';
            } else {
              slideout.style.bottom = '-100%';
              slideout.style.left = 'auto';
            }
          }
        });

        if (innerWidth >= 1920) {
          if (isActive === 'false') {
            this.resetMenuBackControl();
  
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
              left: '60%',
            });

            timeline.to(ssmLogoWrapper, .25, {
              ease: Power4.easeOut,
              left: '25%',
            }, '-=1.1')
          }
        } else if (innerWidth >= 1440 && innerWidth < 1920) {
          if (isActive === 'false') {
            this.resetMenuBackControl();
  
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
            this.resetMenuBackControl();
  
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
              left: '-10%',
            }, '-=1.1')
          }
        } else if (innerWidth >= 320 && innerWidth < 1024) {
          if (isActive === 'false') {
            this.resetMenuBackControl();
  
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
