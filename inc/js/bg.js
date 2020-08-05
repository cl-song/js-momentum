const body = document.querySelector('body');
const wrap = body.querySelector('#wrap');

const IMG_CNT = 5;

function setRandomImg() {
    const randomCnt = Math.floor(Math.random() * IMG_CNT);
    wrap.style.backgroundImage = `url(./inc/images/${randomCnt + 1}.jpg)`;
    wrap.style.backgroundPosition = '50% 50%';
    wrap.style.backgroundSize = 'cover';
}

function init() {
    setRandomImg();
}
init();