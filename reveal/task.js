const reveal = document.getElementsByClassName('reveal')

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (top > window.innerHeight) {
        return false;
    }

    if (bottom < 0) {
        return false;
    }
    return true;
}

setInterval(() => {
    Array.from(reveal).forEach(el => {
        if (isVisible(el) == true) {
            el.classList.add('reveal_active');
        }
    });
}, 1000);
