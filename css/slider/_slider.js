$(document).ready(function () {
   $('.slider--customers').slick({
      vertical: true,
      verticalSwiping: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      swipeToSlide: true,
      speed: 300,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
   });
   $('.slider--photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      swipeToSlide: false,
      draggable: false,
      arrows: false,
      speed: 300,
      focusOnSelect: true,
      variableWidth: true,
      initialSlide: 1,
      asNavFor: '.slider--about'
   });
   $('.slider--about').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      //centerMode: true,
      swipeToSlide: false,
      draggable: false,
      arrows: false,
      speed: 300,
      initialSlide: 1,
      asNavFor: '.slider--photo'
   });
});

/*Если слайдер находится внутри флекс элемента и/или сам является флекс элементом,
то этим элементам необходимо задать стиль min-width:0,
иначе слайдер растянется*/