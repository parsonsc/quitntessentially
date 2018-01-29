$(function () {
    browser.setup(1);

    /*********************
        MENU
    *********************/
    $('body').on('click', '.menu .brown a', function() {
        var link = $(this).attr('href'),
            extract = link.replace("/quintessentially-home", ""),
            url = extract == ""? "landing" : extract.substring(1),
            block = $('div[data-url="'+url+'"]');

        if(block.length) {
            $('html, body').animate({
                'scrollTop': block.offset().top - browser._header_height
            });
            return false;
        }
    });

    /**************************************
        PROPERTY DRILL DOWN & CAPTCHA
    **************************************/
    $('body').on('click', '.captcha-image a', function(e) {
        e.preventDefault();
        $(this).prev().click();
    });

    $('body').on('click', '.drilldown .actions a[data-open]', function(e) {
        e.preventDefault();
        var el = this;
            block = $('div[data-block="'+$(this).data('open')+'"]');
        //Remove tab highlight
        $('a[data-open].active-block').removeClass('active-block');
        
        if(block.hasClass('current-block')) { //Close an already opened block
            block.removeClass('current-block');
            block.slideUp('slow');
        } 
        else { //Or close & open a new block
            var timer = $('.current-block').length ? 500 : 0;
            $('.current-block').slideUp('slow');
            $('.current-block').removeClass('current-block');
            setTimeout(function() {
                block.slideDown('slow');
                block.addClass('current-block');
            }, timer);
            $(el).addClass('active-block');
        }        
    });

    $('body').on('click', '.drilldown a.r', function(e) {
        $('.slides-scroller').stop(true, true).animate({
            'scrollLeft' : '+=' + browser._scrollWid
        });
    });

    $('body').on('click', '.drilldown a.l', function(e) {
        $('.slides-scroller').stop(true, true).animate({
            'scrollLeft' : '-=' + browser._scrollWid
        });
    });

    /*********************
        PRESS PAGE
    *********************/
    $('body').on('click', '.press a.image', function() {
        $(this).closest('.item').find('a.find-more').click();
    });

    $('body').on('click', '.press a.find-more', function() {
        var images = $(this).data('images'),
            html = '',
            i;
        
        //Construct HTML
        for(i=0; i<images.length; i++)
            html+= '<img src="'+images[i]+'" width="700" />';
        
        //Remove existing press boxes
        $('.press-detail').remove();

        //If images exist, then show them
        if(html != '') {
            $('body').append('<div class="press-detail"><div class="images">'+html+'</div><a class="close">&#215;</a></div>');
            scrollbar.disable();
            $('html').addClass('press-view');
        }
    });
    
    $('html').on('click', '.press-detail a.close', function() {
        $('html').removeClass('press-view');
        scrollbar.enable();
    });

    /*************************
        SEARCH
    *************************/
    $('body').on('click', '.go-stage2, .go-stage1', function() {
        var stage2 = $('.stages').toggleClass('two').hasClass('two');
        $('#propertyforyou-search_type').val(stage2 ? 2 : 1);
    });

    $('form#search-form').on('beforeSubmit', function (event) {
        var el = this; 
        if($('#propertyforyou-search_type').val() == 2) {
            $.getJSON(el.action, $(el).serialize()).done(function(data){
                if(data.status == 200) {
                    $('#search-form')[0].reset();
                    $('.go-stage1').click();
                }
            });
            return false;
        }
    });

    /*************************
        DEVELOPMENTS
    *************************/
    $('.portrait-blocks').on('click', '.item', function() {
        if(browser._width < 1024)
            this.href += "?view=list";
    });

    $('form#search-form').on('beforeSubmit', function (event) {
        var el = this; 
        if($('#propertyforyou-search_type').val() == 2) {
            $.getJSON(el.action, $(el).serialize()).done(function(data){
                if(data.status == 200) {
                    $('#search-form')[0].reset();
                    $('.go-stage1').click();
                }
            });
            return false;
        }
    });

    /*************************
        CLONE HEADER
    *************************/
    var cloned = $('.header').clone();
    cloned.addClass('fix');
    $('body').prepend(cloned);
    $('html').addClass('has-fixed-header');
    
    /* Touch & non touch specific */
    if(!Modernizr.touch) {
        $(window).scroll($.debounce(200, function() {
        	check.pause();
        }));
    }

    /* Resize screen */
    $(window).resize(function() {
        browser.setup();
    });
});