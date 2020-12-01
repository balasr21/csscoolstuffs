let cardElement = document.querySelector(".card");
let containerElement = document.querySelector(".container");

let title = document.querySelector(".title");
let subTitle = document.querySelector(".sub-title");
let buy = document.querySelector(".buy button");
let shoe = document.querySelector(".shoe");
let sizes = document.querySelectorAll(".sizes button");

containerElement.addEventListener("mousemove", (e) => {
  // Movement starts inside container element to smooth the card movement
  // Division by 6 is an arbitrary limit of the deg being rotated.If not given
  // movement is not restricted and it can almost turn 360deg

  let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
  cardElement.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// To make sure there is no transition when mouse enters
containerElement.addEventListener("mouseenter", (e) => {
  cardElement.style.transition = "none";
  cardElement.style.transform = `rotateX(0deg) rotateY(0deg)`;

  title.style.transform = "translateZ(50px) perspective(250px)";
  subTitle.style.transform = "translateZ(50px) perspective(250px)";
  buy.style.transform = "translateZ(50px) perspective(250px)";
  shoe.style.transform =
    "rotateZ(-45deg) translateZ(100px) perspective(1000px)";
});

// To make card element to reset its position if mouse moved out of container

containerElement.addEventListener("mouseleave", (e) => {
  cardElement.style.transition = "all 2s ease";
  cardElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
  title.style.transform = "translateZ(0px)";
  buy.style.transform = "translateZ(0px)";
  subTitle.style.transform = "translateZ(0px)";
  shoe.style.transform = "rotateZ(0) translateZ(0)";
});

sizes.forEach((element) => {
  containerElement.addEventListener("mouseenter", (e) => {
    element.style.transform = "translateZ(50px) perspective(250px)";
  });

  element.addEventListener("mouseenter", (e) => {
    element.style.transform = "translateZ(-10px) perspective(1000px)";
  });
});
