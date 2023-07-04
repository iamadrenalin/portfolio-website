let typed = new Typed(".job-auto", {
  strings: ["Web Developer.", "UI/UX Designer.", "Fitness Trainer.", "Frelancer."], 
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});


const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navbarMenu = document.querySelector(".navbar-menu");
const overlay = document.querySelector(".overlay");
const body = document.body;


menuBtn.addEventListener("click", () => {
  navbarMenu.classList.add("show");
  overlay.classList.add("show");
  body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  navbarMenu.classList.remove("show");
  overlay.classList.remove("show");
  body.classList.remove("no-scroll");
});

document.addEventListener("click", function(event) {
  const target = event.target;
  if (target.closest(".overlay")) {
    navbarMenu.classList.remove("show");
    overlay.classList.remove("show");
    body.classList.remove("no-scroll");
  }
});

const navLinks = document.querySelectorAll(".navbar-menu li");
navLinks.forEach(function(link) {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("show");
    overlay.classList.remove("show");
    body.classList.remove("no-scroll");
  });
});


// Resume Tab Navigation
const tabs = document.querySelector(".resumeTabs");
const tabBtns = document.querySelectorAll(".resumeTabs button");
const resumeContents = document.querySelectorAll(".content");

tabs.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  
  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active")
    });

    event.target.classList.add("active");

    resumeContents.forEach((content) => {
      content.classList.remove("active");
    });
    const visibleContent = document.getElementById(id);
    visibleContent.classList.add("active");
  }
});


// let testimonial = [
// {
//     name: "Nevine Acotanza",
//     title: "Chief Operating Officer",
//     photo: "img/testimonial-img.png",
//     job:"IOS Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi dolore assumenda aliquam qui perspiciatis soluta odit maxime ab beatae.",
//     date: "Via Fiver. Oct 5, 2022 - Dec 28, 2022",
//     rating: ""
// }
// ]