function buttonAnim() {
  const arrow = document.querySelector(".fa-arrow-right");
  const btn = document.querySelector(".text-btn");

  btn.addEventListener("mouseenter", function() {
    arrow.style.paddingLeft = "1.6rem";
    arrow.style.paddingRight = "0rem";
  });

  btn.addEventListener("mouseleave", function() {
    arrow.style.paddingLeft = "0.7rem";
  });
}
buttonAnim();

function sliderLeft() {
  const leftSliderWrapper = document.querySelector(".left-slider-wrapper");
  const leftNav = document.querySelector(".left-slider-nav");

  leftNav.addEventListener("click", function(e) {
    let slideNum = 1 - parseInt(e.target.classList[0]);
    let slideWidth = leftSliderWrapper.offsetWidth;
    console.log(slideNum * slideWidth);

    leftSliderWrapper.style.marginLeft = slideWidth * slideNum + "px";
    console.log(leftSliderWrapper.style.marginLeft);
  });
}
sliderLeft();

/*
(function anim() {
  const sliderWrapper = document.querySelector(".slider-container");
  const slider = document.querySelector(".slider-wrapper");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const image1 = document.querySelector(".image1");

  let imageWidth = image1.offsetWidth + 12;
  slider.style.marginLeft = imageWidth * -1 + "px";
  let margin = -482;

  function sliderAnim() {
    arrowLeft.addEventListener("click", function() {
      margin += imageWidth;
      slider.style.marginLeft = margin + "px";

      if (slider.style.marginLeft == "0px") {
        setInterval(function() {
          slider.classList.remove("transition-ease");
        }, 500);

        slider.style.marginLeft = 3 * -imageWidth + "px";
        margin = 3 * -imageWidth;
      } else {
        slider.classList.add("transition-ease");
      }
      console.log(slider.style.marginLeft);
    });

    arrowRight.addEventListener("click", function() {
      margin -= imageWidth;
      slider.style.marginLeft = margin + "px";
      console.log(slider.style.marginLeft);
    });
  }

  console.log(slider.style.marginLeft);

  sliderAnim();
})();
*/
