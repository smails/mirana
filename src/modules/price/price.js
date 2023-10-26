$('.price__head').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active').next().slideUp();
    return;
  }
  $(this).addClass('active').next().slideDown();
})