
var handle_scroll = function() {
    var scroll_top  = document.body.scrollTop,
        scroll_btm  = scroll_top + get_viewport_height(),
        page_height = get_page_height(),

        footer = document.querySelector('footer.site-footer');

    // page top || page bottom
    if ( scroll_top < 20 || page_height - scroll_btm < 20 ) {
        footer.style.opacity = 1;
    }
    // page middle
    else {
        footer.style.opacity = 0;
    }
};

addEvent( window, 'scroll', handle_scroll );
