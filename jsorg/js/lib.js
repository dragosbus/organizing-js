function select(element) {
    return document.querySelector(element);
}

function click(element, fn) {
    return element.addEventListener('click', fn);
}