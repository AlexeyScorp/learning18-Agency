/**
 * Created by lezar on 23.04.2018.
 */
var static_menu = document.getElementById('page_header-nav'),
    header_height = document.getElementById('main_header'),
    contact_us_height = document.getElementById('contact_us'),
    scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ),
    nav_main = document.getElementById('main_header'),
    nav_page = document.getElementById('page_header-nav'),
    anchors_main = [].slice.call(nav_main.querySelectorAll('li')),
    anchors_page = [].slice.call(nav_page.querySelectorAll('li'))
    ;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > header_height.offsetHeight & scrolled < scrollHeight - contact_us_height.offsetHeight) {
        static_menu.style.visibility = 'visible';
    }
    else {
        static_menu.style.visibility = 'hidden';
    }
}

for (var i = 0; i < anchors_main.length; i++) {
    anchors_main[i].onclick = change_nav;
}
for (var i = 0; i < anchors_page.length; i++) {
    anchors_page[i].onclick = change_nav;
}

function active_waiting(ident) {
    for (i = 0; i < anchors_main.length; i++) {
        if (anchors_main[i].firstChild.hash == ident) {
            anchors_main[i].classList.toggle('nav_active');
            anchors_main[i].classList.toggle('nav_waiting');
        } else {
            anchors_main[i].className = 'nav_waiting';
        }
    }

    for (i = 0; i < anchors_main.length; i++) {
        if (anchors_page[i].firstChild.hash == ident) {
            anchors_page[i].classList.toggle('nav_active');
            anchors_page[i].classList.toggle('nav_waiting');
        } else {
            anchors_page[i].className = 'nav_waiting';
        }
    }
}

function change_nav(event) {
    var eventElement = event.target;
    active_waiting(eventElement.hash);
}