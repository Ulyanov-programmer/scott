import { elementsIsExist, sleep } from "../general.js";
import "../scroll-timeline.js";
export default class ObserverTools {
  constructor(arg, ...elements) {
    var _a, _b;
    ObserverTools.repeatObserve = (_a = arg.repeatObserve) != null ? _a : false;
    ObserverTools.isIntersectedClass = (_b = arg.isIntersectedClass) != null ? _b : "is-intersecting";
    if (elements.length <= 0) {
      console.error("[ObserverTools] No one ActionOnView or AnimationTimeline have been created.");
      return;
    }
  }
}
export class ActionOnView {
  constructor(arg) {
    var _a, _b, _c;
    if (elementsIsExist(arg.selectors) == false) {
      console.log("[ActionOnView] Element is not exist!");
    }
    this.htmlElements = document.querySelectorAll(arg.selectors);
    this.threshold = (_a = arg.threshold) != null ? _a : [0];
    this.root = arg.root;
    this.rootMargin = (_b = arg.rootMargin) != null ? _b : "0px 0px 0px 0px";
    this.timeoutBeforeStart = (_c = arg.timeoutBeforeStart) != null ? _c : 0;
    this.breakpoints = arg.breakpoints;
    this.defaultFunctionOnView = arg.functionOnView;
    this.currentFunctionOnView = arg.functionOnView;
    this.createIntersectionObserver();
    this.applyBreakpoints();
    window.addEventListener("resize", this.applyBreakpoints.bind(this));
  }
  applyBreakpoints() {
    var _a;
    let currentBreakpointWidth = getNearestMaxBreakpointOrInfinity(this.breakpoints);
    if (currentBreakpointWidth == this.currentActiveBreakpointId)
      return;
    if (currentBreakpointWidth != Infinity) {
      this.currentActiveBreakpointId = currentBreakpointWidth;
      let activeBreakpoint = this.breakpoints[currentBreakpointWidth];
      for (let htmlElement of this.htmlElements) {
        if (activeBreakpoint.unobserve) {
          this.observer.unobserve(htmlElement);
        } else {
          this.observer.observe(htmlElement);
        }
        htmlElement.setAttribute(
          "data-timeout",
          (_a = activeBreakpoint.timeoutBeforeStart.toString()) != null ? _a : "0"
        );
        if (this.currentFunctionOnView != activeBreakpoint.functionOnView) {
          this.currentFunctionOnView = activeBreakpoint.functionOnView;
          if (this.currentFunctionOnView)
            this.currentFunctionOnView(htmlElement);
        }
      }
    } else {
      this.currentActiveBreakpointId = Infinity;
      for (let htmlElement of this.htmlElements) {
        htmlElement.setAttribute("data-timeout", this.timeoutBeforeStart.toString());
        htmlElement.setAttribute("data-threshold", this.threshold.toString());
        this.observer.observe(htmlElement);
        if (this.currentFunctionOnView != this.defaultFunctionOnView) {
          this.currentFunctionOnView = this.defaultFunctionOnView;
          if (this.currentFunctionOnView)
            this.currentFunctionOnView(htmlElement);
        }
      }
    }
  }
  createIntersectionObserver() {
    let observerFunction = async function(entries) {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          await sleep(parseInt(entry.target.dataset.timeout));
          entry.target.classList.add(ObserverTools.isIntersectedClass);
          if (this.currentFunctionOnView) {
            this.currentFunctionOnView(entry);
          }
        } else if (entry.isIntersecting == false && ObserverTools.repeatObserve == false && entry.target.classList.contains(ObserverTools.isIntersectedClass)) {
          this.observer.unobserve(entry.target);
        }
      }
    };
    this.observer = new IntersectionObserver(
      observerFunction.bind(this),
      {
        threshold: this.threshold,
        root: this.root,
        rootMargin: this.rootMargin
      }
    );
    for (let htmlElement of this.htmlElements) {
      this.observer.observe(htmlElement);
    }
  }
}
export class TypedScrollTimeline {
  constructor(arg) {
    var _a, _b;
    this.source = (_a = document.querySelector(arg.source)) != null ? _a : document.documentElement;
    this.axis = (_b = arg.axis) != null ? _b : "block";
  }
}
export class TypedViewTimeline {
  constructor(arg) {
    var _a;
    this.subject = document.querySelector(arg.subject);
    this.axis = (_a = arg.axis) != null ? _a : "block";
    this.startOffset = arg.startOffset;
    this.endOffset = arg.endOffset;
  }
}
export class TypedAnimationTimeline {
  constructor(arg) {
    if (!elementsIsExist(arg.selectors)) {
      console.log("[AnimationTimeline] No one element is exist!");
      return;
    }
    this.animatedElements = document.querySelectorAll(arg.selectors);
    this.properties = arg.properties;
    this.settings = arg.settings;
    this.animations = [];
    this.breakpoints = arg.breakpoints;
    this.setDefaultSettingsIfEmpty(this.settings);
    this.applyBreakpoints();
    window.addEventListener("resize", this.applyBreakpoints.bind(this));
  }
  setDefaultSettingsIfEmpty(settings) {
    var _a, _b;
    if (!settings)
      return;
    settings.fill = (_a = settings.fill) != null ? _a : "forwards";
    settings.timeRange = (_b = settings.timeRange) != null ? _b : "cover 0% 100%";
  }
  applyBreakpoints() {
    let currentBreakpointWidth = getNearestMaxBreakpointOrInfinity(this.breakpoints).toString();
    if (currentBreakpointWidth == this.currentActiveBreakpointId)
      return;
    if (currentBreakpointWidth != "Infinity") {
      this.currentActiveBreakpointId = currentBreakpointWidth;
      if (this.breakpoints[currentBreakpointWidth].disable) {
        this.cancelAnimationsNotCurrentBreakpoint();
      } else {
        this.animateElements(
          this.breakpoints[currentBreakpointWidth].properties,
          this.breakpoints[currentBreakpointWidth].settings,
          currentBreakpointWidth
        );
      }
    } else {
      this.currentActiveBreakpointId = "Infinity";
      this.animateElements(this.properties, this.settings, this.currentActiveBreakpointId);
    }
  }
  createTimeline(typedTimeline) {
    let timeline;
    if (typedTimeline instanceof TypedViewTimeline) {
      timeline = new ViewTimeline({
        subject: typedTimeline.subject,
        axis: typedTimeline.axis,
        startOffset: typedTimeline.startOffset,
        endOffset: typedTimeline.endOffset
      });
    } else if (typedTimeline instanceof TypedScrollTimeline) {
      timeline = new ScrollTimeline({
        source: typedTimeline.source,
        axis: typedTimeline.axis
      });
    }
    return timeline;
  }
  animateElements(properties, settings, animationId) {
    var _a;
    let assignedSettings = Object.assign({}, this.settings, settings);
    assignedSettings.id = animationId;
    for (let animatedHtml of this.animatedElements) {
      assignedSettings.timeline = this.createTimeline(
        (_a = settings == null ? void 0 : settings.timeline) != null ? _a : this.settings.timeline
      );
      this.animations.push(
        animatedHtml.animate(
          properties != null ? properties : this.properties,
          assignedSettings != null ? assignedSettings : this.settings
        )
      );
    }
  }
  cancelAnimationsNotCurrentBreakpoint() {
    for (let i = this.animations.length - 1; i >= 0; i--) {
      if (this.animations[i].id != this.currentActiveBreakpointId) {
        this.animations[i].cancel();
        this.animations.splice(i, 1);
      }
    }
  }
}
function getNearestMaxBreakpointOrInfinity(breakpoints) {
  if (!breakpoints)
    return Infinity;
  let queriesActiveWidths = Object.keys(breakpoints).map(Number);
  let windowWidth = window.outerWidth;
  let nearestMaxBreakpointWidth = Math.min(...queriesActiveWidths.filter((num) => num >= windowWidth));
  if (windowWidth > nearestMaxBreakpointWidth || nearestMaxBreakpointWidth == Infinity) {
    return Infinity;
  }
  return nearestMaxBreakpointWidth;
}
