
function changeTab(e) {
    var tab_id = this.getAttribute('data-tab-id') - 1,
        tabs = document.querySelectorAll('ul.tabbed li');

    for (var j = 0; j < tabs.length; j++) {
        tabs[j].className = '';
    }
    tabs[tab_id].className = 'active';
}

var tab_anchors = document.querySelectorAll('.tabs');

for (var i = 0; i < tab_anchors.length; i++) {

    addEvent( tab_anchors[i], 'click', changeTab );
    
}
