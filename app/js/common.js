$('.main-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
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

$('.playpause').click(function () {
    $('.playpause, .video-poster').fadeOut();
});

// show list all
$('.btn-load').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.advice').find('.advice-line');


    if(!$this.hasClass('trigger')){
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
