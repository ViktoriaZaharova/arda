$('.main-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000
});

$('.gallery-slider').slick({
    slidesToShow: 2,
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

$('.gallery-slider__mobile').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true,
});


$('.playpause').click(function () {
    $('.playpause, .video-poster').fadeOut();
});

// show list all
$('.btn-load').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.advice').find('.advice-line');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('Скрыть текст');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Раскрыть текст');

        content.slice(2).slideUp();
    }
});
// show list all
$('.menu-close').click(function () {
    $('.navbar-collapse').removeClass('show');
});

new WOW().init();

$("[name='phone']").mask("+7(999) 999-9999");

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

$("form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('.modal').modal('hide');
        $('#modalThanks').modal();

        setTimeout(function(){
            $('#modalThanks').modal('hide');
        }, 4000);

        $("form").trigger("reset");
    });
    return false;
});



$(window).on('load resize', function () {
    if ($(window).width() < 1199) {
        $('.go_to').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 500);
                $('.navbar-collapse').removeClass('show');
            }
            return false;


        });
    }
});

$('[data-fancybox="photo"]').fancybox();