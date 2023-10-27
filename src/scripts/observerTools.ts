import ObserverTools, { ActionOnView, TypedAnimationTimeline, TypedViewTimeline, }
  from './modules/observerTools.src.js'

let stepsTimeline = new TypedViewTimeline({ subject: '.m-steps', })

let firstStyledSectionTimeline = new TypedViewTimeline({
  subject: '#first-styled-section',
})
let secondStyledSectionTimeline = new TypedViewTimeline({
  subject: '#second-styled-section',
})
let thirdStyledSectionTimeline = new TypedViewTimeline({
  subject: '#third-styled-section',
})

new ObserverTools(
  { repeatObserve: false, isIntersectedClass: 'is-intersecting' },

  // ? Steps section
  new TypedAnimationTimeline({
    selectors: '.is-step-1',

    properties: {
      transform: [
        'translate3d(100%, -100%, 0)',
        'translate3d(50%, 0%, 0)',
        'translate3d(0, 0, 0)',
      ],
      opacity: ['0', '1', '1'],
    },

    settings: {
      timeline: stepsTimeline, timeRange: 'contain -20% 30%',
    },

    breakpoints: {
      768: { disable: true, },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '.is-step-2',

    properties: {
      transform: [
        'translate3d(-100%, -50vh, 0)',
        'translate3d(-50%, 0vh, 0)',
        'translate3d(0%, 0, 0)',
      ],
      opacity: ['0', '1', '1'],
    },

    settings: {
      timeline: stepsTimeline, timeRange: 'contain 15% 60%',
    },

    breakpoints: {
      768: { disable: true, },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '.is-step-3',

    properties: {
      transform: ['translateY(-50vh)', 'translateX(0vh)'],
      opacity: ['0', '1', '1'],
    },

    settings: {
      timeline: stepsTimeline, timeRange: 'contain 45% 85%',
    },

    breakpoints: {
      768: { disable: true, },
    }
  }),

  // ? Steps mobile
  new TypedAnimationTimeline({
    selectors: '#step-one .title',

    properties: {},

    settings: { timeline: stepsTimeline, },

    breakpoints: {
      1e5: { disable: true },
      768: {
        properties: {
          transform: ['translateY(100%)', 'translateY(0%)'],
          opacity: ['0', '1',],
        },
        settings: { timeRange: 'cover 0% 30%', }
      },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#step-one .text',

    properties: {},

    settings: { timeline: stepsTimeline, },

    breakpoints: {
      1e5: { disable: true },
      768: {
        properties: {
          transform: ['translateY(130%)', 'translateY(0%)'],
          opacity: ['0', '1',],
        },
        settings: { timeRange: 'cover 0% 30%', }
      },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#step-two .title',

    properties: {},

    settings: { timeline: stepsTimeline, },

    breakpoints: {
      1e5: { disable: true },
      768: {
        properties: {
          transform: ['translateY(100%)', 'translateY(0%)'],
          opacity: ['0', '1',],
        },
        settings: { timeRange: 'cover 15% 45%', }
      },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#step-two .text',

    properties: {},

    settings: { timeline: stepsTimeline, },

    breakpoints: {
      1e5: { disable: true },
      768: {
        properties: {
          transform: ['translateY(130%)', 'translateY(0%)'],
          opacity: ['0', '1',],
        },
        settings: { timeRange: 'cover 15% 45%', }
      },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#step-three .title',

    properties: {},

    settings: { timeline: stepsTimeline, },

    breakpoints: {
      1e5: { disable: true },
      768: {
        properties: {
          transform: ['translateX(7%)', 'translateX(0%)'],
          opacity: ['0', '1',],
        },
        settings: { timeRange: 'cover 35% 60%', }
      },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#step-three .text',

    properties: {},

    settings: { timeline: stepsTimeline, },

    breakpoints: {
      1e5: { disable: true },
      768: {
        properties: {
          transform: ['translateX(15%)', 'translateX(0%)'],
          opacity: ['0', '1',],
        },
        settings: { timeRange: 'cover 35% 60%', }
      },
    }
  }),

  // ? First styled section
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .title',

    properties: {
      transform: ['translateX(15vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 50%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .text',

    properties: {
      transform: ['translateX(10vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 50%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .m-button',

    properties: {
      transform: ['translateX(7vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 50%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .decor-image',

    properties: {
      opacity: ['0.4', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 50%',
    },
  }),

  // ? Second styled section
  new TypedAnimationTimeline({
    selectors: '#second-styled-section .m-button',

    properties: {
      transform: ['translateX(-7vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#second-styled-section .title',

    properties: {
      transform: ['translateX(-13vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#second-styled-section .text',

    properties: {
      transform: ['translateX(-10vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#second-styled-section .decor-image',

    properties: {
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: secondStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),

  // ? Tried styled section
  new TypedAnimationTimeline({
    selectors: '#third-styled-section .title',

    properties: {
      transform: ['translateX(15vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 35%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#third-styled-section .text',

    properties: {
      transform: ['translateX(10vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 35%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#third-styled-section .m-button',

    properties: {
      transform: ['translateX(7vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 35%',
    },
    breakpoints: {
      768: {
        settings: {
          timeRange: 'cover 30% 50%',
        },
      }
    }
  }),
  new TypedAnimationTimeline({
    selectors: '#third-styled-section .decor-image',

    properties: {
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 35%',
    },
  }),
)