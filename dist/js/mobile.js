let menu = document.querySelector("#nav-menu");
let mobileLinks = document.querySelector("#mobile");
// let mobileLink = document.querySelectorAll('#mobile-link');

menu.addEventListener("click", () => {
  if (mobileLinks.classList.contains("show")) {
    mobileLinks.classList.remove("show");
    mobileLinks.classList.add("hide");
    menu.classList.remove("close");


  } else if (mobileLinks.classList.contains("hide")) {
    mobileLinks.classList.remove("hide");
    mobileLinks.classList.add("show");
    menu.classList.add("close");
  }
});
