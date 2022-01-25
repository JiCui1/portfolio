"use strict";

const loadScreen = document.querySelector(".loading");

loadTimeline = gsap.timeline();

loadScreen.opacity = 0;
document.body.style.overflowY = "hidden";

loadTimeline.to(loadScreen, {
  opacity: 1,
  duration: 0.5
});

loadTimeline.to(loadScreen, {
  opacity: 0,
  delay: 1.5,
  duration: 0.5,
  onComplete: function onComplete() {
    setTimeout(function () {
      document.body.style.overflowY = "scroll";
      loadScreen.style.opacity = 0;
      loadScreen.style.display = "none";
    }, 50);
  }
});