(function anim() {
  const sliderWrapper = document.querySelector(".slider-container");
  const slider = document.querySelector(".slider-wrapper");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  let width = 380;
  const image1 = document.querySelector(".image1");
  const image2 = document.querySelector(".image2");
  const image3 = document.querySelector(".image3");
  const image4 = document.querySelector(".image4");
  const image5 = document.querySelector(".image5");

  let nextClass = 0;
  let correctClass;

  image2.classList.add("image-focus");

  function sliderAnim() {
    arrowLeft.addEventListener("click", function() {
      console.log("elo");
      width += -380;
      image2.classList.remove("image-focus");
      nextClass = 3;
      image3.classList.add("image-focus");

      slider.style.transform = "translateX(" + width + "px)";
    });

    arrowRight.addEventListener("click", function() {
      width += 380;
      slider.style.transform = "translateX(" + width + "px)";
    });
  }
  sliderAnim();
})();
