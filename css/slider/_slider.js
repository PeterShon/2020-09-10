$(document).ready(function () {
   $('.slider').slick({
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
});

/*Если слайдер находится внутри флекс элемента и/или сам является флекс элементом,
то этим элементам необходимо задать стиль min-width:0,
иначе слайдер растянется*/