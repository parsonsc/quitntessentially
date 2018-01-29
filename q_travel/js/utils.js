//Page functions
var browser = {
    _csrf: null,
    _basewid: 2500,
    _basehei: 1400,
    _width: 0,
    _height: 0,
    _header_height: 0,
    _position: null,
    setup: function(init){
        this._width = $(window).width();
        this._height = $(window).height();
        this._header_height = $(".viewport .header").outerHeight();

        //Error Page: Stop here
        if($('.site-error').length) {
            return false;
        }

        //Fallback for Yucky old browsers
        if(!Modernizr.cssvhunit){
            
        }

        if(init === 1) {
            //Mark current page in menu
            var path = location.pathname,
                base = path.substring(1, path.indexOf('/', 1)),
                el = $('a[href="'+path+'"]');
            if(el.length) {
                el.closest('li').addClass('active');
                el.closest('li[class]').addClass('active');
            }
            if(base != '/')
                $('a[href="/'+base+'"]').closest('li').addClass('active');
            
            //Assign csrf
            this._csrf = $('meta[name="csrf-token"]').attr("content");

            //Enable slideshows
            if($('.slideshow').length) {
                $('.slideshow').cycle({
                    speed: 2500,
                    manualSpeed: 1000,
                    slides: '> .slide',
                    slideClass: '',
                    slideActiveClass: 'active',
                    prev: '.slide-nav.prev',
                    next: '.slide-nav.next',
                    timeout: 10000,
                    autoHeight: false
                });
            }

            if($('.custom-dropdown').length)
                $('.custom-dropdown').dropdown();
        }

        //Grid view on property plus blocks
        if($('.property-plus').length && browser._width > 500) {
            var grid = $(".property-plus").data("grid");
            if(init || grid == null) {
                var min = $('.property-plus').hasClass('team') ? 3 : 2,
                    cell = browser._width > 800 ? 330 : 465;
                $(".property-plus").grid({
                    cellWidth: cell,
                    aspect: 1.33,
                    minCols: min,
                    cellPadding: 5,
                    debug: false,
                    scaleCells: true
                });
            }
            else
                $(".property-plus").grid("refresh");
        }

        //Property Slider
        if($('.custom-slider .slide').length) {
            var slideHei = $('.custom-slider .slide:first').height(),
                slideWid = Math.round(slideHei * 960/630);
            
            $('.custom-slider .slide').css('width', slideWid);
            this._scrollWid = slideWid + 10;
        }
    }
};

//Check various events/properties
var check = {
    pause : function () {
        //Slideshows
        $('.slideshow').each(function() {
            if($(this).is(':in-viewport'))
                $(this).cycle('resume');
            else 
                $(this).cycle('pause');
        });
    }
};

//Scrollbar toggle
var scrollbar = {
    disable: function() {
        //Save scroll position
        browser._position = $(window).scrollTop();
        //Fake it using position:fixed on .viewport
        $('.viewport').css('top', (-1 * browser._position) + 'px').addClass('lock');
        //Set scroll postion to top of the window
        $(window).scrollTop(0);
    },
    enable: function() {
        //Remove faked position from .viewport
        $('.viewport').removeClass('lock').css('top', 'auto');
        //Set the previous scroll position of viewport to browser
        $(window).scrollTop(browser._position);
    }
};

//Custom jquery function
( function($) {
    $.fn.equalHeights = function (minHeight, maxHeight) {
        tallest = (minHeight) ? minHeight : 0;
        this.each(function () {
            if ($(this).height() > tallest) {
                tallest = $(this).height();
            }
        });
        if ((maxHeight) && tallest > maxHeight) tallest = maxHeight;
        return this.each(function () {
            $(this).height(tallest);
        });
    }
    $.cleanHTML = function(data) {
        var tempDiv = $(data).wrap("<div></div>");
        tempDiv.find('script[src]').remove();
        tempDiv.unwrap();
        return tempDiv;
    }
}) (jQuery);