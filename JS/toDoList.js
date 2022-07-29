const toDoForm = document.querySelector("#toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDo-list");

let listArr = [];
const LIST_KEY = "listArr";

const saveList = () => {
    localStorage.setItem(LIST_KEY, JSON.stringify(listArr));
}

const deleteList = event => {
    const li = event.target.parentElement;
    listArr = listArr.filter( a => a.id !== parseInt(li.id));
    li.remove();
    saveList();
}

const paintList = listValue => {
    const li = document.createElement("li");
    li.id = listValue.id;
    const span = document.createElement("span");
    span.innerHTML = listValue.text;
    const button = document.createElement("button");
    button.innerHTML = "X";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteList);
}

const handleSubmit = event => {
    event.preventDefault();
    const listValue = toDoInput.value;
    toDoInput.innerHTML = "";
    const listValueObj = {
     text : listValue,
     id : Date.now()
    }
    listArr.push(listValueObj);
    paintList(listValueObj); // 지역변수가 다른 함수에서 사용될 수 있게끔, 인자로 넘겨줌.
    saveList();
}

toDoForm.addEventListener("submit", handleSubmit);

const getList = localStorage.getItem(LIST_KEY);

if (getList) {
    const parsedList = JSON.parse(getList);
    listArr = parsedList;
    parsedList.forEach((el) => {
        paintList(el);
    })
}
