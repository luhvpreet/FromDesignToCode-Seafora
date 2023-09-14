const pNav = document.querySelector(".nav-container");
const mobileToggle = document.querySelector(".mobile-nav");

mobileToggle.addEventListener("click", () => {
  const visibility = pNav.getAttribute("data-visible");
  if (visibility === "false") {
    pNav.setAttribute("data-visible", true);
    mobileToggle.setAttribute("aria-expanded", true);
  } else {
    pNav.setAttribute("data-visible", false);
    mobileToggle.setAttribute("aria-expanded", false);
  }
});
