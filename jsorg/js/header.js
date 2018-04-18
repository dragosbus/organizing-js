function select(element) {
    return document.querySelector(element);
}

function click(element, fn) {
    return element.addEventListener('click', fn);
}

let modal = select('[rel="js-modal"]');

// put event handlers for header links here
const headerHandler = () => {
    click(select('[rel="js-controls"]'), e => {
        e.preventDefault();
        e.stopPropagation();

        let url = e.target.getAttribute('href');
        fetch(url).then(res => console.log(res))
    });
};

headerHandler();