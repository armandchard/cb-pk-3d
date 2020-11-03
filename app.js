//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const bigP = document.querySelector(".big-p");
const logoPk = document.querySelector(".logo-pk");
const chip = document.querySelector(".chip");
const numbers = document.querySelector(".numbers");
const nfc = document.querySelector(".nfc");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  // card.style.transition = "all 0.1s ease";
  bigP.style.transform = "translateZ(20px) rotateZ(-10deg)";
  logoPk.style.transform = "translateZ(70px) rotateZ(10deg)";
  chip.style.transform = "translateZ(50px) rotateZ(-45deg)";
  numbers.style.transform = "translateZ(40px)";
  nfc.style.transform = "translateZ(30px)";

  bigP.style.transition = "all 0.4s ease"
  logoPk.style.transition = "all 0.4s ease"
  chip.style.transition = "all 0.4s ease"
  numbers.style.transition = "all 0.4s ease"
  nfc.style.transition = "all 0.4s ease"
  // title.style.transform = "translateZ(150px)";
  // sneaker.style.transform = "translateZ(-200px) rotateZ(-45deg)";
  // description.style.transform = "translateZ(125px)";
  // sizes.style.transform = "translateZ(100px)";
  // purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  bigP.style.transform = "translateZ(0px) rotateZ(0deg)";
  logoPk.style.transform = "translateZ(1px)";
  chip.style.transform = "translateZ(0px) rotateZ(0deg)";
  numbers.style.transform = "translateZ(0px)";
  nfc.style.transform = "translateZ(0px)";
  // title.style.transform = "translateZ(0px)";
  // sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  // description.style.transform = "translateZ(0px)";
  // sizes.style.transform = "translateZ(0px)";
  // purchase.style.transform = "translateZ(0px)";
});
