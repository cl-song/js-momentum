const toDoContainer = document.querySelector('.toDoWrap');
const toDoForm = toDoContainer.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('.js-toDoInput');
const toDoListContainer = document.createElement('ul');
toDoListContainer.className = 'js-toDoList';
let toDoArr = [];

// 로컬스토리지 - 저장된 ToDoList 있는지 체크
function loadToDos() {
    const loadedToDos = localStorage.getItem('toDoList');
    if(loadedToDos !== null) {
        toDoArr = JSON.parse(loadedToDos);
        toDoArr.forEach( function(toDoList) {
            getToDos(toDoList.id, toDoList.text);
        });
    }
}

// Input - submit 이벤트 발생 시 저장/보여주기 실행
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    let currentId;
    !toDoArr.length ? currentId = toDoArr.length + 1 : currentId = toDoArr[toDoArr.length-1].id + 1;
    if(currentValue !== '') {
        toDoArr.push({
            id: currentId,
            text: currentValue
        });
        saveToDos();
        getToDos(toDoArr[toDoArr.length - 1].id, toDoArr[toDoArr.length - 1].text);
        toDoInput.value = '';
    }
}

// 리스트 저장
function saveToDos() {
    // localStorage.setItem('toDoList', toDoArr);
    localStorage.setItem('toDoList', JSON.stringify(toDoArr));
}

// 리스트가 있는 경우 화면에 보여줌
function getToDos(id, text) {
    const listLi = document.createElement('li');
    listLi.id = id;
    const listTxt = document.createElement('span');
    listTxt.innerText = text;
    const listBtn = document.createElement('button');
    listBtn.className = 'btnDelete';

    listLi.appendChild(listTxt);
    listLi.appendChild(listBtn);
    toDoListContainer.appendChild(listLi);
    toDoContainer.appendChild(toDoListContainer);
    
    listBtn.addEventListener('click', deleteToDo);
}

// Btn - click 이벤트 발생 시 리스트 삭제
function deleteToDo(event) {
    const _this = event.target;
    const parentLi = _this.parentNode;
    toDoListContainer.removeChild(parentLi);

    const cleanToDos = toDoArr.filter( function(toDoList) {
        return toDoList.id !== parseInt(parentLi.id);
    });
    toDoArr = cleanToDos;
    saveToDos();
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();