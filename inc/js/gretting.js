const greetingContainer = document.querySelector('.js-greeting-wrap');
const form = greetingContainer.querySelector('.js-form');
const input = form.querySelector('.js-input');
const greetingTxt = greetingContainer.querySelector('.js-greeting');

// 로컬스토리지 저장된 이름이 있는지 체크
function storageChk(){
    const currentUser = localStorage.getItem('currentUser');
    if(!currentUser) {
        setName();
    } else {
        getName(currentUser);
    }
}

// 이름이 없는 경우 이벤트 발생 시 저장
function setName() {
    form.classList.add('on');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentUser = input.value;
        if(currentUser !== ''){
            localStorage.setItem('currentUser', currentUser);
            getName(currentUser);
        }
    });
}

// 이름이 있는 경우
function getName(currentUser) {
    if(form.classList.contains('on')) {
        form.classList.remove('on');
    }
    greetingTxt.classList.add('on');
    greetingTxt.innerText = `Hello ${currentUser} :)`;
}

function init() {
    storageChk();
}
init();