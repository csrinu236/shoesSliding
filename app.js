const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const firstImg = document.querySelector(".firImg");
const secImg = document.querySelector(".secImg");
const productInner = document.querySelector(".productInner");

prevBtn.addEventListener("click", () => {
  firstImg.style.transform = "translateX(0) rotateZ(0deg)";
  secImg.style.transform = "translateX(150%) rotateZ(-30deg)";
  productInner.style.transform = "rotateY(0)";
});
nextBtn.addEventListener("click", () => {
  firstImg.style.transform = "translateX(-150%) rotateZ(-30deg)";
  secImg.style.transform = "translateX(0) rotateZ(0deg)";
  productInner.style.transform = "rotateY(-180deg)";
});
