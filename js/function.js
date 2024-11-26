document.addEventListener("DOMContentLoaded", (event) => {
  const body = document.body;
  const navMenu = document.querySelector(".nav-menu");
  const likeButtons = document.querySelectorAll(".card_btn");

  body.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches(".hamburger")) {
      target.classList.toggle("active");
      navMenu.classList.toggle("active");
    } else if (target.matches(".nav-link")) {
      document.querySelector(".hamburger").classList.remove("active");
      navMenu.classList.remove("active");
    } else if (target.matches(".card_btn")) {
      target.classList.toggle("card_btn--like");
    }
  });  
});