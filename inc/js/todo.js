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

// Input - submit 이벤트 발생 시 리스트 저장
function saveToDos() {
    toDoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        if(currentValue !== '') {
            toDoArr.push({
                id: `listItem${toDoArr.length + 1}`,
                text: currentValue
            });
            console.log(toDoArr);
            // localStorage.setItem('toDoList', toDoArr);
            localStorage.setItem('toDoList', JSON.stringify(toDoArr));
            getToDos(toDoArr[toDoArr.length - 1].id, toDoArr[toDoArr.length - 1].text);
            toDoInput.value = '';
        }
    });
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
}

// Btn - click 이벤트 발생 시 리스트 삭제
function deleteToDos(event) {

}

function init() {
    loadToDos();
    saveToDos();
}
init();