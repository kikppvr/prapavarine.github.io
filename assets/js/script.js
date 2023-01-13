/*-- Scroll Up/Down add class --*/

$(window).scroll(function (e) {

    var scrollPosition = 0;

    var currentPosition = $(this).scrollTop();

    if (currentPosition > scrollPosition) {
        $('.header').addClass('header--black');
    }

    if (currentPosition === 0) {
        $('.header').removeClass('header--black');
    }

    scrollPosition = currentPosition;
});


$(document).ready(function () {

    if ($(window).width() <= 768) {
        $('.navbar-collapse').on('show.bs.collapse', function () {
            console.log('test');
            $('.header').addClass('header--on-open');
        });

        $('.navbar-collapse').on('hidden.bs.collapse', function () {
            $('.header').removeClass('header--on-open');
        });
    }
});