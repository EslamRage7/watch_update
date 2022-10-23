let span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 200) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};
