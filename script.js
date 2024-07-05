// ---- Float button ----
/* Toggle between showing and hiding the navigation menu links when the user clicks on the float button */
const navbarFloatMenu = document.getElementById('navbar__float__menu');
const navbarFloatButton = document.getElementById('navbar__float__button');
const navbarClickableElements = document.querySelectorAll('.clickable');
const bg = document.getElementById('navbar__float__bg');

document.addEventListener('click', (event) => {
   if (!navbarFloatButton.contains(event.target) && !navbarFloatMenu.contains(event.target)) {
       changesMenuHidden();
  }
 });

function openFloatMenu() {
    if (navbarFloatMenu.style.display === 'block') {
        changesMenuHidden();
    } else {
        changesMenuActive();
    }
}

//Animation for when Float Button opens
function buttonFloatOpen(){
  gsap.to('.navbar__float__icon', {duration: 0.4, rotation: 45});
  gsap.to(bg, { duration: 0.4, width: '100%', height: '100%', right: 0, bottom: 0, ease: 'power4.out', borderRadius: 0});
}

//Animation for when Float Button closes
function buttonFloatClose(){
  gsap.to('.navbar__float__icon', {duration: 0.4, rotation: 0});
  // gsap.set(bg, { width: "auto", height: "auto", right: "auto", bottom: "auto", borderRadius: "50%", ease: "power1.out" });
  gsap.set(bg, {duration: 0.4, borderRadius: '100%', width: '3.5rem', height: '3.5rem', right: '1.5em', bottom: '5.7em', ease: 'power1.out'})
}
  
//Function for when menu is open
function changesMenuActive(){
  navbarFloatMenu.style.display = 'block';
  navbarFloatMenu.setAttribute('aria-hidden', 'false');
  bg.style.display = 'block';
  
  //Opening animation
  gsap.fromTo('.navbar__float__links', { opacity: 0, y: '100%' }, { duration: 0.6, opacity: 1, stagger: 0.06, y: '0%' });
  buttonFloatOpen();
}

//Function for when menu is closed
function changesMenuHidden(){
  gsap.to('.navbar__float__links', {duration: 0.4, opacity: 0, stagger: .03, y: '100%'});
  buttonFloatClose();
  
  //Delay hiding the elements to allow animation to complete
  setTimeout(() => {
    navbarFloatMenu.style.display = 'none';
    navbarFloatMenu.setAttribute('aria-hidden', 'true');
    bg.style.display = 'none';
   }, 500); //Delay duration
 }


// ---- Form Modal ----

const buttonFloatModal = document.getElementById('modal__button')
const formModal = document.getElementById('form-modal');

function openFormModal(){
  if (formModal.style.display === 'block') {
    gsap.to('.button__float__icon', {duration: 0.4, rotation: 0});
    gsap.to('.modal__content', {duration: 0.5, y: '100%', ease: 'power2.out'});
    gsap.to('.modal', {duration: 0.5, opacity: 0});
    
    setTimeout(() => {
      formModal.style.display = 'none';
    }, 500);
    
  } else {
    formModal.style.display = 'block';
    gsap.to('.button__float__icon', {duration: 0.4, rotation: 45});
    gsap.fromTo('.modal__content', {y: '-100%'}, {duration: 0.5, y: '0%',  ease: 'power2.out'});
    gsap.fromTo('.modal', {opacity: 0}, {duration: 0.5, opacity: 1});
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == formModal) {
    formModal.style.display = 'none';
    gsap.to('.button__float__icon', {duration: 0.4, rotation: 0});
  }
}

// ---- Side Navbar ----
let mini = true;

function toggleSidebar(){
  const navbarSide = document.getElementById('navbar__side');

  if (mini){
    navbarSide.classList.add('expanded');
    mini = false;
  } else {
    navbarSide.classList.remove('expanded');
    mini = true;
  }
}