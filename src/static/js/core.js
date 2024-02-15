import $ from 'jquery'

$(".ahcor").click(function () { $(".ahcor-modal").fadeIn() })
$(".ahcor-modal__close, .ahcor-modal__over").click(function () { $(".ahcor-modal").hide() })

Fancybox.bind("[data-fancybox]");