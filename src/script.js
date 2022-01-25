const caseScroll = document.querySelector(".case-text-container");
const tapHand = document.getElementById("tap-hand");
const phoneHand = document.getElementById("phone-hand");
const bird = document.getElementById("bird");
const heart = document.getElementById("heart");
const head = document.getElementById("head");
const landingContainer = document.querySelector(".landing-hero");
const workArray = document.querySelectorAll(".work");
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

//hero img animation
const initAnim = () => {
  //check if on design or dev
  if (tapHand) {
    gsap.to(bird, {
      rotate: 15,
      duration: 1,
      ease: "Linear,easeNone",
      yoyo: true,
      repeat: -1,
    });
    designAnim = gsap.timeline();
    designAnim.to(tapHand, {
      x: -130,
      y: -100,
      duration: 1,
    });
    designAnim.to(tapHand, {
      rotation: -10,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    });
    designAnim.to(tapHand, {
      x: 0,
      y: 0,
      duration: 1,
    });
    designAnim.to(head, {
      scale: 0.8,
      duration: 2.5,
      ease: "Elastic.easeOut",
      delay: -0.5,
    });
  }
};

initAnim();

const heroClickAnim = () => {
  if (tapHand) {
    heartAnim = gsap.timeline();
    heartAnim.fromTo(
      heart,
      {
        scale: 0,
        x: 0,
        y: 0,
      },
      {
        scale: 0.5,
        x: 120,
        y: Math.floor(Math.random() * 200),
        duration: 0.2,
      }
    );
  }
};

landingContainer.onclick = heroClickAnim;

workArray.forEach((work) => {
  work.onmouseenter = function () {
    imgCon = work.querySelector(".image-container");
    gsap.to(imgCon, {
      height: "20rem",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
  work.onmouseleave = function () {
    imgCon = work.querySelector(".image-container");
    gsap.to(imgCon, {
      height: "0rem",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
});

//case study side scroll on window scroll
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
