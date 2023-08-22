new Typed("#h1-typed", {
  strings: [],
  stringsElement: "#h1-text",
  typeSpeed: 30,
  startDelay: 0,
  backSpeed: 130,
  showCursor: false,
  onComplete: async (self) => {
    setTimeout(() => {
      let line = document.querySelector(".m-hero .line");
      let text = document.querySelector(".m-hero .text");
      let button = document.querySelector(".m-hero .get-button");
      let arrowTablets = document.querySelector(".m-hero .arrow_tablets");
      let arrow = document.querySelector(".m-hero .text .arrow");
      line.classList.add("active");
      text.classList.add("active");
      button.classList.add("active");
      arrowTablets.classList.add("active");
      arrow.classList.add("active");
    }, 500);
  }
});
