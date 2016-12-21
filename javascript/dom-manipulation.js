
var $ = function(searchParameter) {

    var element = document.querySelector(searchParameter);
    
    element.addClass = function(addClassName) {

        var regex = new RegExp('(^| )' + addClassName + '( |$)');

        if ( ! regex.test(this.className) ) {
            this.className = this.className + ' ' + addClassName;
        }
    };

    element.removeClass = function(removeClassName) {

        var regex = new RegExp('(^| +)' + removeClassName + '( |$)', 'g');

        if ( regex.test(this.className) ) {
            this.className = this.className.replace(regex, '');
        }
    };

    return element;
};


