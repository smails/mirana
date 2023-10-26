import $ from 'jquery'

$('.header__burger').click(function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $('body').removeClass('hidden');
    $('.nav').slideUp();
    return
  }
  $(this).addClass('open');
  $('.nav').slideDown();
  $('body').addClass('hidden');
})