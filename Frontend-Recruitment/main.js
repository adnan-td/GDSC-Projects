const cardimgcont = document.querySelector(".card-img");
cardimgcont.addEventListener("mouseenter", () => {
  cardimgcont.querySelector("#hover-img").classList.toggle("display-none");
});

cardimgcont.addEventListener("mouseleave", () => {
  cardimgcont.querySelector("#hover-img").classList.toggle("display-none");
});
