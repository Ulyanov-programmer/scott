import ObserverTools, { TypedAnimationTimeline, TypedViewTimeline } from "./modules/observerTools.src.js";
let styledSectionTwoTimeline = new TypedViewTimeline({
  subject: "#styled-section-2"
});
let argsTimeline = new TypedViewTimeline({
  subject: "#arguments"
});
let argsMainTimeline = new TypedViewTimeline({
  subject: "#arguments .main"
});
new ObserverTools(
  { repeatObserve: false, isIntersectedClass: "is-intersecting" },
  new TypedAnimationTimeline({
    selectors: "#styled-section-2 .title",
    properties: {
      transform: ["translateX(-20vw)", "translateX(0px)"],
      opacity: ["0.2", "1"]
    },
    settings: {
      timeline: styledSectionTwoTimeline,
      timeRange: "cover 0% 40%"
    },
    breakpoints: {
      768: { disable: true }
    }
  }),
  new TypedAnimationTimeline({
    selectors: "#styled-section-2 .text",
    properties: {
      transform: ["translateX(-27vw)", "translateX(0px)"],
      opacity: ["0.2", "1"]
    },
    settings: {
      timeline: styledSectionTwoTimeline,
      timeRange: "cover 0% 40%"
    },
    breakpoints: {
      768: { disable: true }
    }
  }),
  new TypedAnimationTimeline({
    selectors: "#arguments .title",
    properties: {
      transform: ["translateY(350%)", "translateY(0)"],
      opacity: ["0", "1"]
    },
    settings: {
      timeline: argsTimeline,
      timeRange: "cover 0% 30%"
    }
  }),
  new TypedAnimationTimeline({
    selectors: "#argument-pc-left",
    properties: {
      transform: ["translateX(-15vw)", "translateX(0px)"]
    },
    settings: {
      timeline: argsMainTimeline,
      timeRange: "cover 0% 30%"
    },
    breakpoints: {
      1100: { disable: true }
    }
  }),
  new TypedAnimationTimeline({
    selectors: "#argument-pc-right",
    properties: {
      transform: ["translateX(15vw)", "translateX(0px)"]
    },
    settings: {
      timeline: argsMainTimeline,
      timeRange: "cover 0% 30%"
    },
    breakpoints: {
      1100: { disable: true }
    }
  }),
  new TypedAnimationTimeline({
    selectors: "#argument-pc-center",
    properties: {
      transform: ["translateY(10vw)", "translateY(0px)"]
    },
    settings: {
      timeline: argsMainTimeline,
      timeRange: "cover 0% 30%"
    },
    breakpoints: {
      1100: { disable: true }
    }
  })
);
