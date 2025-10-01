//Add some vars
const themeSwitcher = document.querySelector(".switch-theme");
const myBody = document.querySelector("body");
const iconTheme = themeSwitcher.children[0];
const bgTheme = document.querySelector(".bg-theme");
const inputText = document.querySelector(".text-list");
const addListBtn = document.querySelector(".addlist");
const showError = document.querySelector(".show-error ");
const theList = document.querySelector(".list");
const countItems = document.querySelector(".count");
let count = 0;

//Create main function
function TodoList() {
    //Add change theme page
    themeSwitcher.addEventListener('click', () => {
        myBody.classList.toggle("light");
        iconTheme.classList.toggle("moon");
        iconTheme.classList.toggle("sun");
        if (iconTheme.classList.contains("moon")) {
            iconTheme.src = "/picture/icon-moon.svg";
            bgTheme.src = "/picture/bg-desktop-light.jpg";
        } else {
            iconTheme.src = "/picture/icon-sun.svg";
            bgTheme.src = "/picture/bg-desktop-dark.jpg";
        }
    });
    addListBtn.addEventListener('mousedown', () => {
        addListBtn.style.padding = "0.2rem 0.7rem 0.2rem 0.7rem";
    });
    addListBtn.addEventListener('mouseup', () => {
        addListBtn.style.padding = "0.3rem 0.9rem 0.3rem 0.9rem";
    });
    //Add drag property
    theList.addEventListener('dragover', (e) => {
        if (e.target.classList.contains("my-items") && !e.target.classList.contains("dragging")) {
            const draggingItem = document.querySelector(".dragging");
            const items = [...theList.querySelectorAll(".my-items")];
            const currentPos = items.indexOf(draggingItem);
            const newPos = items.indexOf(e.target);
            if (currentPos > newPos) {
                theList.insertBefore(draggingItem, e.target);
            } else {
                theList.insertBefore(draggingItem, e.target.nextSibling);
            }
            const todos = JSON.parse(localStorage.getItem("todos"));
            const removed = todos.splice(currentPos, 1);
            todos.splice(newPos, 0, removed[0]);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    });
    maketodos(JSON.parse(localStorage.getItem("todos")));
    itemsOfApp();
    //Add event for button add
    addListBtn.addEventListener('click', () => {
        const myItem = inputText.value.trim();
        if (myItem) {
            inputText.value = "";
            const todos = !localStorage.getItem("todos") ? [] :
                JSON.parse(localStorage.getItem("todos"));
            const currentTodo = {
                item: myItem,
                isComplated: false
            };
            todos.push(currentTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
            maketodos([currentTodo]);
        } else {
            const textError = document.createElement("p");
            const theInterval = setInterval(() => {
                textError.classList.add("text-error", "text-danger", "fs-5", "position-absolute");
                textError.textContent = "لطفا فیلد زیر را پر کنید.";
                showError.append(textError);
            }, 500);
            setTimeout(() => {
                clearInterval(theInterval)
                textError.remove();
            }, 5000);
        }
    });
    sendByEnter();
}

//Create items
function maketodos(todoArray) {
    todoArray.forEach(todoObject => {
        const newLi = document.createElement("li");
        newLi.className = "my-items p-3 d-flex justify-content-between align-items-center";
        newLi.draggable = "true";
        const myContent = document.createElement("div");
        myContent.className = "content d-flex gap-4";
        const inputCheck = document.createElement("input");
        inputCheck.className = "choose";
        inputCheck.type = "checkbox";
        if (todoObject.isComplated == true) {
            inputCheck.checked = "checked";
            newLi.classList.add("complated");
        } else {
            newLi.classList.remove("complated");
        }
        const addedText = document.createElement("p");
        addedText.className = "added-text";
        addedText.textContent = todoObject.item;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.type = "button";
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fi fi-tr-circle-xmark fs-4";
        deleteBtn.append(deleteIcon);
        myContent.append(inputCheck, addedText);
        newLi.append(myContent, deleteBtn);
        theList.append(newLi);
        newLi.addEventListener('dragstart', () => {
            newLi.classList.add("dragging");
        });
        newLi.addEventListener('dragend', () => {
            newLi.classList.remove("dragging");
        });
        //Delete items
        deleteBtn.addEventListener('click', () => {
            const removedItem = deleteBtn.parentElement;
            const items = [...document.querySelectorAll(".my-items")];
            const indexRemove = items.indexOf(removedItem);
            removedItem.classList.add("fall");
            removeItem(indexRemove);
            count--;
        });
        //Check items
        inputCheck.addEventListener('click', () => {
            const checkedItem = inputCheck.parentElement.parentElement;
            const checked = inputCheck.checked;
            const items = [...theList.querySelectorAll(".my-items")];
            const indexCheck = items.indexOf(checkedItem);
            containsItem(indexCheck, checked);
            if (checked == true) {
                newLi.classList.add("complated");
                count--;
                countItems.textContent = count;
            } else {
                newLi.classList.remove("complated");
                count++;
                countItems.textContent = count;
            }
        });
    });
}

//Add property to create items by enter button
function sendByEnter() {
    inputText.addEventListener('keydown', (e) => {
        if (e.key === "Enter")
            addListBtn.click();
    })
}

function removeItem(index) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function containsItem(index, isComplated) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos[index].isComplated = isComplated;
    localStorage.setItem("todos", JSON.stringify(todos));
}

function itemsOfApp() {
    const items = [...document.querySelectorAll(".my-items")];
    items.forEach(item => {
        if (!item.classList.contains("complated"))
            count++;
        else
            count--;
    })
    countItems.textContent = count;
}
document.addEventListener('DOMContentLoaded', TodoList);