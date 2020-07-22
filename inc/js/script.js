const clockContainer = document.querySelector('.js-clock');
const clockTit = clockContainer.querySelector('.js-clock-tit');

function getTime() {
    // 현재 시간
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    
    // 한자리 수일 경우 앞에 0을 붙임
    clockTit.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();