const themeSwitcher = document.querySelector(".switch-theme");
const myBody = document.querySelector("body");
const iconTheme = themeSwitcher.children[0];
const bgTheme = document.querySelector(".bg-theme");
const inputText = document.querySelector(".text-list");
const addListBtn = document.querySelector(".addlist");
const showError = document.querySelector(".show-error ");
const theList = document.querySelector(".list");
const deleteEL = document.querySelectorAll(".delete");

function TodoList() {
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
    theList.addEventListener('dragover', (e) => {
        if (e.target.classList.contains("my-items") && !e.target.classList.contains("dragging")) {
            const draggingItem = document.querySelector(".dragging");
            const items = [...theList.querySelectorAll(".my-items")];
            const currentPos = items.indexOf(draggingItem);
            const newPos = items.indexOf(e.target);
            if (currentPos > newPos) {
                theList.insertBefore(draggingItem, e.target);
                const todos = JSON.parse(localStorage.getItem("todos"));
                const removed = todos.splice(currentPos, 1);
                todos.splice(newPos, 0, removed[0]);
                localStorage.setItem("todos", JSON.stringify(todos));
            } else {
                theList.insertBefore(draggingItem, e.target.nextSibling);
            }
        }
    });
    maketodos(JSON.parse(localStorage.getItem("todos")));
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
}

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
    });
}

document.addEventListener('DOMContentLoaded', TodoList);