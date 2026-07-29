const initializeSliders = () => {
  new Swiper(".slider .swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,
    initialSlide: 2,
    centeredSlides: true,
    navigation: {
      nextEl: ".slider__button--next",
      prevEl: ".slider__button--previous",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  new Swiper(".people__slider", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 10,
      perSlideRotate: 0.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".people__slider-button--next",
      prevEl: ".people__slider-button--previous",
    },
  });
};

const initializeWheelAnimation = () => {
  const wheelText = document.querySelector(".wheel__text");
  const wheelImage = document.querySelector(".wheel__img");
  const reduceMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (!wheelText || !wheelImage || reduceMotionQuery.matches) {
    return;
  }

  let animationFrameId;

  const updateWheel = () => {
    const scrollPosition = window.scrollY;
    wheelText.style.transform = `translateX(-${scrollPosition}px)`;
    wheelImage.style.transform = `rotate(-${scrollPosition / 10}deg)`;
    animationFrameId = undefined;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateWheel);
      }
    },
    { passive: true },
  );
};

document.addEventListener("DOMContentLoaded", () => {
  initializeSliders();
  initializeWheelAnimation();
});
