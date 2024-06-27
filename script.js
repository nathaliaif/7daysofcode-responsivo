/* Toggle between showing and hiding the navigation menu links when the user clicks on the float button */
var navbarFloatMenu = document.getElementById("navbar__float__menu");
var navbarFloatButton = document.getElementById("navbar__float__button");
var navbarClickableElements = document.getElementsByClassName("clickable");
var bg = document.getElementById("navbar__float__bg");

function openFloatMenu() {
    if (navbarFloatMenu.style.display === "block") {
        changesMenuHidden()
    } else {
        changesMenuActive();
    }
  }
  
  document.addEventListener('click', (event) => {
    if (!navbarFloatButton.contains(event.target) && !navbarFloatMenu.contains(event.target)) {
        changesMenuHidden();
    }
  });

  function changesMenuActive(){
    navbarFloatMenu.style.display = "block";
    bg.style.display = "block";
  }

  function changesMenuHidden(){
    navbarFloatMenu.style.display = "none";
    bg.style.display = "none";
  }