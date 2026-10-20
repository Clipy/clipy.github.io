const thumbnails = new Swiper('#screenshots-thumbnails', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  watchSlidesProgress: true,
  a11y: {
    slideRole: 'button',
    slideLabelMessage: ''
  }
});

const screenshots = new Swiper('#screenshots-contents', {
  speed: 500,
  rewind: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true
  },
  navigation: {
    prevEl: '#control-left',
    nextEl: '#control-right'
  },
  thumbs: {
    swiper: thumbnails
  }
});

thumbnails.slides.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', (event) => {
    if (event.detail === 0) {
      screenshots.slideTo(index);
    }
  });
});
