/*-- Scroll Up/Down add class --*/
var scrollPosition = 0;

$(window).scroll(function (e) {

    var currentPosition = $(this).scrollTop();

    if (currentPosition > scrollPosition) {

        $('.header').addClass('scroll-down');
        $('.header').removeClass('scroll-up');
    } else {

        $('.header').addClass('scroll-up');
        $('.header').removeClass('scroll-down');
    }

    if (currentPosition === 0) {
        $('.header').removeClass('scroll-up');
    }

    scrollPosition = currentPosition;
});

