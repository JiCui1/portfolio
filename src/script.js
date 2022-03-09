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
const menuIcon = document.querySelector(".menu-icon");
const burgerMenu = document.querySelector(".burger-menu");
const galleryBtns = document.querySelectorAll(".gallery-custom-btn");
const arProductBtns = document.querySelectorAll(".ar-product-btn");
const arCase = document.getElementById("ar-product");
const galleryArCase = document.getElementById("gallery-custom");
const rock1 = document.getElementById("rock1");
const rock2 = document.getElementById("rock2");
const rock3 = document.getElementById("rock3");
const rock4 = document.getElementById("rock4");
const cir = document.getElementById("cir");
const darkCir = document.getElementById("dark-cir");
const computer = document.getElementById("computer");

if (computer) {
  darkCir.style.opacity = 0;
  computer.style.opacity = 0;
  computer.style.transformOrigin = "center right";
  rock1.style.opacity = 0;
  rock2.style.opacity = 0;
  rock3.style.opacity = 0;
  rock4.style.opacity = 0;
  cir.style.opacity = 0;
}

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

const initAnimDev = () => {
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

  if (computer) {
    gsap.fromTo(
      darkCir,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 0.85,
        opacity: 1,
        duration: 1,
        ease: "Expo.easeOut",
      }
    );
    gsap.fromTo(
      computer,
      {
        scale: 0,
        x: 5,
        opacity: 1,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
      }
    );

    gsap.to([rock1, rock2, rock3, rock4], {
      opacity: 1,
      duration: 0.5,
      delay: 1.5,
    });
    gsap.fromTo(
      rock1,
      {
        x: 30,
        y: 150,
      },
      {
        x: 90,
        y: 50,
        delay: 1,
        duration: 7,
      }
    );
    gsap.fromTo(
      rock2,
      {
        x: -30,
        y: 150,
      },
      {
        x: 120,
        y: 250,
        delay: 1.7,
        duration: 20,
      }
    );
    gsap.fromTo(
      rock3,
      {
        x: 150,
        y: 150,
      },
      {
        x: 180,
        y: 280,
        delay: 2.4,
        duration: 15,
      }
    );
    gsap.fromTo(
      rock4,
      {
        x: 150,
        y: 150,
      },
      {
        x: 300,
        y: 150,
        delay: 2.4,
        duration: 15,
      }
    );
  }
};

setTimeout(function () {
  if (tapHand) {
    initAnim();
  }
  if (computer) {
    initAnimDev();
  }
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
  if (computer) {
    gsap.fromTo(
      cir,
      {
        scale: 0,
        x: 100,
        y: 100,
        opacity: 1,
      },
      {
        scale: 2,
        x: 300,
        y: Math.floor(Math.random() * 200) + 100,
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

menuIcon.onclick = function () {
  if (burgerMenu.style.display == "none") {
    burgerMenu.style.display = "flex";
  } else {
    burgerMenu.style.display = "none";
  }
};

//design ar case study tab function
if (galleryBtns) {
  galleryBtns.forEach((btn) => {
    btn.onclick = () => {
      galleryBtns.forEach((btn) => {
        btn.style.color = "#ffdb06";
        btn.style.backgroundColor = "#000000";
      });
      arProductBtns.forEach((btn) => {
        btn.style.color = "#000000";
        btn.style.backgroundColor = "#ffdb06";
      });
      arCase.style.display = "none";
      galleryArCase.style.display = "block";
    };
  });

  arProductBtns.forEach((btn) => {
    btn.onclick = () => {
      galleryBtns.forEach((btn) => {
        btn.style.color = "#000000";
        btn.style.backgroundColor = "#ffdb06";
      });
      arProductBtns.forEach((btn) => {
        btn.style.color = "#ffdb06";
        btn.style.backgroundColor = "#000000";
      });
      arCase.style.display = "block";
      galleryArCase.style.display = "none";
    };
  });
}
