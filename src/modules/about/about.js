$('.about__head').click(function () {
  $('.about__head').removeClass('active');
  $('.about__body').slideUp();
  $(this).addClass('active').next().slideDown();
})