window.addEventListener("scroll", function () {
  const stickyHeader = document.querySelector(".header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    stickyHeader.classList.add("blur");
  } else {
    stickyHeader.classList.remove("blur");
  }
});
