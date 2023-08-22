import { elementIsExistWithLog, sleep } from "../general.js";
export class Ajar {
  constructor(args) {
    this.deleteButtonAfterOpening = false;
    this.defaultHeight = args.defaultHeight;
    this.deleteButtonAfterOpening = args.deleteButtonAfterOpening;
  }
}
export default class Spoiler {
  constructor(args) {
    this.maxWorkWidth = 99999999;
    this.spoilerClass = "spoiler";
    this.buttonClass = `${this.spoilerClass}-button`;
    this.contentClass = `${this.spoilerClass}-content`;
    this.contentWrapperClass = `${this.contentClass}-wrapper`;
    this.animationTogglingClass = "_slide_";
    this.buttonActiveClass = "active";
    this.contentActiveClass = "active";
    this.toggleSpoilerStateHandler = function(event) {
      this.toggleSpoilerState(event);
    }.bind(this);
    this.enableAjarSpoilerStateHandler = function(e) {
      this.toggleAjarSpoiler(e, this.ajar, this.getActiveSpoilerWrapper(e));
    }.bind(this);
    var _a, _b, _c;
    if (!elementIsExistWithLog("Spoiler", args.wrappersSelector)) {
      return;
    } else if (args.maxWorkWidth < 0 || args.animationDuration < 0) {
      console.log("[Spoiler] maxWorkWidth < 0 or animationDuration < 0!");
    }
    this.buttons = document.querySelectorAll(
      `${args.wrappersSelector} .${this.buttonClass}`
    );
    this.contentElements = document.querySelectorAll(
      `${args.wrappersSelector} .${this.contentClass}`
    );
    this.contentWrapperElements = document.querySelectorAll(
      `${args.wrappersSelector} .${this.contentClass} .${this.contentWrapperClass}`
    );
    this.buttonActiveClass = (_a = args.buttonActiveClass) != null ? _a : this.buttonActiveClass;
    this.contentActiveClass = (_b = args.contentActiveClass) != null ? _b : this.contentActiveClass;
    this.maxWorkWidth = (_c = args.maxWorkWidth) != null ? _c : this.maxWorkWidth;
    this.animationDuration = args.animationDuration;
    if (args.ajar) {
      this.ajar = args.ajar;
      this.setAjarSpoilers();
      window.addEventListener(`resize`, this.setAjarSpoilers.bind(this));
    } else {
      this.setSpoilers();
      window.addEventListener(`resize`, this.setSpoilers.bind(this));
    }
  }
  setSpoilers() {
    for (let i = 0; i < this.contentElements.length; i++) {
      if (window.innerWidth <= this.maxWorkWidth) {
        this.contentElements[i].style.display = "grid";
        this.contentElements[i].style.transitionProperty = "grid-template-rows";
        this.contentElements[i].style.transitionDuration = `${this.animationDuration}ms`;
        this.contentElements[i].style.transitionTimingFunction = "ease";
        this.contentWrapperElements[i].style.overflow = "hidden";
        this.buttons[i].style.cursor = "";
        this.buttons[i].addEventListener("click", this.toggleSpoilerStateHandler);
        if (this.isSpoilerContentActive(this.contentElements[i])) {
          this.spoilerDown(this.contentElements[i], this.animationDuration);
        } else {
          this.spoilerUp(this.contentElements[i], this.animationDuration);
          this.toggleSpoilerContentNodesVisibility(false, this.contentWrapperElements[i]);
        }
      } else {
        this.contentElements[i].style.display = "";
        this.contentElements[i].style.gridTemplateRows = "";
        this.contentElements[i].style.transitionProperty = "";
        this.contentElements[i].style.transitionDuration = ``;
        this.contentElements[i].style.transitionTimingFunction = "";
        this.contentElements[i].style.pointerEvents = "";
        this.contentWrapperElements[i].style.overflow = "";
        this.buttons[i].style.cursor = "default";
        this.buttons[i].removeEventListener("click", this.toggleSpoilerStateHandler);
        this.toggleSpoilerContentNodesVisibility(true, this.contentWrapperElements[i]);
      }
    }
  }
  toggleSpoilerState(event) {
    let spoilerWrapper = this.getActiveSpoilerWrapper(event);
    let targetSpoilerButton = event.currentTarget;
    let spoilerContainer = spoilerWrapper.querySelector(`.${this.contentClass}`);
    if (this.canToggleSpoiler(spoilerContainer) == false)
      return;
    this.toggleSpoiler(spoilerContainer, this.animationDuration);
    targetSpoilerButton.classList.toggle(this.contentActiveClass);
    spoilerContainer.classList.toggle(this.contentActiveClass);
  }
  toggleSpoiler(spoilerContainer, duration) {
    if (spoilerContainer.style.gridTemplateRows == "0fr") {
      this.spoilerDown(spoilerContainer, duration);
    } else {
      this.spoilerUp(spoilerContainer, duration);
    }
  }
  canToggleSpoiler(spoilerContainer) {
    if (spoilerContainer.classList.contains(this.animationTogglingClass)) {
      return false;
    }
    spoilerContainer.classList.add(this.animationTogglingClass);
    return true;
  }
  spoilerUp(spoilerContainer, duration) {
    spoilerContainer.style.gridTemplateRows = "0fr";
    spoilerContainer.style.pointerEvents = "none";
    window.setTimeout(() => {
      spoilerContainer.classList.remove(this.animationTogglingClass);
      this.toggleSpoilerContentNodesVisibility(
        false,
        spoilerContainer.querySelector(`.${this.contentWrapperClass}`)
      );
    }, duration);
  }
  spoilerDown(spoilerContainer, duration) {
    spoilerContainer.style.gridTemplateRows = "1fr";
    spoilerContainer.style.pointerEvents = "all";
    this.toggleSpoilerContentNodesVisibility(
      true,
      spoilerContainer.querySelector(`.${this.contentWrapperClass}`)
    );
    window.setTimeout(() => {
      spoilerContainer.classList.remove(this.animationTogglingClass);
    }, duration);
  }
  toggleSpoilerContentNodesVisibility(toggleTo, spoilerContentWrapper) {
    let nodes = spoilerContentWrapper.children;
    if (toggleTo) {
      for (let node of nodes) {
        node.style.visibility = "";
      }
    } else {
      for (let node of nodes) {
        node.style.visibility = "hidden";
      }
    }
  }
  setAjarSpoilers() {
    for (let i = 0; i < this.contentElements.length; i++) {
      if (window.innerWidth <= this.maxWorkWidth) {
        this.toggleAjarFunctionality(true, this.ajar);
      } else {
        this.toggleAjarFunctionality(false, this.ajar);
      }
    }
  }
  async toggleAjarSpoiler(event, ajarParams, spoilerWrapper) {
    let targetSpoilerButton = spoilerWrapper.querySelector(`.${this.buttonClass}`);
    let spoilerContainer = spoilerWrapper.querySelector(`.${this.contentClass}`);
    spoilerContainer.style.transitionProperty = "height";
    spoilerContainer.style.transitionDuration = `${this.animationDuration}ms`;
    if (this.isSpoilerContentActive(spoilerContainer) == false) {
      spoilerContainer.style.height = `${spoilerContainer.scrollHeight - 1}px`;
      await sleep(this.animationDuration);
      spoilerContainer.style.height = "";
      spoilerContainer.classList.add(this.contentActiveClass);
      if (ajarParams.deleteButtonAfterOpening && targetSpoilerButton) {
        targetSpoilerButton.remove();
      }
    } else {
      spoilerContainer.style.overflow = "hidden";
      spoilerContainer.style.height = `${spoilerContainer.clientHeight}px`;
      await sleep(10);
      spoilerContainer.style.height = ajarParams.defaultHeight;
      await sleep(this.animationDuration);
      spoilerContainer.classList.remove(this.contentActiveClass);
    }
  }
  toggleAjarFunctionality(toggleTo, ajarParams) {
    if (toggleTo) {
      for (let i = 0; i < this.contentElements.length; i++) {
        if (this.isSpoilerContentActive(this.contentElements[i]) == false) {
          this.contentElements[i].style.overflow = "hidden";
          this.contentElements[i].style.height = ajarParams.defaultHeight;
          this.buttons[i].addEventListener("click", this.enableAjarSpoilerStateHandler, false);
        }
      }
    } else {
      for (let i = 0; i < this.contentElements.length; i++) {
        this.contentElements[i].style.overflow = "";
        this.contentElements[i].style.height = "";
        this.buttons[i].removeEventListener("click", this.enableAjarSpoilerStateHandler, false);
      }
    }
  }
  getActiveSpoilerWrapper(buttonEvent) {
    let button = buttonEvent.currentTarget;
    return button.parentElement;
  }
  isSpoilerContentActive(spoilerContentElement) {
    if (spoilerContentElement.classList.contains(this.contentActiveClass)) {
      return true;
    } else {
      return false;
    }
  }
}
