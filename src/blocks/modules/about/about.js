const slider = tns({
    container: '.slider__inner',
    items: 4,
    slideBy: 1,
    autoplay: false,
    controls: false,
    nav: false,
    controlsText: [
        '<img src="img/svg/arrow_left.svg" class="left">',
        '<img src="img/svg/arrow_right.svg">'
    ],
    responsive: {
        320: {
            items: 1
          },
        506: {
            items: 2
          },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
});

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};