let menu = document.querySelector("#nav-menu");
let mobileLinks = document.querySelector("#mobile");
var firstChild = menu.querySelector(":first-child");
var secondChild = menu.querySelector(":nth-child(2)");
var lastChild = menu.querySelector(":last-child");

menu.addEventListener("click", () => {
  if (mobileLinks.classList.contains("hide")) {
    mobileLinks.classList.remove("hide");
    mobileLinks.classList.add("show");
    // menu.classList.add("close");
    secondChild.classList.add("in");
    secondChild.classList.remove("out");
    firstChild.classList.add("in");
    firstChild.classList.remove("out");
    lastChild.classList.add("in");
    lastChild.classList.remove("out");
  } else if (mobileLinks.classList.contains("show")) {
    mobileLinks.classList.remove("show");
    mobileLinks.classList.add("hide");
    // menu.classList.remove("close");
    secondChild.classList.add("out");
    secondChild.classList.remove("in");
    firstChild.classList.add("out");
    firstChild.classList.remove("in");
    lastChild.classList.add("out");
    lastChild.classList.remove("in");
  }
});
