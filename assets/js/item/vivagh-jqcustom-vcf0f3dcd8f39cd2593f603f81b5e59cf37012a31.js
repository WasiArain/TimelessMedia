/*!/wp-content/themes/vivagh/framework/js/custom.js*/
jQuery.noConflict();
jQuery(document).ready(function($) {
    "use strict";
    if (dttheme_urls.loadingbar === "enable") {
        Pace.on("done", function() {
            $(".loader").fadeOut(500);
            $(".pace").remove()
        })
    }
    if ($('.dt-sc-icon-box-type9').length) {
        setTimeout(function() {
            $('.dt-sc-icon-box-type9').each(function() {
                $(this).find('.icon-wrapper').css('height', $(this).find('.icon-content').outerHeight(!0))
            })
        }, 1000)
    }
    if ($('ul.dt-sc-tabs-vertical-frame').length) {
        $('ul.dt-sc-tabs-vertical-frame').each(function() {
            $(this).css('min-height', $(this).height())
        })
    }
    if ($('ul.dt-sc-tabs-vertical').length) {
        $('ul.dt-sc-tabs-vertical').each(function() {
            $(this).css('min-height', $(this).height())
        })
    }
    $("select").each(function() {
        if ($(this).css('display') != 'none') {
            $(this).wrap('<div class="selection-box"></div>')
        }
    });
    $().UItoTop({
        easingType: 'easeOutQuart'
    });
    $('.activity-type-tabs > ul >li:first').addClass('selected');
    $('.dir-form > .item-list-tabs > ul > li:first').addClass('selected');

    function designthemesMegaMenu() {
        var screenWidth = $(document).width(),
            containerWidth = $("#header .container").width(),
            containerMinuScreen = (screenWidth - containerWidth) / 2;
        if (containerWidth == screenWidth) {
            $("li.menu-item-megamenu-parent .megamenu-child-container").each(function() {
                var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
                    MegaMenuChildContainerWidth = $(this).width();
                if ((ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth) {
                    var SwMinuOffset = screenWidth - ParentLeftPosition;
                    var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
                    var marginFromLeftActual = (marginFromLeft) + 25;
                    var marginLeftFromScreen = "-" + marginFromLeftActual + "px";
                    $(this).css('left', marginLeftFromScreen)
                }
            })
        } else {
            $("li.menu-item-megamenu-parent .megamenu-child-container").each(function() {
                var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
                    MegaMenuChildContainerWidth = $(this).width();
                if ((ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth) {
                    var marginFromLeft = (ParentLeftPosition + MegaMenuChildContainerWidth) - screenWidth;
                    var marginLeftFromContainer = containerMinuScreen + marginFromLeft + 20;
                    if (MegaMenuChildContainerWidth > containerWidth) {
                        var MegaMinuContainer = ((MegaMenuChildContainerWidth - containerWidth) / 2) + 10;
                        var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
                        marginLeftFromContainerVal = "-" + marginLeftFromContainerVal + "px";
                        $(this).css('left', marginLeftFromContainerVal)
                    } else {
                        marginLeftFromContainer = "-" + marginLeftFromContainer + "px";
                        $(this).css('left', marginLeftFromContainer)
                    }
                }
            })
        }
    }
    designthemesMegaMenu();

    function designthemesMenuHover() {
        if ($('body').hasClass('left-stretched-header')) {} else if (!$('body').hasClass('left-header-creative') && !$('body').hasClass('overlay-header')) {
            $("li.menu-item-depth-0,li.menu-item-simple-parent ul li").mouseenter(function() {
                if ($(this).find(".megamenu-child-container").length) {
                    $(this).find(".megamenu-child-container").stop().fadeIn('fast')
                } else {
                    $(this).find("> ul.sub-menu").stop().fadeIn('fast')
                }
            }).mouseleave(function() {
                if ($(this).find(".megamenu-child-container").length) {
                    $(this).find(".megamenu-child-container").stop(!0, !0).hide()
                } else {
                    $(this).find('> ul.sub-menu').stop(!0, !0).hide()
                }
            })
        }
    }
    $("div.dt-video-wrap").fitVids();
    var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i) || navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) ? !0 : !1;
    var currentWidth = window.innerWidth || document.documentElement.clientWidth;
    if (typeof dttheme_urls !== 'undefined') {
        if (dttheme_urls.nicescroll == "enable" && $(window).width() > 767 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && !navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
            $("html").niceScroll({
                zindex: 999999,
                cursorborder: "1px solid #424242"
            })
        }
        var borderwidth = parseInt(dttheme_urls.borderwidth, 10);
        if (isMobile && dttheme_urls.mobilestickynav == "enable") {
            $(dttheme_urls.stickyele).sticky({
                topSpacing: borderwidth
            })
        }
        if (dttheme_urls.stickynav === "enable" && currentWidth > 767) {
            $(dttheme_urls.stickyele).sticky({
                topSpacing: borderwidth
            }).on('sticky-start', function() {
                $('body').addClass('sticky-header')
            }).on('sticky-end', function() {
                $('body').removeClass('sticky-header')
            })
        }
    }
    $("#dt-menu-toggle").on('click', function(event) {
        event.preventDefault();
        var $menu = $("nav#main-menu").find("ul.menu:first");
        $menu.slideToggle(function() {
            $menu.css('overflow', 'visible');
            $menu.toggleClass('menu-toggle-open')
        });
        var $right = $("nav#main-menu").find("ul.menu-right");
        if ($right.length) {
            $right.slideToggle(function() {
                $right.css('overflow', 'visible');
                $right.toggleClass('menu-toggle-open')
            })
        }
    });
    $(".dt-menu-expand").on('click', function() {
        if ($(this).hasClass("dt-mean-clicked")) {
            $(this).text("+");
            if ($(this).prev('ul').length) {
                $(this).prev('ul').slideUp(300)
            } else {
                $(this).prev('.megamenu-child-container').find('ul:first').slideUp(300)
            }
        } else {
            $(this).text("-");
            if ($(this).prev('ul').length) {
                $(this).prev('ul').slideDown(300)
            } else {
                $(this).prev('.megamenu-child-container').find('ul:first').slideDown(300)
            }
        }
        $(this).toggleClass("dt-mean-clicked");
        return !1
    });
    $(".dt-arrow-menu-expand").on('click', function() {
        if ($(this).hasClass("dt-mean-clicked")) {
            if ($(this).parent().next('ul').length) {
                $(this).parent().next('ul').slideUp(300)
            } else {
                $(this).parent().next('.megamenu-child-container').slideUp(300)
            }
        } else {
            if ($(this).parent().next('ul').length) {
                $(this).parent().next('ul').slideDown(300)
            } else {
                $(this).parent().next('.megamenu-child-container').slideDown(300)
            }
        }
        $(this).toggleClass("dt-mean-clicked");
        $(this).toggleClass("fa fa-angle-right fa fa-angle-down");
        return !1
    });
    currentWidth = window.innerWidth || document.documentElement.clientWidth;
    if (currentWidth > 767) {
        designthemesMenuHover()
    }
    if (dttheme_urls.menusearchtype === 'type1' || dttheme_urls.menusearchtype === 'type3') {
        $('.dt-search-icon').on('click', function(e) {
            e.stopPropagation();
            $('#header .top-menu-search-container').toggleClass('show-top-menu-search')
        })
    }
    $('.dt-portfolio-single-slider').each(function() {
        var $pagination = $arrow = $thumbnail = $centermode = $variablewidth = $autocarousel = !1;
        var $numberofslides = parseInt($(this).attr('data-numberofslides'), 10);
        var $slidewidth = $(this).attr('data-slidewidth');
        if ($(this).attr('data-thumbnail') !== undefined) {
            var $pagination = !0;
            var $thumbnail = $(this).parents('.dt-portfolio-single-slider-wrapper').find('#bx-pager')
        }
        if ($(this).attr('data-arrow') !== undefined) {
            var $arrow = !0
        }
        if ($(this).attr('data-pagination') !== undefined) {
            var $pagination = !0
        }
        if ($(this).attr('data-centermode') !== undefined) {
            var $centermode = !0;
            var $variablewidth = !0
        }
        if ($(this).attr('data-variablewidth') !== undefined) {
            var $variablewidth = !0;
            $numberofslides = 1
        }
        if ($(this).attr('data-autocarousel') !== undefined) {
            var $autocarousel = !0
        }
        if ($(this).find("li").length > 1) {
            if ($centermode || $variablewidth) {
                $(this).slick({
                    autoplay: $autocarousel,
                    dots: $pagination,
                    infinite: !0,
                    centerMode: $centermode,
                    slidesToShow: $numberofslides,
                    slidesToScroll: 1,
                    arrows: $arrow,
                    variableWidth: $variablewidth,
                    swipe: !0,
                })
            } else {
                if (($slidewidth != '' && $slidewidth > 0) || $numberofslides > 1) {
                    $(this).bxSlider({
                        auto: $autocarousel,
                        video: !0,
                        useCSS: !1,
                        pager: $pagination,
                        autoHover: !0,
                        adaptiveHeight: !0,
                        controls: $arrow,
                        pagerCustom: $thumbnail,
                        infiniteLoop: !0,
                        nextText: '<i class="icomoon icon-Arrow-OutRight"></i>',
                        prevText: '<i class="icomoon icon-Arrow-OutLeft"></i>',
                        slideWidth: $slidewidth,
                        minSlides: 1,
                        maxSlides: $numberofslides,
                        moveSlides: 1,
                        responsive: !0,
                        touchEnabled: !0
                    })
                } else {
                    $(this).bxSlider({
                        auto: $autocarousel,
                        video: !0,
                        useCSS: !1,
                        pager: $pagination,
                        autoHover: !0,
                        adaptiveHeight: !0,
                        controls: $arrow,
                        pagerCustom: $thumbnail,
                        infiniteLoop: !0,
                        nextText: '<i class="icomoon icon-Arrow-OutRight"></i>',
                        prevText: '<i class="icomoon icon-Arrow-OutLeft"></i>',
                        touchEnabled: !0
                    })
                }
            }
        }
    });
    var $pphoto = $('a[data-gal^="prettyPhoto[gallery-listing]"]');
    if ($pphoto.length && !$pphoto.parents('.dt-sc-portfolio-container, .portfolio-container-fullpage').hasClass('swiper-wrapper')) {
        $($pphoto).iLightBox({
            attr: 'href',
            fullViewPort: 'stretch',
            controls: {
                mousewheel: !0,
                swipe: !0,
                thumbnail: !0
            },
            path: 'vertical',
            infinite: !0,
        })
    }
    $('.downcount').each(function() {
        var el = $(this);
        el.downCount({
            date: el.attr('data-date'),
            offset: el.attr('data-offset')
        })
    });
    $('p:empty').each(function() {
        $(this).next('br').remove();
        $(this).remove()
    });
    if (currentWidth > 767) {
        if ($('#primary').hasClass('with-both-sidebar')) {
            if (($('#secondary-left > div').is(':empty') && $('#secondary-right > div').is(':empty'))) {
                $('#primary').addClass("content-full-width").removeClass("page-with-sidebar with-both-sidebar")
            } else if ($('#secondary-left > div').is(':empty')) {
                $('#primary').addClass("with-right-sidebar").removeClass("with-both-sidebar")
            } else if ($('#secondary-right > div').is(':empty')) {
                $('#primary').addClass("with-left-sidebar").removeClass("with-both-sidebar")
            }
        } else if ($('#primary').hasClass('with-left-sidebar')) {
            if ($('#secondary-left > div').is(':empty')) {
                $('#primary').addClass("content-full-width").removeClass("page-with-sidebar with-left-sidebar")
            }
        } else if ($('#primary').hasClass('with-right-sidebar')) {
            if ($('#secondary-right > div').is(':empty')) {
                $('#primary').addClass("content-full-width").removeClass("page-with-sidebar with-right-sidebar")
            }
        }
    }
    $(window).on("resize", function() {
        if ($(".apply-isotope").length) {
            $(".apply-isotope").isotope();
            setTimeout(function() {
                $(".apply-isotope").isotope('layout')
            }, 400)
        }
        var $portfolio_container = jQuery('.dt-sc-portfolio-container:not(.swiper-wrapper, .portfolio-container-carousel)');
        $portfolio_container.find('.column').removeClass('animate');
        $portfolio_container.isotope({
            itemSelector: '.portfolio',
            percentPosition: !0,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        designthemesMegaMenu();
        calculateSwiperHeight()
    });

    function animatePortfolioSection() {
        $('.portfolio.animate').each(function() {
            $(this).one('inview', function(event, visible) {
                if (visible == !0) {
                    var $this = $(this),
                        $animation = ($this.data("animationeffect") !== undefined) ? $this.data("animationeffect") : "slideUp";
                    var $delay = ($this.data("animationdelay") !== undefined) ? $this.data("animationdelay") : 400;
                    setTimeout(function() {
                        $this.addClass($animation)
                    }, $delay)
                }
            })
        });
        $(window).scroll()
    }
    $(window).on('load', function() {
        var portfolioHeight = $('.dt-sc-portfolio-wrapper .portfolio:first').height();
        $('.icon-link-title').css('height', portfolioHeight + 'px');
        if ($(".apply-isotope").length) {
            $(".apply-isotope").isotope();
            setTimeout(function() {
                $(".apply-isotope").isotope('layout')
            }, 400)
        }
        animatePortfolioSection();
        var $portfolio_container = jQuery('.dt-sc-portfolio-container:not(.swiper-wrapper, .portfolio-container-carousel)');
        $portfolio_container.isotope({
            itemSelector: '.portfolio',
            percentPosition: !0,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        if ($("div.dt-sc-portfolio-sorting").length) {
            $("div.dt-sc-portfolio-sorting a").on('click', function() {
                $("div.dt-sc-portfolio-sorting a").removeClass("active-sort");
                var selector = $(this).attr('data-filter');
                $(this).addClass("active-sort");
                $(this).parents('.dt-sc-portfolio-container-wrapper').find('.dt-sc-portfolio-container:not(.swiper-wrapper, .portfolio-container-carousel) .column').removeClass('animate flash shake bounce tada swing wobble pulse flip flipIn flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInUp bounceInDown bounceInLeft bounceInRight bounceOut bounceOutUp bounceOutDown bounceOutLeft bounceOutRight rotateIn rotateInUpLeft rotateInDownLeft rotateInUpRight rotateInDownRight rotateOut rotateOutUpLeft rotateOutDownLeft rotateOutUpRight rotateOutDownRight hinge rollIn rollOut lightSpeedIn lightSpeedOut slideDown slideUp slideLeft slideRight slideExpandUp expandUp expandOpen bigEntrance hatch floating tossing pullUp pullDown stretchLeft stretchRight zoomIn');
                $(this).parents('.dt-sc-portfolio-container-wrapper').find('.dt-sc-portfolio-container:not(.swiper-wrapper, .portfolio-container-carousel)').isotope({
                    filter: selector,
                    masonry: {},
                    animationEngine: 'jquery'
                });
                return !1
            })
        }
        portfolioRepeatAnimation();

        function portfolioRepeatAnimation() {
            var divs = $('.dt-sc-portfolio-container.repeat-animation .portfolio.animate');
            if (divs.length) {
                setTimeout(function() {
                    var index = Math.floor(Math.random() * divs.length);
                    divs.eq(index).removeClass('animate');
                    setTimeout(function() {
                        divs.eq(index).addClass('animate');
                        portfolioRepeatAnimation()
                    }, 200)
                }, ~~(Math.random() * (300 - 60 + 1) + 2000))
            }
        }
        if (($("ul.entry-gallery-post-slider").length) && ($("ul.entry-gallery-post-slider li").length > 1)) {
            $("ul.entry-gallery-post-slider").bxSlider({
                auto: !1,
                video: !0,
                useCSS: !1,
                pager: '',
                autoHover: !0,
                adaptiveHeight: !0
            })
        }
        $('.portfolio-container-carousel').each(function() {
            var column = $(this).attr('data-column');
            var carouselopts = $(this).attr('data-carouselopts');
            if (carouselopts == 'arrow' || carouselopts == 'autowitharrow') {
                var $prev = $(this).parents('.portfolio-container-carousel-wrapper').find(".portfolio-prev");
                var $next = $(this).parents('.portfolio-container-carousel-wrapper').find(".portfolio-next")
            } else {
                var $prev = '';
                var $next = ''
            }
            var $auto = !1;
            if (carouselopts == 'auto' || carouselopts == 'autowitharrow') {
                var $auto = !0
            }
            $(this).carouFredSel({
                responsive: !0,
                auto: $auto,
                width: '100%',
                prev: $prev,
                next: $next,
                height: 'variable',
                scroll: parseInt(1),
                items: {
                    visible: {
                        min: 1,
                        max: parseInt(column)
                    }
                },
                onCreate: function() {
                    var $this = $(this);
                    var $animation = ($this.data("animationeffect") !== undefined) ? $this.data("animationeffect") : '';
                    var $delay = ($this.data("animationdelay") !== undefined) ? $this.data("animationdelay") : '';
                    setTimeout(function() {
                        $this.addClass($animation)
                    }, $delay)
                }
            })
        });
        $('.portfolio-swiper-container').each(function() {
            var $swiper_item = $(this);
            var effect = $swiper_item.find('.swiper-wrapper').attr('data-carouseleffect');
            var numberofrows = parseInt($swiper_item.find('.swiper-wrapper').attr('data-carouselnumberofrows'), 10);
            var slidespercolumn = 1;
            if (effect == 'multirows') {
                slidespercolumn = numberofrows
            }
            var autoheight = !0;
            if (slidespercolumn > 1) {
                var autoheight = !1
            }
            var autoplay = parseInt($swiper_item.find('.swiper-wrapper').attr('data-carouselautoplay'), 10);
            if (autoplay == '') {
                autoplay = 0
            }
            var slidesperview = parseInt($swiper_item.find('.swiper-wrapper').attr('data-carouselslidesperview'), 10);
            var loopmode = ($swiper_item.find('.swiper-wrapper').attr('data-carouselloopmode') == 'true') ? !0 : !1;
            var mousewheelcontrol = ($swiper_item.find('.swiper-wrapper').attr('data-carouselmousewheelcontrol') == 'true') ? !0 : !1;
            var centermode = ($swiper_item.find('.swiper-wrapper').attr('data-carouselcentermode') == 'true') ? !0 : !1;
            var verticaldirection = ($swiper_item.find('.swiper-wrapper').attr('data-carouselverticaldirection') == 'true') ? !0 : !1;
            var direction = 'horizontal';
            if (verticaldirection) {
                direction = 'vertical'
            }
            var pagination_type = '';
            var pagination_class = '';
            var bulletpagination = ($swiper_item.find('.swiper-wrapper').attr('data-carouselbulletpagination') == 'true') ? !0 : !1;
            if (bulletpagination) {
                var pagination_class = '.swiper-pagination';
                var pagination_type = 'bullets'
            }
            var progresspagination = ($swiper_item.find('.swiper-wrapper').attr('data-carouselprogresspagination') == 'true') ? !0 : !1;
            if (progresspagination) {
                var pagination_class = '.swiper-progress-pagination';
                var pagination_type = 'progress'
            }
            var spacebetween = parseInt($swiper_item.find('.swiper-wrapper').attr('data-carouselspacebetween'), 10);
            var detailednavclick = $swiper_item.find('.swiper-wrapper').attr('data-carouseldetailednavclick');
            if (detailednavclick != '' && detailednavclick != 'false') {
                var slidesperview = 1
            }
            if (slidesperview == 1) {
                var breakpoint_slides_1 = breakpoint_slides_2 = breakpoint_slides_3 = breakpoint_slides_4 = 1
            } else if (slidesperview == 2) {
                var breakpoint_slides_1 = 2
                var breakpoint_slides_2 = 2
                var breakpoint_slides_3 = 1
                var breakpoint_slides_4 = 1
            } else if (slidesperview == 3) {
                var breakpoint_slides_1 = 3
                var breakpoint_slides_2 = 2
                var breakpoint_slides_3 = 1
                var breakpoint_slides_4 = 1
            } else if (slidesperview >= 4) {
                var breakpoint_slides_1 = 4
                var breakpoint_slides_2 = 2
                var breakpoint_slides_3 = 1
                var breakpoint_slides_4 = 1
            }
            var swiper = new Swiper($swiper_item, {
                simulateTouch: !0,
                roundLengths: !0,
                spaceBetween: spacebetween,
                keyboardControl: !0,
                paginationClickable: !0,
                autoplay: autoplay,
                slidesPerView: slidesperview,
                loop: loopmode,
                mousewheelControl: mousewheelcontrol,
                centeredSlides: centermode,
                direction: direction,
                pagination: pagination_class,
                paginationType: pagination_type,
                effect: effect,
                coverflow: {
                    rotate: 0,
                    stretch: 10,
                    depth: 200,
                    modifier: 1,
                },
                cube: {
                    shadow: !0,
                    slideShadows: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                },
                slidesPerColumn: slidespercolumn,
                breakpoints: {
                    1024: {
                        slidesPerView: breakpoint_slides_1,
                    },
                    768: {
                        slidesPerView: breakpoint_slides_2,
                    },
                    640: {
                        slidesPerView: breakpoint_slides_3,
                    },
                    320: {
                        slidesPerView: breakpoint_slides_4,
                    }
                },
                onInit: function(swiper) {
                    $swiper_item.find('.swiper-arrow-click').each(function() {
                        var arrow = $(this);
                        $(document).on('mousemove', function(event) {
                            var arrow_parent = arrow.parent(),
                                parent_offset = arrow_parent.offset(),
                                pos_left = Math.min(event.pageX - parent_offset.left, arrow_parent.width()),
                                pos_top = event.pageY - parent_offset.top;
                            arrow.css({
                                'left': pos_left,
                                'top': pos_top
                            })
                        })
                    });
                    updateNumberPagination(parseInt(swiper.activeIndex, 10) + 1, (parseInt(swiper.slides.length, 10) - slidesperview) + 1);
                    calculateSwiperHeight()
                },
                onScroll: function(swiper) {
                    if (autoplay > 0) {
                        swiper.startAutoplay()
                    }
                },
                onSlideChangeEnd: function(swiper) {
                    updateNumberPagination(parseInt(swiper.activeIndex, 10) + 1, (parseInt(swiper.slides.length, 10) - slidesperview) + 1)
                },
                onSlideChangeStart: function(swiper) {
                    updateNumberPagination(parseInt(swiper.activeIndex, 10) + 1, (parseInt(swiper.slides.length, 10) - slidesperview) + 1)
                }
            });

            function updateNumberPagination(activeItem, totalItem) {
                $swiper_item.find('.swiper-fraction-pagination .current').html(activeItem);
                $swiper_item.find('.swiper-fraction-pagination .total').html(totalItem);
                $swiper_item.find('.swiper-arrow-click').removeClass('disabled');
                if (activeItem < 2) {
                    $swiper_item.find('.swiper-arrow-click.left').addClass('disabled')
                }
                if (totalItem == activeItem) {
                    $swiper_item.find('.swiper-arrow-click.right').addClass('disabled')
                }
            }
            $swiper_item.find('.enable-click .swiper-arrow-click.left').on('click', function(e) {
                swiper.slidePrev();
                if (autoplay > 0) {
                    swiper.startAutoplay()
                }
                e.preventDefault()
            });
            $swiper_item.find('.enable-click .swiper-arrow-click.right').on('click', function(e) {
                swiper.slideNext();
                if (autoplay > 0) {
                    swiper.startAutoplay()
                }
                e.preventDefault()
            });
            $swiper_item.find('.swiper-simple-arrows .swiper-simple-arrow-prev').on('click', function(e) {
                swiper.slidePrev();
                if (autoplay > 0) {
                    swiper.startAutoplay()
                }
                e.preventDefault()
            });
            $swiper_item.find('.swiper-simple-arrows .swiper-simple-arrow-next').on('click', function(e) {
                swiper.slideNext();
                if (autoplay > 0) {
                    swiper.startAutoplay()
                }
                e.preventDefault()
            });
            $swiper_item.find('.swiper-playpause').on('click', function(e) {
                if ($(this).hasClass('play')) {
                    if (autoplay > 0) {} else {
                        swiper.params.autoplay = 2000
                    }
                    swiper.startAutoplay()
                } else {
                    swiper.stopAutoplay()
                }
                $(this).toggleClass('pause play');
                $(this).find('span').toggleClass('fa-pause fa-play');
                e.preventDefault()
            })
        });
        if ($('#footer').length) {
            if ($('#footer').hasClass('fixed-footer')) {
                var height = $('#footer').find('.fixed-footer-container').height();
                $('#footer').css('height', height)
            }
        }
    });

    function calculateSwiperHeight() {
        $('.portfolio-swiper-container').each(function() {
            var swiperItem = $(this);
            if (swiperItem.parents().hasClass('vc_row') && swiperItem.parents().hasClass('swiper-single-item')) {
                var winHeight = $(window).height();
                if ($('body').hasClass('left-header') || $('body').hasClass('left-header-boxed') || $('body').hasClass('creative-header')) {
                    var headerHeight = 0
                } else {
                    var headerHeight = $('#header-wrapper').height()
                }
                var footerHeight = $('#footer').height();
                var paddingtop = swiperItem.parents('.vc_row').css('padding-top').replace('px', '');
                var paddingbottom = swiperItem.parents('.vc_row').css('padding-bottom').replace('px', '');
                var height = parseInt((winHeight - headerHeight - footerHeight - paddingtop - paddingbottom), 10);
                swiperItem.parents('.dt-sc-portfolio-container-wrapper').height(height);
                swiperItem.find('.portfolio').height(height)
            } else if (swiperItem.parents().hasClass('vc_row') && swiperItem.parents().hasClass('swiper-single-item-with-content')) {
                var mheight = $(window.top).height();
                swiperItem.parents('.dt-sc-portfolio-container-wrapper').height(mheight);
                swiperItem.find('.portfolio').height(mheight)
            } else if (swiperItem.parents().hasClass('vc_row')) {
                var carousel_height = swiperItem.find('.swiper-wrapper').attr('data-carouselheight');
                var carousel_height_wrapper = carousel_height;
                if (carousel_height == '') {
                    var carousel_height = 650;
                    var carousel_height_wrapper = 650
                }
                if (swiperItem.find('.swiper-wrapper').hasClass('details-below-image')) {
                    var carousel_height_wrapper = parseInt(carousel_height) + 82
                }
                swiperItem.parents('.dt-sc-portfolio-container-wrapper').height(carousel_height_wrapper);
                swiperItem.find('.portfolio').height(carousel_height)
            } else {
                var winHeight = $(window).height();
                if ($('body').hasClass('left-header') || $('body').hasClass('left-header-boxed') || $('body').hasClass('creative-header')) {
                    var headerHeight = 0
                } else {
                    var headerHeight = $('#header-wrapper').height()
                }
                var footerHeight = $('#footer').height();
                var height = parseInt((winHeight - headerHeight - footerHeight), 10);
                swiperItem.parents('.dt-sc-portfolio-container-wrapper').height(height);
                swiperItem.find('.portfolio').height(height)
            }
        })
    }
    $(".dt-like-this").on('click', function() {
        var el = jQuery(this);
        if (el.hasClass('liked')) {
            return !1
        }
        var post = {
            action: 'vivagh_like_love',
            post_id: el.attr('data-id')
        };
        $.post(dttheme_urls.ajaxurl, post, function(data) {
            el.find('span').html(data);
            el.addClass('liked')
        });
        return !1
    });
    if ($('body').hasClass('page-template-tpl-onepage')) {
        $('nav#main-menu ul.menu').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: !1
        });
        $('nav#main-menu ul.menu-left').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: !1
        });
        $('nav#main-menu ul.menu-right').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: !1
        });
        $('.left-header nav#main-menu ul.menu, .left-header-boxed nav#main-menu ul.menu, .left-header-creative nav#main-menu ul.menu').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: !1
        })
    } else {
        if ($('nav#main-menu ul.menu li a[href^="#"]').length) {
            $('nav#main-menu ul.menu li a[href^="#"]').on('click', function(e) {
                $(location).attr('href', dttheme_urls.url + '/' + $(this).attr('href'))
            })
        }
    }
    if ($('body').hasClass('left-header-creative')) {
        $('#header-wrapper').simpleSidebar({
            opener: '#toggle-sidebar',
            wrapper: '#main',
            animation: {
                easing: "easeOutQuint"
            },
            sidebar: {
                align: 'left',
            },
            sbWrapper: {
                display: !0
            },
            mask: {
                display: !0
            }
        });
        $('#toggle-sidebar, div[data-simplesidebar="mask"]').on('click', function() {
            $('#toggle-sidebar').toggleClass('close-icon')
        })
    }
    $('input, textarea').placeholder();
    if ($(".dt-sc-scroll-wrapper").length) {
        var scroll_wrapper = $(".dt-sc-scroll-wrapper").niceScroll({
            cursorcolor: "#ffffff",
            cursorwidth: "2px"
        });
        scroll_wrapper.rail.addClass('dt-sc-skin')
    }
    $('.portfolio-container-fullpage:not(.disable-fullpage-jquery)').each(function() {
        $(this).fullpage({
            navigation: !0,
            navigationPosition: $(this).attr('data-fullpagenavigation'),
            css3: !0,
            autoScrolling: $(this).attr('data-disableautoscrolling'),
            fitToSection: !1,
            scrollBar: !0,
            responsiveSlides: !0,
            responsiveWidth: 767,
        })
    });
    if (currentWidth > 767) {
        $('.dt-portfolio-single-fullpage-carousel-wrapper').each(function() {
            $(this).fullpage({
                navigation: !1,
                css3: !0,
                autoScrolling: !1,
                fitToSection: !1,
                scrollOverflow: !0,
                controlArrows: !0,
                controlArrowColor: '#000',
                responsiveSlides: !0,
                responsiveWidth: 767,
            })
        })
    }
    $('.portfolio-parallax').each(function() {
        $(this).jarallax({
            imgWidth: 1366,
            imgHeight: 768
        })
    });
    $('.dt-sc-portfolio-single-fullscreen-slider, .dt-sc-portfolio-fullpage-carousel').find('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: '.slider-nav',
    });
    $('.dt-sc-portfolio-single-fullscreen-slider, .dt-sc-portfolio-fullpage-carousel').find('.slider-nav').slick({
        slidesToShow: parseInt($('.dt-sc-portfolio-single-fullscreen-slider, .dt-sc-portfolio-fullpage-carousel').find('.slider-nav').attr('data-itemscnt'), 10) - 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: !0,
        arrows: !1,
        centerMode: !0,
        focusOnSelect: !0,
        centerPadding: '40px'
    });
    $('.dt-sc-portfolio-single-fullscreen-slider, .dt-sc-portfolio-fullpage-carousel, .single-portfolio-mediaontop-section-holder').each(function() {
        $(this).fullpage({
            autoScrolling: !1,
            css3: !0,
            fitToSection: !1,
            responsiveSlides: !0,
            responsiveWidth: 767,
        })
    });
    $(window).scroll(function() {
        if ($('body').hasClass('animated-right-header')) {
            if ($(window).scrollTop() > 0) {
                $('#header-wrapper').removeClass('hideMenu')
            } else {
                $('#header-wrapper').addClass('hideMenu')
            }
        }
    });
    $('.nav-menu-icon').on('click', function() {
        $('.menu-item.menu-item-depth-0').each(function(i) {
            var menuitem = $(this);
            setTimeout(function() {
                menuitem.toggleClass('menu-item-show')
            }, 100 * i)
        });
        $(this).find('span').each(function(i) {
            var iconitem = $(this);
            setTimeout(function() {
                iconitem.toggleClass('animate-icon')
            }, 100 * i)
        });
        $('#menu-wrapper').toggleClass('nav-show')
    });
    if ($('.dt-sc-onepage-navigation-title-holder').length) {
        $('.dt-sc-onepage-navigation-title-holder li a').on('click', function() {
            if ($(this).parents('.dt-sc-onepage-navigation-title-holder').hasClass('rounded')) {
                $('.dt-sc-onepage-navigation-title-holder li').removeClass('active');
                $(this).parent('li').addClass('active');
                $.scrollTo($(this).attr('href'), 750)
            } else {
                $('.dt-sc-onepage-navigation-title-holder li a').removeClass('active');
                $(this).addClass('active');
                $.scrollTo($(this).attr('href'), 750)
            }
        });
        $(window).scroll(function() {
            $('.dt-sc-onepage-navigation-title-holder li a').each(function() {
                var section_id = $(this).attr('href');
                if ($(window).scrollTop() == 0) {
                    if ($(this).parents('.dt-sc-onepage-navigation-title-holder').hasClass('rounded')) {
                        $('.dt-sc-onepage-navigation-title-holder li').removeClass('active');
                        $('.dt-sc-onepage-navigation-title-holder li:first').addClass('active')
                    } else {
                        $('.dt-sc-onepage-navigation-title-holder li a').removeClass('active');
                        $('.dt-sc-onepage-navigation-title-holder li a:first').addClass('active')
                    }
                } else {
                    var top_of_element = $(section_id).offset().top + 200;
                    var bottom_of_element = $(section_id).offset().top + $(section_id).outerHeight();
                    var bottom_of_screen = $(window).scrollTop() + $(window).height();
                    if ((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element)) {
                        if ($(this).parents('.dt-sc-onepage-navigation-title-holder').hasClass('rounded')) {
                            $('.dt-sc-onepage-navigation-title-holder li').removeClass('active');
                            $('.dt-sc-onepage-navigation-title-holder li a[href="' + section_id + '"]').parent('li').addClass('active')
                        } else {
                            $('.dt-sc-onepage-navigation-title-holder li a').removeClass('active');
                            $('.dt-sc-onepage-navigation-title-holder li a[href="' + section_id + '"]').addClass('active')
                        }
                    }
                }
            })
        })
    }
    if ($('.dt-sc-fixed-content').length) {
        $('.dt-sc-fixed-content').niceScroll({
            zindex: 999999,
            cursorborder: "1px solid #424242"
        })
    }
    if ($('.fullpage-portfolio .dt-portfolio-single-details').length) {
        $('.fullpage-portfolio .dt-portfolio-single-details').niceScroll({
            zindex: 999999,
            cursorborder: "1px solid #424242"
        })
    }
    if (currentWidth > 767) {
        if ($('.dt-sc-portfolio-multiscroll-container').length) {
            $('.dt-sc-portfolio-multiscroll-container').multiscroll({
                css3: !0,
                scrollingSpeed: 800,
            });
            $('.dt-sc-portfolio-container-wrapper').height($('.dt-sc-portfolio-multiscroll-container .portfolio-multiscroll').height());
            if ($('.multiscroll-button').length) {
                $('.multiscroll-button.down').on('click', function() {
                    $.fn.multiscroll.moveSectionDown()
                });
                $('.multiscroll-button.up').on('click', function() {
                    $.fn.multiscroll.moveSectionUp()
                })
            }
        }
    }
    $('.portfolio').each(function() {
        var ilightboxid = $(this).find('.image-overlay').attr('ilightbox-id');
        if ($('.' + ilightboxid).length && !$(this).parents('.dt-sc-portfolio-container, .portfolio-container-fullpage').hasClass('swiper-wrapper')) {
            $('.' + ilightboxid).iLightBox({
                attr: 'ilightbox-img',
                fullViewPort: 'stretch',
                controls: {
                    mousewheel: !0,
                    swipe: !0,
                    thumbnail: !0
                },
                path: 'horizontal',
                infinite: !0,
            })
        }
    });
    var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
    if ($pphoto.length && !$pphoto.parents('.dt-sc-portfolio-container, .portfolio-container-fullpage').hasClass('swiper-wrapper')) {
        $($pphoto).iLightBox({
            attr: 'href',
            fullViewPort: 'stretch',
            controls: {
                mousewheel: !0,
                swipe: !0,
                thumbnail: !0
            },
            path: 'vertical',
            infinite: !0,
        })
    }
    $('.portfolio').each(function() {
        $(this).find('.portfolio-featured-video').on('click', function() {
            if ($(this).hasClass('play')) {
                $(this).get(0).play();
                $(this).parents('.portfolio').removeClass('video-play')
            } else {
                $(this).get(0).pause();
                $(this).parents('.portfolio').addClass('video-play')
            }
            $(this).toggleClass('pause play')
        })
    });
    $('.alignfull').each(function() {
        if ($(this).parents('body').hasClass('has-gutenberg-blocks') && $(this).parents('#primary').hasClass('content-full-width')) {
            if ($(this).parents('body').hasClass('layout-boxed')) {
                var containerWidth = $('.layout-boxed .wrapper').width();
                $(this).css('width', containerWidth);
                var mainLeft = $('#main').offset().left;
                var primaryLeft = $('#primary').offset().left;
                var sectionMargin = parseInt(primaryLeft, 10) - parseInt(mainLeft, 10);
                var offset = 0 - sectionMargin;
                $(this).css('left', offset)
            } else {
                var windowWidth = $(window).width();
                $(this).css('width', windowWidth);
                var $container = '';
                $container = $(this).parents('.content-full-width');
                var offset = 0 - $container.offset().left;
                $(this).css('left', offset)
            }
        }
    });
    if ($('.wp-block-categories-list').length) {
        $('.wp-block-categories-list').find('li').each(function() {
            var span_text = $(this).find('span:first').html();
            $(this).find('span:first').remove()
            $('<span>' + span_text + '</span>').insertAfter($(this).find('a:first'))
        })
    }
});
(function() {
    function designthemestoggleOverlay() {
        if (classie.has(overlay, 'open')) {
            classie.remove(overlay, 'open');
            classie.add(overlay, 'close');
            var onEndTransitionFn = function(ev) {
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener(transEndEventName, onEndTransitionFn)
                }
                classie.remove(overlay, 'close')
            };
            if (support.transitions) {
                overlay.addEventListener(transEndEventName, onEndTransitionFn)
            } else {
                onEndTransitionFn()
            }
        } else if (!classie.has(overlay, 'close')) {
            classie.add(overlay, 'open')
        }
    }
    if (jQuery('div.overlay.overlay-hugeinc').length) {
        var triggerBttn = document.getElementById('trigger-overlay'),
            overlay = document.querySelector('div.overlay'),
            closeBttn = overlay.querySelector('div.overlay-close');
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        }, transEndEventName = transEndEventNames[Modernizr.prefixed('transition')], support = {
            transitions: Modernizr.csstransitions
        };
        triggerBttn.addEventListener('click', designthemestoggleOverlay);
        closeBttn.addEventListener('click', designthemestoggleOverlay)
    }
    if (dttheme_urls.menusearchtype === 'type2') {
        if (jQuery('div.overlay.overlay-search').length) {
            var triggerBttn = document.getElementById('dt-search-icon'),
                overlay = document.querySelector('div.overlay'),
                closeBttn = overlay.querySelector('div.overlay-close');
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            }, transEndEventName = transEndEventNames[Modernizr.prefixed('transition')], support = {
                transitions: Modernizr.csstransitions
            };
            triggerBttn.addEventListener('click', designthemestoggleOverlay);
            closeBttn.addEventListener('click', designthemestoggleOverlay)
        }
    }
})();