const burgerBtn = document.querySelector(".header__burger");
const headerLogo = document.querySelector(".header__logo");
const headerNavbar = document.querySelector(".header__navbar");

burgerBtn.onclick = () => {
  burgerBtn.classList.toggle("header__burger_toggle");
  headerLogo.classList.toggle("header__logo_invisible");
  headerNavbar.classList.toggle("header__navbar_visible");
};

const productsBtn = document.querySelector(".products__info-button");
const productsContent = document.getElementById("products-content");
const productsBtnText = document.querySelector(".products__info-button span");
const productsBtnAngle = document.querySelector(".products__info-button svg");

productsBtn.onclick = () => {
  productsContent.classList.toggle("products__inner_full-height");
  productsBtnText.innerText === "Show More"
    ? (productsBtnText.innerText = "Show Less")
    : (productsBtnText.innerText = "Show More");
  productsBtnAngle.classList.toggle("button-arrow-rotate");
};
