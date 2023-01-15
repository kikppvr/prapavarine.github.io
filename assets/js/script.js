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


    //   //window scroll to the active menu
    //   let activeMenu = $(this).find('.active')[0];

    //   if(activeMenu) {
    //       activeMenu.scrollIntoView({
    //           behavior: "smooth",
    //           block: "center",
    //           inline: "center"
    //       });
    //   }
});


$(document).ready(function () {

    $('body').scrollspy({
        target: this,
        offset: 500
    });

    $(this).find('.menu__link').click((e) => {
        e.preventDefault();

        let offset = 70;
        let target = $(e.currentTarget).attr('href');

        $('html,body').animate({
            scrollTop: $(target).offset().top - offset
        }, 500);
    });


    if ($(window).width() <= 768) {
        $('.navbar-collapse').on('show.bs.collapse', function () {
            $('.header').addClass('header--on-open');

            $(this).find('.menu__link').click(function () {
                $('.navbar-collapse').collapse('toggle');
            });
        });

        $('.navbar-collapse').on('hidden.bs.collapse', function () {
            $('.header').removeClass('header--on-open');
        });
    }

    //set height banner
    function setHeight() {
        let height = $(window).innerHeight();
        $('.home-banner').css('height', height);
    }

    setTimeout(() => {
        setHeight();
    }, 100);

    $(window).resize(() => {
        setHeight();
    });
});