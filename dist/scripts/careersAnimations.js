import AnimateByScroll, { AnimationTimeline, AnimationTimelineMediaQuery } from "./modules/animateByScroll.src.js";
let argsTimeline = new ViewTimeline({
  subject: document.querySelector("#arguments")
});
let argsMainTimeline = new ViewTimeline({
  subject: document.querySelector("#arguments .main")
});
new AnimateByScroll(
  { repeatingAnimations: false, activeAnimationClass: "active" },
  new AnimationTimeline({
    selectors: "#arguments .title",
    animatedProperties: {
      transform: ["translateY(350%)", "translateY(0)"],
      opacity: ["0", "1"]
    },
    animateSettings: {
      timeline: argsTimeline,
      timeRange: "cover 0% 30%"
    }
  }),
  new AnimationTimeline(
    {
      selectors: "#argument-pc-left",
      animatedProperties: {
        transform: ["translateX(-15vw)", "translateX(0px)"]
      },
      animateSettings: {
        timeline: argsMainTimeline,
        timeRange: "cover 0% 30%"
      }
    },
    new AnimationTimelineMediaQuery({
      activationWidth: 1100,
      properties: {
        transform: ["translateX(0)", "translateX(0)"]
      },
      settings: {
        timeline: argsMainTimeline
      }
    })
  ),
  new AnimationTimeline(
    {
      selectors: "#argument-pc-right",
      animatedProperties: {
        transform: ["translateX(15vw)", "translateX(0px)"]
      },
      animateSettings: {
        timeline: argsMainTimeline,
        timeRange: "cover 0% 30%"
      }
    },
    new AnimationTimelineMediaQuery({
      activationWidth: 1100,
      properties: {
        transform: ["translateX(0)", "translateX(0)"]
      },
      settings: {
        timeline: argsMainTimeline
      }
    })
  ),
  new AnimationTimeline(
    {
      selectors: "#argument-pc-center",
      animatedProperties: {
        transform: ["translateY(10vw)", "translateY(0px)"]
      },
      animateSettings: {
        timeline: argsMainTimeline,
        timeRange: "cover 0% 30%"
      }
    },
    new AnimationTimelineMediaQuery({
      activationWidth: 1100,
      properties: {
        transform: ["translateY(0)", "translateY(0)"]
      },
      settings: {
        timeline: argsMainTimeline
      }
    })
  )
);
