$(function () {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    spaceBetween: 30,
    slidesPerView: 1,

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.header__nav-item a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 370,
      easing: "linear"
    });

    return false;
  });

  $(".header__nav-link").on("click", function () {
    $(".header__nav-link").removeClass("active");
    $(this).addClass("active");
  });
});