
$('.work__wrap').click(function () {
  const gl = [];
  $(this).find('[data-fancybox]').each(function () {
    gl.push({ src: this.href })
  })
  Fancybox.show(gl);
})