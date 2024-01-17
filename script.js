let hamburger = document.querySelector(".fa-bars");
let cross = document.querySelector(".fa-times");
let menu = document.querySelector(".menu");
hamburger.onclick = () => {
  menu.style.left = "0";
  cross.classList.remove("hide");
  hamburger.classList.add("hide");
};
cross.onclick = () => {
  menu.style.left = "100vw";
  cross.classList.add("hide");
  hamburger.classList.remove("hide");
};

let menuitems = document.querySelectorAll(".menu .item");
menuitems.forEach(itemact);

function itemact(item) {
  item.onclick = () => {
    menu.style.left = "100vw";
    cross.classList.add("hide");
    hamburger.classList.remove("hide");
  };
}



// autoscrooll div

const scrollingContainer1 = document.getElementById("scrolling-container1");
const scrollingContainer2 = document.getElementById("scrolling-container2");
const scrollingContainer3 = document.getElementById("scrolling-container3");

function autoScroll() {
  scrollingContainer1.scrollTop += 1;
  scrollingContainer2.scrollTop += 1;
  scrollingContainer3.scrollTop += 1;
}

setInterval(autoScroll, 50);