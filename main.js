let mega = document.querySelector(".mega-menu");
let divother = document.querySelector(".span");

divother.addEventListener("click", () => {
  mega.classList.toggle("active");
});

let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".teck span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    console.log("reached");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
