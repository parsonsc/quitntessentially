
$(document).ready(function () {
    $('.mobile-nav').on('click', '.parent i', function (e) {
        var $this = $(this);
        var $next_level = $this.parents("nav").data("menu-level");
        var $sub_level = $this.parent().data("sub-level");
        var $current_level_text = $this.prev().text();
        //$('[data-level-control="backwards"]').text($current_level);
        $next_level += 1;
        if ($next_level > 0) {
            if ($next_level == 1) {
                $current_level_text = "Back to Home";
            }
            $('[data-menu-control="backwards"]').text($current_level_text).attr("data-visibility", "true");
        }
        $('.mobile-nav, [data-menu-control="backwards"]').attr('data-current-level', $next_level);
        $("nav[data-menu-level='" + $next_level + "'] ul[data-sub-level='" + $sub_level + "']").attr("data-visible", "true");
    });

    $('[data-menu-control="backwards"]').on('click', function (e) {
        var $current_level = $(this).attr("data-current-level");
        $("nav[data-menu-level='" + $current_level + "'] ul ").attr("data-visible", "false");
        $current_level--;
        $('.mobile-nav, [data-menu-control="backwards"]').attr('data-current-level', $current_level);
        $(".mobile-nav").attr('data-current-level', $current_level);
        if ($current_level == 0) {
            $('[data-menu-control="backwards"]').text("").attr("data-visibility", "false");
        }
        if ($current_level == 1) {
            $('[data-menu-control="backwards"]').text("Back to Home").attr("data-visibility", "true");
        }
    });

    $(".card-content h2").each(function () {
        var myDiv = $(this);
        if (myDiv.text().length > 60) {
            myDiv.text(myDiv.text().substring(0, 60) + '...');
        }
    });




    //$('.card-slider .card ').height($('.card-slider .card').height());

    // $.fn.shorten = function (settings) {

    //     var config = {
    //         showChars: 200,
    //         ellipsesText: "...",
    //         moreText: "more",
    //         lessText: "less"
    //     };

    //     if (settings) {
    //         $.extend(config, settings);
    //     }

    //     $(document).off("click", '.morelink');

    //     $(document).on({
    //         click: function () {

    //             var $this = $(this);
    //             if ($this.hasClass('less')) {
    //                 $this.removeClass('less');
    //                 $this.html(config.moreText);
    //             } else {
    //                 $this.addClass('less');
    //                 $this.html(config.lessText);
    //             }
    //             $this.parent().prev().toggle();
    //             $this.prev().toggle();
    //             return false;
    //         }
    //     }, '.morelink');

    //     return this.each(function () {
    //         var $this = $(this);
    //         if ($this.hasClass("shortened")) return;

    //         $this.addClass("shortened");
    //         var content = $this.html();
    //         if (content.length > config.showChars) {
    //             var c = content.substr(0, config.showChars);
    //             var h = content.substr(config.showChars, content.length - config.showChars);
    //             var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
    //             $this.html(html);
    //             $(".morecontent span").hide();
    //         }
    //     });

    // };

    // $(".more p").shorten({
    //     "showChars": 50,
    //     "moreText": '<i class="icon icon-down"></i>',
    //     "lessText": '<i class="icon icon-up"></i>',
    // });

    // var text = $('.text-slider-content p'),
    //     btn = $('.icon-down'),

    // if (h > 90) {
    //     btn.addClass('less');
    //     btn.css('display', 'block');
    // }

    // btn.click(function (e) {
    //     e.stopPropagation();

    //     if (btn.hasClass('less')) {
    //         btn.removeClass('less');
    //         btn.addClass('more');

    //         text.animate({ 'height': h });
    //     } else {
    //         btn.addClass('less');
    //         btn.removeClass('more');
    //         text.animate({ 'height': '90px' });
    //     }
    // });

    $('.text-slider').slick(
        {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            responsive:
            [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

    /*Parallax problem on IOS*/
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        $('body').addClass("ios");
    }


    /* Select */
    $('.select').on('click', '.dropdown-menu li', function (e) {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(this).parents(".select").find(".selected-value").val($(this).data("value"));
    });

    $('.site-menu [data-toggle=tab]').click(function () {
        if ($(window).width() < 768) {
            if ($(this).parent().hasClass('active')) {
                $($(this).data("target")).toggleClass('active');
            }
        }
    });
    $('.full-screen-toggle').click(function (e) {
        e.preventDefault();
    });

    //     $(' [data-toggle=tab]').click(function(){
    //         if ($(window).width() < 768) {  
    //              if ($(this).parent().hasClass('active')){
    //                  $($(this).attr("data-target")).toggleClass('active');
    //        }    
    //       
    //  }
    //})

    /* Collapse */
    //    function CollapseState(e) {
    //        $(e.target).prev('').toggleClass('expanded');
    //    }
    //    $('.collapse').on('hide.bs.collapse', CollapseState);
    //    $('.collapse').on('show.bs.collapse', CollapseState);

    $('[data-media-xs="collapse"]').click(function (e) {
        if ($(window).width() >= 768) {
            e.stopPropagation();
        }
    });


    /* Popover */
    $('[data-toggle="popover"]').popover({
        trigger: "hover"
    });






    $('.gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery-thumbnails'
    });
    $('.gallery-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider',
        focusOnSelect: true
    });

    $(window).scroll(function () {
        minimized();
    });

    $(".gallery-slider").lightGallery({
        thumbnail: true,
        selector: '.gallery-slider .full-screen-gallery'
    });

    /*   Full Screen Panel
    --------------------------------------*/
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('body').removeClass('no-scroll full-screen-nav');
        }
    });

    function full_screen_panel($tab) {
        if ($tab) {
            //$('body').addClass('no-scroll full-nav');
            $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var $active = $(e.target).attr('data-target');
                //console.log($active);
                $('a[data-target="' + $active + '"]').parent().addClass("active").siblings().removeClass("active");
            });

        }
        else { $('body').toggleClass('no-scroll full-screen'); }
    }

    /*  Accordion Filter 
    ----------------------------------------------*/
    $('body').on('click', '[data-toggle=collapse-next]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dropdown = $(this).closest(".dropdown li a");
        $(dropdown).toggleClass("open");
        $(this).parents('li').siblings().find('.collapse-panel').collapse('hide');
        $(this).parents('li').siblings().find('a.open').removeClass('open');
        var $target = $(this).next('.collapse-panel');
        $(this).next().collapse('toggle');
    });

    /*ACCORDION ICON*/
    $('.accordion .collapse.in').parent().addClass('expanded');
    $('.accordion').on('show.bs.collapse', function (e) {
        $(e.target).parent().addClass('expanded');
    }).on('hide.bs.collapse', function (e) {
        $(e.target).parent().removeClass('expanded');
    });

    /* cut text if have more then 60 caracters */
    $('a.promo-title').each(function () { var text = $(this).text(); if (text.length > 30) { $(this).text(text.substring(0, 60) + '...'); } });

    /*Haert like - dislike*/
    $("i.like-heart").on("click", function () {
        $(this).toggleClass("liked")
    });

    /*Html  video player*/
    $('.video-holder').on("click", function () {
        var myVideo = $('.video-holder').children('video');
        $(this).toggleClass('video-button-invisible');
        if (myVideo.get(0).paused)
            myVideo.get(0).play();
        else
            myVideo.get(0).pause();
    });

    /*Checkboxes, for table. Can click only on one checkbox*/
    $(".check-box-table input:checkbox").change(function () {
        $(".check-box-table input:checkbox").prop("checked", false);
        $(this).prop("checked", true);
    })
    /*Add promotion box*/
    $(".card-content p.add-this").on("click", function () {
        $(this).toggleClass('white icon-check')
        $(this).parent().toggleClass('add-promo');
    });

    /*Info open*/
    $('.hover-add i.icon-info-circled').on('click', function () {
        $(this).parent().prev().addClass('info-open');
    });
    /*Private members - desktop*/
    $('.icon-cross').on('click', function () { $(this).parent().removeClass('info-open') });
    $('html.no-touchevents .over i.icon.icon-plus').on('click', function () {
        $(this).toggleClass('icon-check');
        $(this).parents('.card.info-zoom').toggleClass('checked-block')
    });
    /*Private members - tablet and mobile*/
    // if ($(window).width() > 768) {
    $('html.touchevents .card.info-zoom').on('click', function () {
        $(this).toggleClass('checked-block');
        var icon = $(this).find('.icon-plus');
        icon.toggleClass('icon-check');
        // icon.click().$(this).toggleClass('checked-block');
    });

    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });
    $("button.next").click(function (e) {
        var $active = $('.contact-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
    });
    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }

    /*End of contact us tabs form*/

    /*Nesletter*/
    if ($(window).width() > 300) {
        $('.card.zoom.image-zoom p.icon.icon-plus').on('click', function () {
            $(this).parents(".card.zoom.image-zoom").addClass("chosen");
        });
        $('.card.zoom.image-zoom .img-overlay').on('click', function () {
            // $(this).parents(".card.zoom.image-zoom").removeClass("chosen");
        });
    };

    /*Slick slider*/
    /*Slider local offices slick*/
    $('.office-slider').slick(
        {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            responsive:
            [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

    $('.dark-wide-slider').each(function () {
        var _this = $(this);
        $(this).slick({
            infinite: true,
            slide: '.col-md-6',
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            appendArrows: ($(_this).hasClass('no-append')) ? '' : $($(_this).parent(), _this),
            responsive:
            [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });

    $('.card-slider').each(function () {
        var _this = $(this);
        $(this).slick({
            slide: '.col-md-4',
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            appendArrows: ($(_this).hasClass('no-append')) ? '' : $($(_this).parent(), _this),
            responsive:
            [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // appendArrows: $('.main-slider-navigation')
                    }
                },
            ]
        });
    });

    $('.account-slider').each(function () {
        var _this = $(this);
        $(this).slick({
            slide: '.col-sm-3',
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            appendArrows: ($(_this).hasClass('no-append')) ? '' : $($(_this).parent(), _this),
            responsive:
            [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });

    $('[data-slider="true"]').slick({
        arrows: true,
        prevArrow: '<i class="icon-left"></i>',
        nextArrow: '<i class="icon-right"></i>',
        responsive:
        [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });



    $('.article-to-slider').each(function () {
        var _this = $(this);
        $(this).slick({
            infinite: true,
            slide: '.office-description',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            appendArrows: ($(_this).hasClass('no-append')) ? '' : $($(_this).parent(), _this),
            responsive:
            [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });

    $('.case-slider').each(function () {
        var _this = $(this);
        $(this).slick({
            infinite: true,
            slide: '.col-md-4',
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<i class="icon icon-left"></i>',
            nextArrow: '<i class="icon icon-right"></i>',
            appendArrows: ($(_this).hasClass('no-append')) ? '' : $($(_this).parent(), _this),
            responsive:
            [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });

    $('.slider-exceptional-people').each(function () {
        var _this = $(this);
        $(this).slick({
            infinite: true,
            slide: '.col-md-3',
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            responsive:
            [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });


    /*Scrol to top*/
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /*footer mobile accordion*/
    $('.footer-accordion, .my-q-intro').on('show.bs.collapse', function () {
        $('.footer-accordion .in').collapse('hide');
    });

    $('.footer-accordion p[data-toggle="collapse"], .my-q-intro p[data-toggle="collapse"]').click(function (e) {
        if ($(window).width() >= 768) {
            e.stopPropagation();
        }
    });
    /*End of footer mobile accordion*/
    /*Magnifico youtube video */
    if ($('.video').length) {
        $('.icon-video-player, .video.icon-ellipse').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: function (url) {
                            var m = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
                            if (m && m[7].length == 11) {
                                return m[7];
                            } else {
                                alert("Could not extract video ID.");
                            }
                            return null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    }
                }
            }
        });
    }
    /*Scrol page to the section*/
    // $('a.page-scroll').bind('click', function (event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top()
    //     }, 1300, 'easeInOutExpo');
    //     event.preventDefault();
    // });

    /*Dropdown*/
    // $(".dropdown-menu li").click(function(){
    // $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).text() + ' <i class="icon icon-down-open-big"></i>');
    // $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
    // });

});
window.onload = function imgGrid() {
    var imgs = $('div.services-row').length;
    for (i = 1; i < imgs + 1; i++) {
        var num = i - 1;
        var red = document.getElementsByClassName("services-row")[num];
        if (i % 3 == 0) {
            red.classList.add('third-row');
        } else if (i % 2 == 0) {
            red.classList.add('second-row');
        } else {
            red.classList.add('first-row');
        }

    };
}

$(window).load(function () {
    if ($window.width() >= 768) {
        $('.user-panel .collapse').addClass('in');
        $('.footer-accordion .collapse, .my-q-intro .collapse').collapse('show');

    }
});

//function collapseIcon(e) {
//    $(e.target).prev('.panel-title').toggleClass('expand');
//}
//$('.collapse').on('hide.bs.collapse', collapseIcon);
//$('.collapse').on('show.bs.collapse', collapseIcon);

/*Creat slider on resize*/

var $window = $(window),
    $slider = $('.promo-to-slider');

var $related_slider = $('.related-slider');

function resize() {
    //calculateLIsInRow();
    var $body = $('body');
    if ($window.width() < 1200) {
        if (!$related_slider.hasClass('slick-initialized')) {
            $related_slider.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: '<i class="icon-left"></i>',
                nextArrow: '<i class="icon-right"></i>',
                responsive: [
                    {
                        breakpoint: 3200,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }
        $(".category-filter .dropdown").removeClass("open");
    }

    if ($window.width() <= 768) {
        $body.addClass('mobile');
        $('.user-panel .collapse').removeClass('in');
        $('.user-panel .tab-pane').addClass('active in');


    } else {
        $('.user-panel .collapse').collapse("show");
        $body.removeClass('mobile');

        $('.user-panel .tab-pane').removeClass('active in');
        $('.user-panel .panel-login').addClass('active in')
        $slider.removeClass('article-slider-holder');
    }
    if ($window.width() < 992) {
        $("body").removeClass('sticked-to-menu');
    }
}

$window
    .resize(resize)
    .trigger('resize');

$(window).load(function () {
    //calculateLIsInRow();
    minimized();
    var $body = $('body');
    if ($('.sticky').length) {
        var filter_offset = $('.sticky').offset().top;
    }
    if ($(window).scrollTop() > filter_offset) {
        if ($window.width() >= 992) {
            $body.addClass('sticked-to-menu');
        }
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > filter_offset) {
            if ($window.width() >= 992) {
                $body.addClass('sticked-to-menu');
            }
        }
        else { $body.removeClass('sticked-to-menu'); }
    });
});

/*  Minimized Header
---------------------------------------------------*/
function minimized() {
    var $body = $('body');
    if ($(this).scrollTop() > 10) {
        $body.addClass('minimized');
    } else {
        $body.removeClass('minimized');
    }
}
function calculateLIsInRow() {
    var $list = $(".footer-navigation ul");
    if ($(window).width() >= 1200) {
        $('.footer-navigation ul li').each(function () {
            if ($(this).position().top > 0) {
                $(this).addClass("last");
            }
            else {
                $(this).removeClass("last");
                $(".footer-navigation ul").removeAttr("style");
            }
        });
        if ($('.footer-navigation ul li').hasClass("last")) {
            var list_el = $(".footer-navigation ul li:not('.last'):last");
            var offset = list_el.offset().left - list_el.parent().offset().left;
            offset = ($list.outerWidth() - list_el.outerWidth()) - offset;
            $list.css("right", "-" + offset + 20 + "px");
        }
    }
    else {
        $(".footer-navigation ul").removeAttr("style");
    }
}

$.fn.menu = function (options) {
    return this.each(function (i, el) {
        var el = el,
            $el = $(el),
            $option,
            $body = $('body');
        var menu = $('[data-menu="full-screen"]');

        el.init = function () {
            $el.click(function () {
                $option = $el.data("site-menu");
                $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                    var $current = $(e.target).attr('data-target');
                    $('[data-target="' + $current + '"]').parent().addClass("active").siblings().removeClass("active");
                });
                if ($option == "toggle") {
                    if ($body.hasClass("no-scroll full-screen")) {
                        el.close($body);
                    } else {
                        el.open($body);
                    }
                }
                else if ($option == "show") {
                    if (!$body.hasClass("no-scroll full-screen")) {
                        el.open($body);

                    }
                }
            })
            //            menu.click(function () {
            //                if (!$body.hasClass("no-scroll full-screen")) {
            //                    el.open($body);
            //                    $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            //                        var $active = $(e.target).attr('data-target');
            //                        var parent = $(e.target).attr('data-parent');
            //                        $('a[data-target="' + $active + '"]').parent().addClass("active").siblings().removeClass("active");
            //                    });
            //                }
            //            });
        };
        el.open = function () {
            $body.addClass('no-scroll full-screen');
            options.onOpen.call();
        };
        el.close = function () {
            $body.removeClass('no-scroll full-screen');
            options.onClose.call();
        };
        el.init();
    });

};

$("[data-site-menu]").menu({
    onOpen: myQuestionOpenCallback,
    onClose: myQuestionCloseCallback
});

function myQuestionOpenCallback() {
    //alert("answer opened!");
}
function myQuestionCloseCallback() {
    //alert("answer closed!");
}



var $windowWidth = "";
$(window).on({
    load: function () {

        if ($(window).width() > 767) { 
            $('.card-slider').each(function () {
                var maxHeight = 0;
                console.log(maxHeight);
                $(this).find('.col-md-4 .card .card-content').each(function () {
                    maxHeight = Math.max(maxHeight, $(this).height());
                }).height(maxHeight);

            });
        }
        else {
            $('[data-media-xs="collapse"]').next().collapse("hide");
        }
    },
    scroll: function () {
    },
    resize: function () {
        $windowWidth = $(window).width();
        if ($windowWidth > 767) {
            $('.card-slider').each(function () {
                var maxHeight = 0;
                console.log(maxHeight);
                $(this).find('.col-md-4 .card .card-content').each(function () {
                    maxHeight = Math.max(maxHeight, $(this).height());
                }).height(maxHeight);

            });
            $('[data-media-xs="collapse"]').next().collapse("show");

        } else {
            $('[data-media-xs="collapse"]').next().collapse("hide");
        }
    },
});


$(window).load(function () {
    /*Masonary*/
    if ($('.box-grid').length) {
        $('.box-grid').masonry({
            itemSelector: '.card',
        });
    }
});