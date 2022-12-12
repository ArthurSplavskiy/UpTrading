export const popup = {
    open (selector) {
        document.querySelector('.popup').classList.remove('_open');
        document.querySelector(selector).classList.add('_open');
    },
    close (e, selector) {
        e.target.closest(selector).closest('.popup').classList.remove('_open');
    }
};