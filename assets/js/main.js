let $ = jQuery.noConflict();

(function ($) {

    "use strict";


    /* -------------------------------------------------*/
    /* =  Lightbox */
    /* -------------------------------------------------*/

    $(".project-images").lightGallery({download: false});

    /* -------------------------------------------------*/
    /* =  Side Navigation */
    /* -------------------------------------------------*/

    let sidesection = document.querySelectorAll("div.contentwrap > section");
    let sidesections = {};
    let i = 0;

    Array.prototype.forEach.call(sidesection, (e) => {
        sidesections[e.id] = e.offsetTop;
    });
    window.onscroll = function () {

        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sidesections) {

            if (sidesections[i] <= scrollPosition + 20) {

                document.querySelector(".active").setAttribute("class", " ");
                document.querySelector("a[href*=" + i + "]").setAttribute("class", "active");

			}

		}

	};

    /* -------------------------------------------------*/
    /* =  Mobile Hover */
    /* -------------------------------------------------*/

    let width = $(window).width();
    let mobileHover = function () {

        $("*").on("touchstart", function () {

            $(this).trigger("hover");

})
.on("touchend", function () {

            $(this).trigger("hover");

});

};

    $(".menu-button").on("click", () => {
        //menu classic, menu sidemenu, menu basic
        var menu = $('#menu');
        var menuClassic = $('#menu-classic');
        var sidemenu = $('#sidemenu');
        var menuResponsiveSidemenu = $('#menu-responsive-sidemenu');
        var menuResponsiveClassic = $('#menu-responsive-classic');
        menu.toggleClass('open');
        menuClassic.toggleClass('open');
        sidemenu.addClass('sidemenu open');
        menuResponsiveSidemenu.toggleClass('open');
        menuResponsiveClassic.toggleClass('open');
        menu.addClass('animated slideInDown');
        $('.submenu', menuClassic).each(function() {
            $('.submenu', menuClassic).removeClass("open");
        });
        if (sidemenu.hasClass("slideInRight")) {
            sidemenu.removeClass('animated slideInRight');
            sidemenu.addClass('animated slideOutRight');
            setTimeout(function() {
                sidemenu.toggleClass('sidemenu open');
                sidemenu.removeClass('animated slideOutRight');
            }, 1000);
        } else {
            sidemenu.addClass('animated slideInRight');
        }
        if (width < 991) {
            $('body').toggleClass('no-scroll');
        }
    });
    $(".menu-holder ul > li:not(.submenu) > a").on("click", () => {
        $('#menu').removeClass('open');
        $('body').removeClass('no-scroll');
    });
    // basic menu mobile
    $(".close-menu").on("click", () => {
        var menu = $('#menu');
        menu.removeClass('animated slideInDown');
        menu.addClass('animated fadeOutUp');
        setTimeout(function() {
            menu.toggleClass('open');
            menu.removeClass('animated fadeOutUp');
        }, 1000);
        if (width < 991) {
            $('body').toggleClass('no-scroll');
        }
    });
    // megamenu mobile
    if (width < 991) {

        let menuClassicSubmenu = $(".submenu", "#menu-classic");

        menuClassicSubmenu.on("click", function () {

            let open = false;

            if ($(this).hasClass("open")) {

                open = true;

}
            menuClassicSubmenu.each(() => {
                menuClassicSubmenu.removeClass("open");
            });
            if (open) {

                $(this).addClass("open");

}
            $(this).toggleClass("open");

});

}

    /* -------------------------------------------------*/
    /* =  Responsive */
    /* -------------------------------------------------*/
    let parentHeightKey = [];

    $("div[data-responsive=\"parent-height\"]").each(function () {

        parentHeightKey.push({
            "id": $(this).attr("data-responsive-id"),
            "height": $(this).outerHeight(true)
        });

});
    $("div[data-responsive=\"child-height\"]").each(function () {

        let childHeight;
        let childId = $(this).attr("data-responsive-id");

        for (let i = 0; i < parentHeightKey.length; i++) {

            if (parentHeightKey[i].id == childId) {

                childHeight = parentHeightKey[i].height;

}

}
        $(this).css({'height': `${childHeight  }px`
        });

});
    $(window).resize(() => {
        var currentWidth = $(window).width();
        if (currentWidth > 767) {
            $('div[data-responsive="parent-height"]').each(function() {
                parentHeightKey.push({
                    id: $(this).attr('data-responsive-id'),
                    height: $(this).outerHeight(true)
                });
            });
            $('div[data-responsive="child-height"]').each(function() {
                var childHeight;
                var childId = $(this).attr('data-responsive-id');
                for (var i = 0; i < parentHeightKey.length; i++) {
                    if (parentHeightKey[i].id == childId) {
                        childHeight = parentHeightKey[i].height;
                    }
                }
                $(this).css({
                    'height': childHeight + 'px'
                })
            });
        }
    });

    /* -------------------------------------------------*/
    /* =  Rellax */
    /* -------------------------------------------------*/
    let rellax = new Rellax(".rellax", {});

    /* -------------------------------------------------*/
    /* =  Hotspot Map */
    /* -------------------------------------------------*/

	$(".hs-wrap").hotspot({
        "show_on": "mouseover",
        "responsive": "on"
    });


    jQuery(document).ready(() => {
        //hotspot map - fix tooltip partially hidden because of overflow:hidden
        jQuery('.hsmap_center').parents('.be-section').css('overflow', 'visible').parents('#hotspotwrap').css('overflow', 'hidden');
        //hotspot map - fix tooltip z-index
        jQuery('.hsmap_center').parents('.be-row').addClass('be-row-hsmap');
        jQuery('.hs-spot-object').click(function() {
            if (jQuery(window).width() < 768) {
                var $fixed_tooltip;
                $fixed_tooltip = jQuery(this).parents('.hsmap_center').find('.hsmap_fixed_tooltip');
                $fixed_tooltip.html('<div class="fixed_tooltip_content">' + jQuery(this).find('.hs-tooltip').html() + '</div>');
                var scrollOffset = $fixed_tooltip.offset().top - (jQuery(window).height() - $fixed_tooltip.outerHeight() + 10);
                if (scrollOffset > jQuery(window).scrollTop()) jQuery("html, body").animate({
                    scrollTop: scrollOffset
                }, 250);
            }
        });
    });

}(jQuery));

