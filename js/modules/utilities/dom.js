function $(selector) {
    return document.querySelector(selector);
}

function createElement(tag, attributes = {}) {
    const elem = document.createElement(tag);
    Object.keys(attributes).forEach(attr => elem.setAttribute(attr, attributes[attr]));
    return elem;
}
