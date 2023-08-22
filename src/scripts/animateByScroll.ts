import AnimateByScroll, { AnimationGroup, AnimationTimeline, AnimationTimelineMediaQuery } from './modules/animateByScroll.src.js'

let stepsTimeline = new ViewTimeline({
  subject: document.querySelector('.m-steps'),
})
let firstStyledSectionTimeline = new ViewTimeline({
  subject: document.querySelector('#first-styled-section'),
})
let secondStyledSectionTimeline = new ViewTimeline({
  subject: document.querySelector('#second-styled-section'),
})
let thirdStyledSectionTimeline = new ViewTimeline({
  subject: document.querySelector('#tried-styled-section'),
})

new AnimateByScroll(
  { repeatingAnimations: false, activeAnimationClass: 'active' },

  new AnimationTimeline({
    selectors: '.is-step-1',

    animatedProperties: {
      transform: ['translateX(-20vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: stepsTimeline,
      timeRange: 'cover 0% 50%',
    }
  },
    new AnimationTimelineMediaQuery({
      activationWidth: 768,
      properties: {
        transform: ['translateX(0vw)', 'translateX(0px)'],
        opacity: ['1', '1'],
      },
      settings: {
        timeline: stepsTimeline,
        timeRange: 'cover 0% 150%',
        cancel: true
      }
    })
  ),
  new AnimationTimeline({
    selectors: '.is-step-2',

    animatedProperties: {
      transform: ['translateX(-27vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: stepsTimeline,

      timeRange: 'cover 0% 50%',
    }
  },
    new AnimationTimelineMediaQuery({
      activationWidth: 768,
      properties: {
        transform: ['translateX(-0vw)', 'translateX(0px)'],
        opacity: ['1', '1'],
      },
      settings: {
        timeline: stepsTimeline,
      }
    })
  ),
  new AnimationTimeline({
    selectors: '.is-step-3',

    animatedProperties: {
      transform: ['translateX(-33vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: stepsTimeline,
      timeRange: 'cover 0% 50%',
    }
  },
    new AnimationTimelineMediaQuery({
      activationWidth: 768,
      properties: {
        transform: ['none', 'none'],
        opacity: ['1', '1'],
      },
      settings: {
        timeline: stepsTimeline,
      }
    })
  ),

  new AnimationTimeline({
    selectors: '#first-styled-section .title',

    animatedProperties: {
      transform: ['translateX(10vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#first-styled-section .text',

    animatedProperties: {
      transform: ['translateX(20vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#first-styled-section .m-button',

    animatedProperties: {
      transform: ['translateX(25vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#first-styled-section .decor-image',

    animatedProperties: {
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),

  new AnimationTimeline({
    selectors: '#second-styled-section .m-button',

    animatedProperties: {
      transform: ['translateX(-7vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#second-styled-section .title',

    animatedProperties: {
      transform: ['translateX(-13vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#second-styled-section .text',

    animatedProperties: {
      transform: ['translateX(-10vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#second-styled-section .decor-image',

    animatedProperties: {
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),

  new AnimationTimeline({
    selectors: '#tried-styled-section .title',

    animatedProperties: {
      transform: ['translateX(20vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#tried-styled-section .text',

    animatedProperties: {
      transform: ['translateX(25vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#tried-styled-section .m-button',

    animatedProperties: {
      transform: ['translateX(30vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
  new AnimationTimeline({
    selectors: '#tried-styled-section .decor-image',

    animatedProperties: {
      opacity: ['0.2', '1'],
    },

    animateSettings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    }
  }),
)