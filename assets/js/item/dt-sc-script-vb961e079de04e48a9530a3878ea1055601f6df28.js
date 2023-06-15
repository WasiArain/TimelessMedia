/*!/wp-content/plugins/designthemes-core-features/shortcodes/js/shortcodes.js*/
jQuery(document).ready(function($) {
    "use strict";
    $('.dt-sc-counter').each(function() {
        var $posttext = $(this).find('.dt-sc-counter-number').attr('data-append');
        var $append = '';
        if (typeof $posttext === "undefined") {
            $append = $.animateNumber.numberStepFactories.append('')
        } else {
            $append = $.animateNumber.numberStepFactories.append($posttext)
        }
        $(this).one('inview', function(event, visible) {
            if (visible === !0) {
                var val = $(this).find('.dt-sc-counter-number').attr('data-value');
                $(this).find('.dt-sc-counter-number').animateNumber({
                    number: val,
                    numberStep: $append
                }, 2000)
            }
        })
    });
    $('.dt-sc-toggle').toggleClick(function() {
        $(this).addClass('active')
    }, function() {
        $(this).removeClass('active')
    });
    $('.dt-sc-toggle').click(function() {
        $(this).next('.dt-sc-toggle-content').slideToggle()
    });
    $('.dt-sc-toggle-frame-set').each(function() {
        var $this = $(this),
            $toggle = $this.find('.dt-sc-toggle-accordion');
        $toggle.click(function() {
            if ($(this).next().is(':hidden')) {
                $this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
                $(this).toggleClass('active').next().slideDown()
            }
            return !1
        });
        $this.find('.dt-sc-toggle-accordion:first').addClass("active");
        $this.find('.dt-sc-toggle-accordion:first').next().slideDown()
    });
    if ($(".dt-sc-tooltip-bottom").length) {
        $(".dt-sc-tooltip-bottom").each(function() {
            $(this).tipTip({
                maxWidth: "auto"
            })
        })
    }
    if ($(".dt-sc-tooltip-top").length) {
        $(".dt-sc-tooltip-top").each(function() {
            $(this).tipTip({
                maxWidth: "auto",
                defaultPosition: "top"
            })
        })
    }
    if ($(".dt-sc-tooltip-left").length) {
        $(".dt-sc-tooltip-left").each(function() {
            $(this).tipTip({
                maxWidth: "auto",
                defaultPosition: "left"
            })
        })
    }
    if ($(".dt-sc-tooltip-right").length) {
        $(".dt-sc-tooltip-right").each(function() {
            $(this).tipTip({
                maxWidth: "auto",
                defaultPosition: "right"
            })
        })
    }
    if ($('ul.dt-sc-tabs-horizontal').length > 0) {
        $('ul.dt-sc-tabs-horizontal').each(function() {
            $(this).fpTabs('> .dt-sc-tabs-horizontal-content', {
                effect: 'fade'
            })
        })
    }
    if ($('ul.dt-sc-tabs-horizontal-frame').length > 0) {
        $('ul.dt-sc-tabs-horizontal-frame').each(function() {
            $(this).fpTabs('> .dt-sc-tabs-horizontal-frame-content', {
                effect: 'fade'
            })
        })
    }
    if ($('ul.dt-sc-tabs-vertical').length > 0) {
        $('ul.dt-sc-tabs-vertical').each(function() {
            $(this).fpTabs('> .dt-sc-tabs-vertical-content', {
                effect: 'fade'
            })
        });
        $('.dt-sc-tabs-vertical').each(function() {
            $(this).find("li:first").addClass('first').addClass('current');
            $(this).find("li:last").addClass('last')
        });
        $('.dt-sc-tabs-vertical li').click(function() {
            $(this).parent().children().removeClass('current');
            $(this).addClass('current')
        })
    }
    if ($('ul.dt-sc-tabs-vertical-frame').length > 0) {
        $('ul.dt-sc-tabs-vertical-frame').each(function() {
            $(this).fpTabs('> .dt-sc-tabs-vertical-frame-content', {
                effect: 'fade'
            })
        });
        $('.dt-sc-tabs-vertical-frame').each(function() {
            $(this).find("li:first").addClass('first').addClass('current');
            $(this).find("li:last").addClass('last')
        });
        $('.dt-sc-tabs-vertical-frame li').click(function() {
            $(this).parent().children().removeClass('current');
            $(this).addClass('current')
        })
    }
    $('form[name="frmsubscribe"]').each(function() {
        $(this).submit(function() {
            var $this = $(this);
            var $mc_fname = $this.find("input[name='dt_mc_fname']").val(),
                $mc_email = $this.find("input[name='dt_mc_emailid']").val(),
                $mc_apikey = $this.find("input[name='dt_mc_apikey']").val(),
                $mc_listid = $this.find("input[name='dt_mc_listid']").val();
            $.ajax({
                type: "post",
                dataType: "html",
                url: dttheme_urls.ajaxurl,
                data: {
                    action: 'dt_theme_mailchimp_subscribe',
                    mc_fname: $mc_fname,
                    mc_email: $mc_email,
                    mc_apikey: $mc_apikey,
                    mc_listid: $mc_listid
                },
                success: function(response) {
                    $this.parent().find('.dt_ajax_subscribe_msg').html(response);
                    if (response.match('success') != null) {
                        $this.find("input[name='mc_submit']").attr('disabled', 'disabled');
                        $this.find("input[name='mc_submit']").addClass('disabled')
                    }
                }
            });
            return !1
        })
    });
    $(window).on('load', function() {
        if ($(".carousel_items").length) {
            $(".carousel_items .dt-sc-testimonial-carousel").each(function() {
                var $prev = $(this).parents(".carousel_items").find(".testimonial-prev");
                var $next = $(this).parents(".carousel_items").find(".testimonial-next");
                var $anim = $(this).parents(".carousel_items").attr("data-animation");
                $(this).carouFredSel({
                    responsive: !0,
                    auto: !1,
                    width: '100%',
                    prev: $prev,
                    next: $next,
                    height: 'variable',
                    scroll: {
                        easing: "linear",
                        duration: 500,
                        fx: $anim
                    },
                    items: {
                        width: 1170,
                        height: 'variable',
                        visible: {
                            min: 1,
                            max: 1
                        }
                    },
                    swipe: {
                        onMouse: !0,
                        onTouch: !0,
                    }
                })
            })
        }
        if ($(".dt-sc-partners-carousel").length) {
            $(".dt-sc-partners-carousel").each(function() {
                var $prev = $(this).parents(".dt-sc-partners-carousel-wrapper").find(".partners-prev");
                var $next = $(this).parents(".dt-sc-partners-carousel-wrapper").find(".partners-next");
                var $scroll = $(this).parents(".dt-sc-partners-carousel-wrapper").attr('data-scroll');
                var $visible = $(this).parents(".dt-sc-partners-carousel-wrapper").attr('data-visible');
                $(this).carouFredSel({
                    responsive: !0,
                    auto: !1,
                    width: '100%',
                    height: 'variable',
                    prev: $prev,
                    next: $next,
                    scroll: parseInt($scroll),
                    items: {
                        visible: {
                            min: 1,
                            max: parseInt($visible)
                        }
                    },
                    swipe: {
                        onMouse: !0,
                        onTouch: !0,
                    }
                })
            })
        }
        if ($(".dt-sc-images-carousel").length) {
            $(".dt-sc-images-carousel").each(function() {
                var $prev = $(this).parents(".dt-sc-images-wrapper").find(".images-prev");
                var $next = $(this).parents(".dt-sc-images-wrapper").find(".images-next");
                $(this).carouFredSel({
                    responsive: !0,
                    auto: !1,
                    width: '100%',
                    height: 'variable',
                    prev: $prev,
                    next: $next,
                    scroll: 1,
                    items: {
                        width: 570,
                        height: 'variable',
                        visible: {
                            min: 1,
                            max: 1
                        }
                    },
                    swipe: {
                        onMouse: !0,
                        onTouch: !0,
                    }
                })
            })
        }
        if ($('.dt-sc-twitter-carousel-wrapper').length > 0) {
            $('.dt-sc-twitter-carousel-wrapper .dt-sc-twitter-carousel').carouFredSel({
                width: 'auto',
                height: 'auto',
                scroll: 1,
                direction: 'up',
                items: {
                    height: 'auto',
                    visible: {
                        min: 1,
                        max: 1
                    }
                },
                swipe: {
                    onMouse: !0,
                    onTouch: !0,
                }
            })
        }
        if ($('.dt-sc-testimonial-special-wrapper').length > 0) {
            $('.dt-sc-testimonial-special-wrapper .dt-sc-testimonial-special').carouFredSel({
                responsive: !0,
                auto: !1,
                width: '100%',
                pagination: {
                    container: ".dt-sc-testimonial-images",
                    anchorBuilder: !1
                },
                height: 'auto',
                scroll: {
                    fx: "crossfade"
                },
                items: {
                    visible: {
                        min: 1,
                        max: 1
                    }
                },
                swipe: {
                    onMouse: !0,
                    onTouch: !0,
                }
            })
        }
        $(".dt-sc-donutchart").each(function() {
            var $this = $(this);
            var $bgColor = ($this.data("bgcolor") !== undefined) ? $this.data("bgcolor") : "#5D18D6";
            var $fgColor = ($this.data("fgcolor") !== undefined) ? $this.data("fgcolor") : "#000000";
            var $size = ($this.data("size") !== undefined) ? $this.data("size") : "100";
            $this.donutchart({
                'size': $size,
                'fgColor': $fgColor,
                'bgColor': $bgColor,
                'donutwidth': 5
            });
            $this.donutchart('animate')
        })
    });
    if ($(".dt-sc-parallax-section").length) {
        $('.dt-sc-parallax-section').each(function() {
            $(this).on('inview', function(event, visible) {
                if (visible === !0) {
                    $(this).parallax("50%", 0.5)
                } else {
                    $(this).css('background-position', '')
                }
            })
        })
    }
    if ($(".dt-sc-video-wrapper").length) {
        if ($(".dt-sc-video-item").length) {
            $(".dt-sc-video-item").each(function() {
                $(this).click(function() {
                    $('.video-overlay-inner a').attr('href', $(this).attr('data-link'));
                    $('.dt-sc-video-wrapper img').attr('src', $(this).find('.dt-sc-vitem-thumb img').attr('data-full'));
                    $('.video-overlay-inner h2').html($(this).find('h2').html());
                    $('.video-overlay-inner p').html($(this).find('p').html());
                    $(this).parent('div').children().removeClass('active');
                    $(this).addClass('active')
                })
            })
        }
        $(".video-overlay-inner a").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: !1,
            social_tools: !1,
            deeplinking: !1
        });
        var video_scroll = $(".dt-sc-video-manager-right").niceScroll({
            cursorcolor: "#ffffff",
            cursorwidth: "2px"
        });
        video_scroll.rail.addClass('dt-sc-skin')
    }

    function portfolio_pagination() {
        $('.dt-sc-infinite-portfolio-load-more').each(function() {
            var $this_global = $(this);
            var $completedata_obj = $this_global.attr('data-complete-data');
            var $completedata_json = $.parseJSON($completedata_obj);
            var $pagination_type = $completedata_json['portfolio-pagination-type'];
            var $paged = $completedata_json.paged;
            if ($pagination_type == 'lazy-load') {
                $(window).scroll(function() {
                    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                        var $wrapper = $this_global.prev('.dt-sc-infinite-portfolio-wrapper');
                        $completedata_json.paged = $paged;
                        var $completedata_object = JSON.stringify($completedata_json);
                        $paged++;
                        $.ajax({
                            type: "post",
                            dataType: "html",
                            url: dttheme_urls.ajaxurl,
                            data: {
                                action: "dt_ajax_infinite_portfolios",
                                completedata_json: $completedata_object
                            },
                            beforeSend: function() {
                                jQuery('.dt-sc-infinite-portfolio-load-more').prepend('<i class="fa fa-spinner fa-spin"></i>')
                            },
                            success: function(data) {
                                if (data.length > 0) {
                                    $wrapper.find('.dt-sc-infinite-portfolio-container').isotope('insert', $(data));
                                    setTimeout(function() {
                                        $wrapper.find('.dt-sc-infinite-portfolio-container').isotope('layout')
                                    }, 400);
                                    animatePortfolioAjaxSection()
                                } else {
                                    $this_global.addClass('disable');
                                    $wrapper.find(".message").removeClass("hidden");
                                    setTimeout(function() {
                                        $wrapper.find(".message").addClass('hidden')
                                    }, 5000)
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown) {},
                            complete: function() {
                                jQuery(".dt-sc-infinite-portfolio-load-more i").remove()
                            }
                        })
                    }
                })
            } else if ($pagination_type == 'load-more') {
                $this_global.click(function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var $wrapper = $this.prev('.dt-sc-infinite-portfolio-wrapper');
                    $completedata_json.paged = $paged;
                    var $completedata_object = JSON.stringify($completedata_json);
                    $paged++;
                    $.ajax({
                        type: "post",
                        dataType: "html",
                        url: dttheme_urls.ajaxurl,
                        data: {
                            action: "dt_ajax_infinite_portfolios",
                            completedata_json: $completedata_object
                        },
                        beforeSend: function() {
                            jQuery('.dt-sc-infinite-portfolio-load-more').prepend('<i class="fa fa-spinner fa-spin"></i>')
                        },
                        success: function(data) {
                            if (data.length > 0) {
                                $wrapper.find('.dt-sc-infinite-portfolio-container').isotope('insert', $(data));
                                setTimeout(function() {
                                    $wrapper.find('.dt-sc-infinite-portfolio-container').isotope('layout')
                                }, 400);
                                animatePortfolioAjaxSection()
                            } else {
                                $this.addClass('disable');
                                $wrapper.find(".message").removeClass("hidden");
                                setTimeout(function() {
                                    $wrapper.find(".message").addClass('hidden')
                                }, 5000)
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {},
                        complete: function() {
                            jQuery(".dt-sc-infinite-portfolio-load-more i").remove()
                        }
                    })
                })
            }
        })
    }
    portfolio_pagination();
    animateSection();
    $(window).on('scroll', function() {
        animateSection()
    });

    function animateSection() {
        var applyViewPort = (jQuery("html").hasClass('csstransforms')) ? ":in-viewport" : "";
        jQuery('.animate' + applyViewPort + ':not(.portfolio)').each(function() {
            var $this = jQuery(this),
                $animation = ($this.data("animationeffect") !== undefined) ? $this.data("animationeffect") : "slideUp";
            var $delay = ($this.data("animationdelay") !== undefined) ? $this.data("animationdelay") : 400;
            setTimeout(function() {
                $this.addClass($animation)
            }, $delay)
        })
    }

    function animatePortfolioAjaxSection() {
        jQuery('.portfolio.animate').each(function() {
            jQuery(this).one('inview', function(event, visible) {
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
    if ($('.dt-sc-typer').length) {
        var $typer = $('.dt-sc-typer'),
            txt = $typer.data("text"),
            tot = txt.length,
            ch = 0;
        (function typeIt() {
            if (ch > tot) return;
            $typer.text(txt.substring(0, ch++));
            setTimeout(typeIt, ~~(Math.random() * (300 - 60 + 1) + 60))
        }())
    }
    $('body').delegate('.dt-sc-portfolio-categories-list.with-ajax-loader .column', 'click', function() {
        var $itemid = $(this).attr('data-itemid');
        var $postsperpage = $(this).parents('.dt-sc-portfolio-categories-list').attr('data-postsperpage');
        var $columns = $(this).parents('.dt-sc-portfolio-categories-list').attr('data-columns');
        $.ajax({
            type: 'POST',
            url: dttheme_urls.ajaxurl,
            data: {
                action: 'dt_portfolio_category_item_contents',
                itemid: $itemid,
                postsperpage: $postsperpage,
                columns: $columns,
            },
            beforeSend: function() {
                $('#dt-sc-portfolio-categorywise-content-holder').addClass('loading')
            },
            success: function(response) {
                $('#dt-sc-portfolio-categorywise-content-holder').html(response);
                $('#dt-sc-portfolio-categorywise-content-holder .dt-sc-infinite-portfolio-container').isotope();
                portfolio_pagination()
            },
            complete: function() {
                $('#dt-sc-portfolio-categorywise-content-holder').removeClass('loading')
            }
        })
    });
    if ($('#dt-sc-portfolio-categorywise-content-holder .dt-sc-infinite-portfolio-container').length) {
        $('#dt-sc-portfolio-categorywise-content-holder .dt-sc-infinite-portfolio-container').isotope()
    }
});
(function($) {
    $(".dt-sc-progress").one('inview', function(event, visible) {
        var $this = $(this),
            pvalue = $this.find('.dt-sc-bar').attr('data-value');
        if (visible == !0) {
            $this.find('.dt-sc-bar').animate({
                width: pvalue + "%"
            }, 600, function() {
                $this.find('.dt-sc-bar-text').fadeIn(400)
            })
        }
    })
})(jQuery);