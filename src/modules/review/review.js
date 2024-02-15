import $ from 'jquery'

$('.review__box').click(function () {
  const href = $(this).data('href');
  const img = $(this).find('.review__pic').attr('src');

  $('.review__icon').attr('src', img);
  $('.review__link ').attr('href', href);
  $('.review__popup').fadeIn();
})

$('.review__btn ').click(() => {
  $('.review__popup').hide();
})

