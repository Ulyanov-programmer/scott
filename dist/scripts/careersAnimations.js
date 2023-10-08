import ObserverTools, { TypedAnimationTimeline, TypedViewTimeline } from "./modules/observerTools.src.js";
let argsTimeline = new TypedViewTimeline({
  subject: "#arguments"
});
let argsMainTimeline = new TypedViewTimeline({
  subject: "#arguments .main"
});
new ObserverTools(
  { repeatObserve: false, isIntersectedClass: "is-intersecting" },
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
