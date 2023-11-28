const burgerBtnHandler = document.querySelector(".hamburger");
const navMobileHandler = document.querySelector(".nav-mobile");
const footerYearHandler = document.querySelector(".footer__year");
const allLinks = document.querySelectorAll(".nav__link");

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYearHandler.innerText = year;
};

const mobileNavHandler = () => {
  burgerBtnHandler.classList.toggle("is-active");
  navMobileHandler.classList.toggle("nav-mobile--active");
};

const closeMobileNavHandler = () => {
  burgerBtnHandler.classList.remove("is-active");
  navMobileHandler.classList.remove("nav-mobile--active");
};

allLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNavHandler);
});

handleCurrentYear();
burgerBtnHandler.addEventListener("click", mobileNavHandler);
