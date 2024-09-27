function toggleMenu() {
    var menu = document.getElementById("menuOptions");
    var icon = document.getElementById("icon-menu");
    menu.classList.toggle("show");
    icon.classList.toggle("active");
}
function getScrollDistance() {
    return window.innerWidth >= 768 ? 1250 : 330;
}

function scrollGallery(direction) {
    const gallery = document.querySelector('.cake-gallery');
    const scrollAmount = getScrollDistance();
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const currentScrollLeft = gallery.scrollLeft;

    if (direction === 'left') {
        if (currentScrollLeft === 0) {
            gallery.scrollTo({
                left: maxScrollLeft,
                behavior: 'smooth'
            });
        } else {
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    } else if (direction === 'right') {
        if (currentScrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
            gallery.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }
}

document.querySelector('.left-btn').addEventListener('click', function () {
    scrollGallery('left');
});

document.querySelector('.right-btn').addEventListener('click', function () {
    scrollGallery('right');
});