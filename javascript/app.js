var footer = $( 'footer.site-footer' ),
    header = $( 'header.site-header' );

var handle_scroll = function() {

    var scroll_top  = document.body.scrollTop,
        scroll_btm  = scroll_top + get_viewport_height(),
        page_height = get_page_height();


    // page top || page bottom - show footer / normal header
    if ( scroll_top < 20 || page_height - scroll_btm < 20 ) {
        footer.style.opacity = 1;
        header.removeClass('scrolled');
    }

    // mid page - hide footer, show header
    else {
        footer.style.opacity = 0;
        header.addClass('scrolled');
    }

    console.log(header.className);
};

addEvent( window, 'scroll', handle_scroll );
