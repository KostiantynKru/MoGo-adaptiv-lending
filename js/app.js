$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();


    /*fixsed Header */
    checkScroll(scrolloffset);

    $(window).on("scroll", function () {
        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);
    });

    function checkScroll(scrolloffset) {
        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /**smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockid = $this.data('scroll'),
            blockoffset = $(blockid).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html,body").animate({
            scrollTop: blockoffset
        }, 500);
    });



    /**Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /**Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockid = $this.data('collapse');

        $this.toggleClass("active");

    })

    /**Slider */
    $("[data-slider]").slick({
        Infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScrol: 1
    });

});
