const body = document.querySelector('body');
const wrap = body.querySelector('#wrap');

const IMG_CNT = 5;

function setRandomImg() {
    const randomCnt = Math.floor(Math.random() * IMG_CNT);
    const image = new Image();
    image.src = `/inc/images/${randomCnt + 1}.jpg`;
    image.alt = '';
    image.className = 'js-bg';
    wrap.prepend(image);
}

function init() {
    setRandomImg();
}
init();