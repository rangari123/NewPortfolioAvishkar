const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true, // Enable smooth scrolling for mobile devices
  multiplier: 1.2, // Adjust the scrolling speed (you can experiment with different values)
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

// circle ko chapta karo

function flatTheCircle() {
  // define the defalut value of circle
  let xscale = 0;
  let yscale = 0;

  // previous postn of circle.
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    //calculate the -> current postn after moving the mouse  - what postn the mouse was earlier

    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - yprev;

    // clamp (min, max, valuetoclamp)
    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    // make the previous postn to current postn.
    xprev = dets.clientX;
    yprev = dets.clientY;

    // console.log(xscale, yscale);

    circleMouseFollower(xscale, yscale);
  });
}

// mouse circle follow
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px  , ${dets.clientY}px) scale(${xscale} , ${yscale})`;
    // console.log(dets.clientX, dets.clientY);
  });
}

flatTheCircle();
circleMouseFollower();
firstPageAnim();

// elem ke liye

document.querySelectorAll(".elem").forEach(function (elem) {
  // store rotation of image elem varaiales
  let rotate = 0;
  let diffrotate = 0;

  // mouse leave remove image
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  // adding image

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;

    diffrotate = dets.clientX - rotate; // current location(Dest.clentX) - prev(rotate)
    rotate = dets.clientX; // rotate = new current location

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.6),
    });
  });
});

// get time and date

let currentDate = new Date();

let year = currentDate.getFullYear();
let currentHour = currentDate.getHours();
let currmins = currentDate.getMinutes();

let totaltime = `${currentHour} : ${currmins} IST`;

document.querySelector(".currentyear").innerHTML = year;
document.querySelector(".currenttime").innerHTML = totaltime;

// console.log(dets.clientX, dets.clientY);
