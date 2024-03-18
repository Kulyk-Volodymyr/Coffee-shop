const burgerBtn = document.querySelector(".header__burger");
const headerLogo = document.querySelector(".header__logo");
const headerNavbar = document.querySelector(".header__navbar");

burgerBtn.onclick = () => {
  burgerBtn.classList.toggle("header__burger_toggle");
  headerLogo.classList.toggle("header__logo_invisible");
  headerNavbar.classList.toggle("header__navbar_visible");
};
