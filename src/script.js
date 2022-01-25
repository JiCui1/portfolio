const caseScroll = document.querySelector(".case-text-container");
// const loadScreen = document.querySelector(".loading");

// loadTimeline = gsap.timeline();

// loadScreen.opacity = 0;
// document.body.style.overflowY = "hidden";

// loadTimeline.to(loadScreen, {
//   opacity: 1,
//   duration: 0.5,
// });

// loadTimeline.to(loadScreen, {
//   opacity: 0,
//   delay: 1.5,
//   duration: 0.5,
//   onComplete: function () {
//     setTimeout(function () {
//       document.body.style.overflowY = "scroll";
//       loadScreen.style.opacity = 0;
//       loadScreen.style.display = "none";
//     }, 50);
//   },
// });

//case study scroll left right on window scroll
let scrollOldValue = 0;
let scrollNewValue = 0;
let scrollUp = false;
//-20rem is initial value
let scrollVal = -20;
window.onscroll = function (e) {
  scrollNewValue = window.pageYOffset;
  if (scrollOldValue < scrollNewValue) {
    scrollVal -= 0.7;
  } else if (scrollOldValue > scrollNewValue) {
    scrollVal += 0.7;
  }
  caseScroll.style.transform = `translateX(${scrollVal}rem)`;
  scrollOldValue = scrollNewValue;
};
