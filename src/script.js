const caseScroll = document.querySelector(".case-text-container");
const tapHand = document.getElementById("tap-hand");
const phoneHand = document.getElementById("phone-hand");
const bird = document.getElementById("bird");
const heart = document.getElementById("heart");
const head = document.getElementById("head");
const landingContainer = document.querySelector(".landing-hero");
const workArray = document.querySelectorAll(".work");
const loadScreen = document.querySelector(".loading");
const loadingText = document.getElementById("loading-text");
const postSide = document.querySelectorAll(".post-side");
const cursor = document.querySelector(".cursor");
const cursorCir = document.querySelector(".cursor-cir");
const cursorText = document.querySelector(".cursor-text");
const aTag = document.querySelectorAll("a");
const barTextAll = document.querySelectorAll(".bar-text");

const loadingAnim = () => {
  document.body.style.overflowY = "hidden";

  loadScreen.style.opacity = 1;

  gsap.fromTo(
    loadingText,
    {
      x: 200,
    },
    {
      x: -200,
      duration: 1,
      yoyo: true,
      repeat: 2,
    }
  );

  gsap.to(loadScreen, {
    opacity: 0,
    delay: 1.5,
    duration: 0.5,
    onComplete: function () {
      setTimeout(function () {
        document.body.style.overflowY = "scroll";
        loadScreen.style.opacity = 0;
        loadScreen.style.display = "none";
      }, 50);
    },
  });
};

loadingAnim();

//hero img animation
const initAnim = () => {
  gsap.fromTo(
    cursor,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      onComplete: function () {
        cursor.style.opacity = 1;
      },
    }
  );

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

setTimeout(function () {
  initAnim();
}, 1700);

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

if (landingContainer) {
  landingContainer.onclick = heroClickAnim;
  landingContainer.onmouseenter = function () {
    cursorCir.style.backgroundColor = "#64F5DB";
  };
  landingContainer.onmouseleave = function () {
    cursorCir.style.backgroundColor = "transparent";
  };
}

// work image animation
workArray.forEach((work) => {
  work.onmouseenter = function () {
    // cursorCir.style.backgroundColor = "#64F5DB";
    imgCon = work.querySelector(".image-container");
    gsap.to(imgCon, {
      height: "20rem",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
  work.onmouseleave = function () {
    // cursorCir.style.backgroundColor = "transparent";
    imgCon = work.querySelector(".image-container");
    gsap.to(imgCon, {
      height: "0rem",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
});

//cursor animation for a tag
aTag.forEach((a) => {
  a.onmouseenter = function () {
    cursorCir.style.backgroundColor = "#64F5DB";
  };
  a.onmouseleave = function () {
    cursorCir.style.backgroundColor = "transparent";
  };
});

//case study side scroll on window scroll
if (caseScroll) {
  let scrollOldValue = 0;
  let scrollNewValue = 0;
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
}

let mouseX = 0;
let mouseY = 0;
let intv = 0;

//cursor follow
window.onmousemove = (e) => {
  // cursor.style.top = e.pageY - 20 + "px";
  // cursor.style.left = e.pageX + 20 + "px";

  mouseX = e.clientX / 16 - 45 / 16 + 3 + "rem";
  mouseY = e.clientY / 16 - 45 / 16 + "rem";
};

const mouseMove = () => {
  intv += 1;
  cursor.style.left = mouseX;
  cursor.style.top = mouseY;
  window.requestAnimationFrame(mouseMove);
};

mouseMove();
// document.body.onscroll = (e) => {
//   console.log(e);
// };

// collapse bar
if (barTextAll) {
  barTextAll.forEach((barText) => {
    barText.onclick = (e) => {
      e.preventDefault();
      let barContainer = barText.parentElement.nextElementSibling;
      barContainer.style.display == "block"
        ? (barContainer.style.display = "none")
        : (barContainer.style.display = "block");
    };
  });
}
