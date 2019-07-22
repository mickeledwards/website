var $ = jQuery.noConflict();

(function($) {
    "use strict";

    var width  =  $(window).width();

    var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var width = $(window).width();

    /*-------------------------------------------------*/
    /* =  Mobile Hover
    /*-------------------------------------------------*/

    var mobileHover = function() {
        $('*').on('touchstart', function() {
            $(this).trigger('hover');
        }).on('touchend', function() {
            $(this).trigger('hover');
        });
    };

    mobileHover();

    /*-------------------------------------------------*/
    /* =  Menu
    /*-------------------------------------------------*/

    try {
        $('.menu-button').on("click", function() {

            //menu classic, menu sidemenu, menu basic
            var menu = $('#menu');
            var sidemenu = $('#sidemenu');
            var menuResponsiveSidemenu = $('#menu-responsive-sidemenu');

            menu.toggleClass('open');
            sidemenu.addClass('sidemenu open');
            menuResponsiveSidemenu.toggleClass('open');
            menu.addClass('animated slideInDown');
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
        $('.menu-holder ul > li:not(.submenu) > a').on("click", function() {
            $('#menu').removeClass('open');
            $('body').removeClass('no-scroll');
        });
        //basic menu mobile
        $('.close-menu').on("click", function() {

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
    } catch (err) {};

    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/

    try {

        var $mainContainerSimple = $('section[data-isotope="load-simple"] .projects-items');
        $mainContainerSimple.imagesLoaded(function() {

            var $container = $('.projects-items').isotope({
                itemSelector: '.one-item',
                layoutMode: 'fitRows'
            });
            var $simpleFilters = $('#projects .filters');

            $simpleFilters.on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });
            });
            $simpleFilters.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });

        });

    } catch (err) {}

    //blog masonry
    try {
        var $blogContainer = $('.news-items');
        $blogContainer.imagesLoaded(function() {
            $blogContainer.isotope({
                itemSelector: '.one-item',
                layoutMode: 'fitRows'
            });
            $blogContainer.isotope('layout');
        });
    } catch (err) {}

    /*-------------------------------------------------*/
    /* =  HotSpot
    /*-------------------------------------------------*/

    try {
        $(".lg-hotspot-label").show("fast");
        $(".lg-hotspot-label").hide();

        $(".lg-hotspot-button").hover(function() {
            var thisLabel = $(this).siblings(".lg-hotspot-label");
            var thisLabelState = thisLabel.css("display");
            $(".lg-hotspot-label").fadeOut(0).parent().css("z-index", "0");
            if (thisLabelState == "none") {
                thisLabel.fadeIn(0);
                $(this).parent().css("z-index", "999");
            }
        });
    } catch (err) {}

    /*-------------------------------------------------*/
    /* =  Responsive
    /*-------------------------------------------------*/

    var parentHeightKey = [];

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
    $(window).resize(function() {

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

    /*-------------------------------------------------*/
    /* =  Lightbox
    /*-------------------------------------------------*/

    try {
        $('#lightboxinit').lightGallery({
            selector: '.lightboximg',
            download: false
        });
    } catch (err) {}

    /*-------------------------------------------------*/
    /* =  Carousel
    /*-------------------------------------------------*/

    try {
        $(".image-carousel").owlCarousel({
            mouseDrag: true,
            touchDrag: true,
            loop: true,
            items: 1,
            autoplay: false,
            autoplayHoverPause: false,
            dots: true,
            nav: true,
            navText: ['<span><i class="icon icon-arrow-left"></i></span>', '<span><i class="icon icon-arrow-right"></i></span>']
        });
        $(".post-gallery, .project-gallery").owlCarousel({
            center: true,
            items: 1,
            loop: true,
            dots: true
        });
    } catch (err) {}

    /*-------------------------------------------------*/
    /* =  Comparison
    /*-------------------------------------------------*/

    try {
        var dragging = false,
            scrolling = false,
            resizing = false;
        //cache jQuery objects
        var imageComparisonContainers = $('.cd-image-container');
        //check if the .cd-image-container is in the viewport
        //if yes, animate it
        checkPosition(imageComparisonContainers);
        $(window).on('scroll', function() {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ?
                setTimeout(function() {
                    checkPosition(imageComparisonContainers);
                }, 100): requestAnimationFrame(function() {
                    checkPosition(imageComparisonContainers);
                });
            }
        });

        //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
        imageComparisonContainers.each(function() {
            var actual = $(this);
            drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
        });

        //upadate images label visibility
        $(window).on('resize', function() {
            if (!resizing) {
                resizing = true;
                (!window.requestAnimationFrame) ?
                setTimeout(function() {
                    checkLabel(imageComparisonContainers);
                }, 100): requestAnimationFrame(function() {
                    checkLabel(imageComparisonContainers);
                });
            }
        });

        function checkPosition(container) {
            container.each(function() {
                var actualContainer = $(this);
                if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
                    actualContainer.addClass('is-visible');
                }
            });

            scrolling = false;
        }

        function checkLabel(container) {
            container.each(function() {
                var actual = $(this);
                updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
                updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
            });

            resizing = false;
        }

        //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
        function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
            dragElement.on("mousedown vmousedown", function(e) {
                dragElement.addClass('draggable');
                resizeElement.addClass('resizable');

                var dragWidth = dragElement.outerWidth(),
                    xPosition = dragElement.offset().left + dragWidth - e.pageX,
                    containerOffset = container.offset().left,
                    containerWidth = container.outerWidth(),
                    minLeft = containerOffset + 10,
                    maxLeft = containerOffset + containerWidth - dragWidth - 10;

                dragElement.parents().on("mousemove vmousemove", function(e) {
                    if (!dragging) {
                        dragging = true;
                        (!window.requestAnimationFrame) ?
                        setTimeout(function() {
                            animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
                        }, 100): requestAnimationFrame(function() {
                            animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
                        });
                    }
                }).on("mouseup vmouseup", function(e) {
                    dragElement.removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });
                e.preventDefault();
            }).on("mouseup vmouseup", function(e) {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
        }

        function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
            var leftValue = e.pageX + xPosition - dragWidth;
            //constrain the draggable element to move inside his container
            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

            $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });

            $('.resizable').css('width', widthValue);

            updateLabel(labelResizeElement, resizeElement, 'left');
            updateLabel(labelContainer, resizeElement, 'right');
            dragging = false;
        }

        function updateLabel(label, resizeElement, position) {
            if (position == 'left') {
                (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
            } else {
                (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
            }
        }

    } catch (err) {}

})(jQuery);
