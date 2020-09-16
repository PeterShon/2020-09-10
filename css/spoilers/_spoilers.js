$(document).ready(function () {
   $('.spoilers__item').click(function (event) {
      $('.spoilers__item').not($(this)).removeClass('spoilers__item--active');
      $('.spoilers__text-box').not($(this).children('.spoilers__text-box')).slideUp(300);
      //console.log($(this).children()[1]);
      $(this).toggleClass('spoilers__item--active').children('.spoilers__text-box').slideToggle(300);
   });
})
