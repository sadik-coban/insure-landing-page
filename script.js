var action = 1;

document.getElementById("mobile-nav");
document
  .getElementById("js-nav-button")
  .addEventListener("click", toggle);

function openNav() {
  document.getElementById("mobile-nav").style.display = "block";
  document.getElementById("nav-icon").src = "images/icon-close.svg";
}

function closeNav() {
  document.getElementById("mobile-nav").style.display = "none";
  document.getElementById("nav-icon").src = "images/icon-hamburger.svg";
}

function toggle() {
  if (action == 1) {
    openNav();
    action = 2;
  } else {
    closeNav();
    action = 1;
  }
}
