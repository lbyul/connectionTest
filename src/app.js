import plus from './plus.js';
import './styles.css';
// const style = require('./styles.css');
import rabbit from './rabbit_large.webp';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${rabbit}"/>`;
});

console.log(plus(10, 5));

function minus(a, b) {
    return a - b;
}