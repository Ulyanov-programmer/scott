import { elementsIsExist } from "../general.js";
import "../scroll-timeline.js";
const _AnimateByScroll = class {
  constructor(arg, ...elements) {
    _AnimateByScroll.repeatingAnimations = arg.repeatingAnimations;
    if (elements.length <= 0) {
      console.error("[AnimateByScroll] No one AnimationGroup or AnimationTimeline have been created.");
      return;
    }
    if (arg.activeAnimationClass) {
      _AnimateByScroll.activeAnimationClass = arg.activeAnimationClass;
    }
  }
};
let AnimateByScroll = _AnimateByScroll;
AnimateByScroll.repeatingAnimations = false;
AnimateByScroll.activeAnimationClass = "active";
export {
  AnimateByScroll as default
};
export class AnimationGroup {
  constructor(arg, ...mediaQueries) {
    if (elementsIsExist(arg.selectors) == false) {
      console.log("[AnimationGroup] Element is not exist!");
    }
    this.htmlElements = document.querySelectorAll(arg.selectors);
    for (let htmlElement of this.htmlElements) {
      htmlElement.setAttribute("data-timeout", arg.timeoutBeforeStart.toString());
      htmlElement.setAttribute("data-view-start-coeff", arg.animateStartCoeff.toString());
    }
    this.defTimeoutBeforeStart = arg.timeoutBeforeStart;
    this.defAnimStartCoeffs = arg.animateStartCoeff;
    this.mediaQueries = mediaQueries;
    this.setMediaProperties();
    this.createIntersectionObserver();
    window.addEventListener("resize", () => {
      this.setMediaProperties();
    }, false);
  }
  setMediaProperties() {
    if (this.mediaQueries.length <= 0)
      return;
    for (let mediaQuery of this.mediaQueries) {
      if (window.outerWidth <= mediaQuery.activationWidth) {
        for (let htmlElement of this.htmlElements) {
          htmlElement.setAttribute("data-timeout", mediaQuery.timeoutBeforeStart.toString());
          htmlElement.setAttribute("data-view-start-coeff", mediaQuery.defAnimStartCoeffs.toString());
        }
      } else {
        for (let htmlElement of this.htmlElements) {
          htmlElement.setAttribute("data-timeout", this.defTimeoutBeforeStart.toString());
          htmlElement.setAttribute("data-view-start-coeff", this.defAnimStartCoeffs.toString());
        }
      }
    }
  }
  createIntersectionObserver() {
    let observerOptions = { threshold: this.defAnimStartCoeffs };
    let observerFunction = function(entries) {
      for (let entry of entries) {
        let animateHtml = entry.target;
        if (entry.isIntersecting && !animateHtml.classList.contains(AnimateByScroll.activeAnimationClass)) {
          setTimeout(() => {
            animateHtml.classList.add(AnimateByScroll.activeAnimationClass);
          }, parseInt(animateHtml.dataset.timeout));
          if (AnimateByScroll.repeatingAnimations == false) {
            observer.unobserve(entry.target);
          }
        } else if (entry.isIntersecting == false && AnimateByScroll.repeatingAnimations) {
          animateHtml.classList.remove(AnimateByScroll.activeAnimationClass);
        }
      }
    };
    const observer = new IntersectionObserver(observerFunction, observerOptions);
    for (let htmlElement of this.htmlElements) {
      observer.observe(htmlElement);
    }
  }
}
export class AnimationMediaQuery {
  constructor(arg) {
    this.activationWidth = arg.activationWidth;
    this.defAnimStartCoeffs = arg.defAnimStartCoeffs;
    this.timeoutBeforeStart = arg.timeoutBeforeStart;
  }
}
export class AnimationTimelineMediaQuery {
  constructor(arg) {
    this.activationWidth = arg.activationWidth;
    this.properties = arg.properties;
    this.settings = arg.settings;
  }
}
export class AnimationTimeline {
  constructor(arg, ...mediaQueries) {
    this.animatedElements = document.querySelectorAll(arg.selectors);
    this.animatedProperties = arg.animatedProperties;
    this.animateSettings = arg.animateSettings;
    this.setDefaultAnimateSettingsIfNull(arg.animateSettings);
    this.mediaQueries = mediaQueries;
    this.animateElements(
      this.animatedElements,
      this.animatedProperties,
      this.animateSettings
    );
    this.setMediaQueries();
    if (this.animatedElements.length > 0) {
      window.addEventListener("resize", () => {
        this.setMediaQueries();
      }, false);
    }
  }
  setDefaultAnimateSettingsIfNull(animateSettings) {
    if (!animateSettings.fill) {
      animateSettings.fill = "forwards";
    }
  }
  setMediaQueries() {
    if (this.mediaQueries.length <= 0)
      return;
    for (let mediaQuery of this.mediaQueries) {
      if (window.outerWidth <= mediaQuery.activationWidth) {
        this.animateElements(
          this.animatedElements,
          mediaQuery.properties,
          mediaQuery.settings
        );
      } else {
        this.animateElements(
          this.animatedElements,
          this.animatedProperties,
          this.animateSettings
        );
      }
    }
  }
  animateElements(animateElements, animatedProperties, animateSettings) {
    for (let animatedHtml of animateElements) {
      animatedHtml.animate(
        animatedProperties,
        {
          duration: animateSettings.duration,
          fill: animateSettings.fill,
          timeline: animateSettings.timeline,
          timeRange: animateSettings.timeRange
        }
      );
    }
  }
}
