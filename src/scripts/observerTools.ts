import ObserverTools, { ActionOnView, TypedAnimationTimeline, TypedViewTimeline, TypedScrollTimeline } from './modules/observerTools.src.js'

let stepsTimeline = new TypedViewTimeline({
  subject: '.m-steps',
})
let firstStyledSectionTimeline = new TypedViewTimeline({
  subject: '#first-styled-section',
})
let secondStyledSectionTimeline = new TypedViewTimeline({
  subject: '#second-styled-section',
})
let thirdStyledSectionTimeline = new TypedViewTimeline({
  subject: '#tried-styled-section',
})

new ObserverTools(
  { repeatObserve: false, isIntersectedClass: 'is-intersecting' },

  // ? Steps section
  new TypedAnimationTimeline({
    selectors: '.is-step-1',

    properties: {
      transform: ['translateX(-20vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: stepsTimeline,
      timeRange: 'cover 0% 50%',
    },

    breakpoints: {
      768: { disable: true, },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '.is-step-2',

    properties: {
      transform: ['translateX(-27vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: stepsTimeline,
      timeRange: 'cover 0% 50%',
    },

    breakpoints: {
      768: { disable: true, },
    }
  }),
  new TypedAnimationTimeline({
    selectors: '.is-step-3',

    properties: {
      transform: ['translateX(-33vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: stepsTimeline,
      timeRange: 'cover 0% 50%',
    },

    breakpoints: {
      768: { disable: true, },
    }
  }),

  // ? First section
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .title',

    properties: {
      transform: ['translateX(10vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .text',

    properties: {
      transform: ['translateX(20vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .m-button',

    properties: {
      transform: ['translateX(25vw)', 'translateY(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
  new TypedAnimationTimeline({
    selectors: '#first-styled-section .decor-image',

    properties: {
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: firstStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),

  // ? Second section
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

  // ? Tried section
  new TypedAnimationTimeline({
    selectors: '#tried-styled-section .title',

    properties: {
      transform: ['translateX(20vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
  new TypedAnimationTimeline({
    selectors: '#tried-styled-section .text',

    properties: {
      transform: ['translateX(25vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
  new TypedAnimationTimeline({
    selectors: '#tried-styled-section .m-button',

    properties: {
      transform: ['translateX(30vw)', 'translateX(0px)'],
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
  new TypedAnimationTimeline({
    selectors: '#tried-styled-section .decor-image',

    properties: {
      opacity: ['0.2', '1'],
    },

    settings: {
      timeline: thirdStyledSectionTimeline,
      timeRange: 'cover 0% 40%',
    },
  }),
)