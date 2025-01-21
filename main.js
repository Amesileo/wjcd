let menuOpen = 0;
let m = document.getElementById("menubutton");
let nav = document.getElementsByTagName("nav");
function menuTransition() {
  if (menuOpen === 0) {
    m.style.border = "var(--red) 2px solid";
    m.style.backgroundColor = "var(--offwhite)";

    for (const child of m.children) {
      console.log((child.style.backgroundColor = "var(--red)"));
    }

    m.firstElementChild.style.transform = "translatey(16px) rotate(-45deg)";
    m.lastElementChild.style.transform = "translatey(-16px) rotate(-45deg)";
    m.children[1].style.transform = "rotate(45deg)";

    nav[0].style.transform = "translatex(0px)";

    menuOpen = 1;
  } else {
    m.style = "";

    for (const child of m.children) {
      child.style = "";

      nav[0].style.transform = "translatex(-300px)";

      menuOpen = 0;
    }
  }
}



