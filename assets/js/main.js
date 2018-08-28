var $ = jQuery.noConflict();

(function($) {
    "use strict";

    var width  =  $(window).width();

    /*-------------------------------------------------*/
    /* =  Mobile Hover
    /*-------------------------------------------------*/
    var mobileHover = function () {
        $('*').on('touchstart', function () {
            $(this).trigger('hover');
        }).on('touchend', function () {
            $(this).trigger('hover');
        });
    };

    mobileHover();
    /*-------------------------------------------------*/
    /* =  Menu
    /*-------------------------------------------------*/
    try {
        $('.menu-button').on("click",function() {

            //menu classic, menu sidemenu, menu basic
            var menu = $('#menu');
            var sidemenu = $('#sidemenu');
            var menuResponsiveSidemenu = $('#menu-responsive-sidemenu');

            menu.toggleClass('open');
            sidemenu.addClass('sidemenu open');
            menuResponsiveSidemenu.toggleClass('open');
            menu.addClass('animated slideInDown');
            if ( sidemenu.hasClass( "slideInRight" ) ) {
                sidemenu.removeClass('animated slideInRight');
                sidemenu.addClass('animated slideOutRight');
                setTimeout(function(){
                    sidemenu.toggleClass('sidemenu open');
                    sidemenu.removeClass('animated slideOutRight');
                },1000);
            } else {
                sidemenu.addClass('animated slideInRight');
            }
            if(width<991){
                $('body').toggleClass('no-scroll');
            }
        });
        $('.menu-holder ul > li:not(.submenu) > a').on("click",function(){
            $('#menu').removeClass('open');
            $('body').removeClass('no-scroll');
        });
        //basic menu mobile
        $('.close-menu').on("click",function() {

            var menu = $('#menu');

            menu.removeClass('animated slideInDown');
            menu.addClass('animated fadeOutUp');
            setTimeout(function(){
                menu.toggleClass('open');
                menu.removeClass('animated fadeOutUp');
            },1000);
            if(width<991){
                $('body').toggleClass('no-scroll');
            }
        });
    } catch(err) {

    };
    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/
    try {

        var $mainContainerSimple=$('section[data-isotope="load-simple"] .projects-items');
        $mainContainerSimple.imagesLoaded( function(){

            var $container=$('.projects-items').isotope({itemSelector:'.one-item', layoutMode: 'fitRows'});
            var $simpleFilters = $('#projects .filters');

            $simpleFilters.on('click','li',function(){
                var filterValue=$(this).attr('data-filter');$container.isotope({
                    filter:filterValue});
            });
            $simpleFilters.each(function(i,buttonGroup){
                var $buttonGroup=$(buttonGroup);
                $buttonGroup.on('click','li',function(){
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });

        });

    } catch(err) {

    }

    //blog masonry
    try {
        var $blogContainer = $('.news-items');
        $blogContainer.imagesLoaded( function(){
            $blogContainer.isotope({itemSelector: '.one-item', layoutMode: 'fitRows' });
            $blogContainer.isotope('layout');
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Responsive
    /*-------------------------------------------------*/

    var parentHeightKey = [];

    $('div[data-responsive="parent-height"]').each(function() {
        parentHeightKey.push({id:$(this).attr('data-responsive-id'),height:$(this).outerHeight(true)});
    });
    $('div[data-responsive="child-height"]').each(function() {
        var childHeight;
        var childId = $(this).attr('data-responsive-id');

        for(var i=0;i<parentHeightKey.length;i++){
            if(parentHeightKey[i].id == childId) {
                childHeight = parentHeightKey[i].height;
            }
        }
        $(this).css({'height': childHeight + 'px'})
    });
    $(window).resize(function () {

        var currentWidth  =  $(window).width();

        if(currentWidth>767){
            $('div[data-responsive="parent-height"]').each(function() {
                parentHeightKey.push({id:$(this).attr('data-responsive-id'),height:$(this).outerHeight(true)});
            });
            $('div[data-responsive="child-height"]').each(function() {
                var childHeight;
                var childId = $(this).attr('data-responsive-id');

                for(var i=0;i<parentHeightKey.length;i++){
                    if(parentHeightKey[i].id == childId) {
                        childHeight = parentHeightKey[i].height;
                    }
                }
                $(this).css({'height': childHeight + 'px'})
            });
        }
    });
    /*-------------------------------------------------*/
    /* =  Magnific popup
    /*-------------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        closeBtnInside: false,
        fixedContentPos: true
    });
    $('.project-images').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.lightbox',
            type: 'image',
            fixedContentPos: true,
            gallery: {
                enabled:true
            },
            closeBtnInside: false
        });
    });
    $('.lightbox-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true
        },
        closeBtnInside: false
    });

})(jQuery);

$(document).ready(function($) {
    "use strict";

    var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    /*-------------------------------------------------*/
    /* =  Carousel
    /*-------------------------------------------------*/
    try {
        $(".post-gallery, .project-gallery").owlCarousel({
            center: true,
            items:1,
            loop:true
        });
        $(".image-carousel").owlCarousel({
            loop:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            autoplay:false,
            autoplayHoverPause:false,
            dots:true,
            nav:true,
            navText: ['<span><i class="icon ion-ios-arrow-left"></i></span>','<span><i class="icon ion-ios-arrow-right"></i></span>']
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Scroll between sections
    /*-------------------------------------------------*/
    /*-------------------------------------------------*/
    /* =  Skills
    /*-------------------------------------------------*/
    try {
        $('#skills').appear(function() {
            jQuery('.skill-list li span').each(function(){
                jQuery(this).animate({
                    width:jQuery(this).attr('data-percent')
                },2000);
            });
            $('.skill-list li .count').each(function () {
                var number = $(this).attr('data-to');
                $(this).prop('Counter',0).animate({
                    Counter: number
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Modaal
    /*-------------------------------------------------*/

});
