const toDoContainer = document.querySelector('.toDoWrap');
const toDoForm = toDoContainer.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('.js-toDoInput');
const toDoListContainer = document.createElement('ul');
toDoListContainer.className = 'js-toDoList';
let toDoArr = [];

// 로컬스토리지 저장된 ToDoList 있는지 체크
function toDoStorageChk() {
    const toDoList = localStorage.getItem('toDoList');
    if(toDoList !== null) {
        getToDoList(toDoList);
    }
}

// 이벤트 발생 시 리스트 저장
function setToDoList() {
    toDoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        if(currentValue !== '') {
            toDoArr.push({
                text: currentValue,
                id: `listItem${toDoArr.length + 1}`
            });
            // localStorage.setItem('toDoList', toDoArr);
            localStorage.setItem('toDoList', JSON.stringify(toDoArr));
            getToDoList(toDoArr);
            toDoInput.value = '';
        }
    });
}

// 리스트가 있는 경우
function getToDoList(toDoList) {
    if(!toDoArr.length) { // 저장된 리스트가 있는 경우
        toDoArr = JSON.parse(toDoList);
        for(let i = 0; i < toDoArr.length; i++) {
            const loadList = document.createElement('li');
            loadList.id = toDoArr[i].id;
            let listTxt = document.createElement('span');
            listTxt.innerText = toDoArr[i].text;
            let listBtn = document.createElement('button');
            listBtn.className = 'btnDelete';

            loadList.appendChild(listTxt);
            loadList.appendChild(listBtn);
            toDoListContainer.appendChild(loadList);
        }
    } else { // 새로운 리스트 추가하는 경우
        const addList = document.createElement('li');
        addList.id = toDoArr[toDoArr.length-1].id;
        let listTxt = document.createElement('span');
        listTxt.innerText = toDoArr[toDoArr.length-1].text;
        let listBtn = document.createElement('button');
        listBtn.className = 'btnDelete';

        addList.appendChild(listTxt);
        addList.appendChild(listBtn);
        toDoListContainer.appendChild(addList);
    }
    toDoContainer.appendChild(toDoListContainer);
}

function init() {
    toDoStorageChk();
    setToDoList();
}
init();