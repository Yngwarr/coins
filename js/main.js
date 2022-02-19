function init() {
    const num = document.getElementById('number');
    const more = document.getElementById('more');
    const less = document.getElementById('less');

    let coins = 8;
    num.innerText = coins;

    more.addEventListener('click', () => num.innerText = `${++coins}`);
    less.addEventListener('click', () => num.innerText = `${coins == 0 ? coins : --coins}`);
}
