function get_viewport_height() {
    var screen_height = false;

    // all except Explorer
    if (self.innerHeight) {
        screen_height = self.innerHeight;
    }
    // Explorer 6 Strict Mode
    else if (document.documentElement && document.documentElement.clientHeight) {
        screen_height = document.documentElement.clientHeight;
    }
    // other Explorers
    else if (document.body) {
        screen_height = document.body.clientHeight;
    } 

    return screen_height;
}



function get_page_height() {
    var body = document.body,
        html = document.documentElement;

    return Math.max( body.scrollHeight, body.offsetHeight, 
                     html.clientHeight, html.scrollHeight, html.offsetHeight );
}