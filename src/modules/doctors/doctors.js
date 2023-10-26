import 'owl.carousel';

$('.doctors__slider').owlCarousel({
  loop: true,
  items: 4,
  margin: 20,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#FF9C81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00006 18.4999L15.0001 12.4999L9.00006 6.49994" stroke="#FF9C81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>  '],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    767: {
      items: 3,
      nav: false
    },
    1400: {
      items: 4,
      nav: true,
    }
  }

});

$('.sertif__slider').owlCarousel({
  loop: true,
  margin: 20,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#FF9C81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00006 18.4999L15.0001 12.4999L9.00006 6.49994" stroke="#FF9C81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>  '],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    767: {
      items: 3,
      nav: false
    },
    1400: {
      items: 4,
      nav: true,
    }
  }
});

$('.review-single__slider').owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  nav: true,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#FF9C81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00006 18.4999L15.0001 12.4999L9.00006 6.49994" stroke="#FF9C81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>  '],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    1400: {
      items: 1,
      nav: true,
    }
  }
});

$('.doctors-single__btn').click(function () {
  $(this).remove();
  $('.doctors-single__item').removeClass('hidden')
})