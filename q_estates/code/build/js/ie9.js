$(document).ready(function () {
    $('input, textarea').placeholder();
    $('.list-2 ul').columnize({
        columns : 3,
    }) 
    $('.paragraph-columns').columnize({
        columns : 2,
    }) 
    var $window = $(window);
    function resize() {
        if ($window.width() < 1200) {
            $('.list-2 ul, .list-1 ul').uncolumnize();
            $('.list-2 ul, .list-1 ul').columnize({
                columns : 2
            }) 
        }
        else {
            $('.list-2 ul, .list-1 ul').uncolumnize();
            $('.list-2 ul').columnize({
                columns : 3
            }) 
        }
    }
    $window
        .resize(resize)
        .trigger('resize');
});