$(".hotspot").each(function () {

    let $this = $(this),
        top = $this.data("top"),
        left = $this.data("left");

    $this.css({
        "top": `${top  }%`,
        "left": `${left  }%`
    }).addClass("is-visible");

});
$(".hotspots-label").on("click", function (e) {

    $(this).removeClass("is-visible");
    $(this).parents(".image")
.find(".hotspot")
.removeClass("is-active");
    e.preventDefault();

});
$(".hotspot").on("click", function (e) {

    let text = $(this).data("text");

    if (!$(this).hasClass("is-active")) {

        $(this).parents(".image")
.find(".hotspot")
.removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parents(".image")
.find(".hotspots-label")
.html("<strong>" + $(this).text() + "</strong> <span>" + text + "</span>")
.addClass("is-visible");

} else {

        $(this).removeClass("is-active");
        $(this).parents(".image")
.find(".hotspots-label")
.html("<strong>" + $(this).text() + "</strong> <span>" + text + "</span>")
.removeClass("is-visible");

}
    e.preventDefault();

});

/* -------------------------------------------------*/
/* =  OWL Carousel */
/* -------------------------------------------------*/

$(document).ready(($) => {
    "use strict";
    $(".post-gallery, .project-gallery").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        false: false,
        autoplayHoverPause: false,
        nav: true,
        navText: ['<span><i class="icon ion-ios-arrow-left"></i></span>', '<span><i class="icon ion-ios-arrow-right"></i></span>']
    });
    $(".image-carousel").owlCarousel({
        center: true,
        loop: true,
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        MouseDrag: true,
        touchDrag: true,
        items: 1,
        autoplay: false,
        autoplayHoverPause: false,
        dots: true,
        nav: true,
        navText: ['<span><i class="icon ion-ios-arrow-left"></i></span>', '<span><i class="icon ion-ios-arrow-right"></i></span>']
    });
});
