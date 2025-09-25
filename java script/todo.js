const themeSwitcher = document.querySelector(".switch-theme");
const myBody = document.querySelector("body");
const iconTheme = themeSwitcher.children[0];
const bgTheme = document.querySelector(".bg-theme");
const inputText = document.querySelector(".text-list");
const addListBtn = document.querySelector(".addlist");
const showError = document.querySelector(".show-error ");

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
    addListBtn.addEventListener('click', () => {
        const myItem = inputText.value.trim();
        if (myItem) {
            inputText.value = "";
            const todos = !localStorage.getItem("todos") ? [] :
                JSON.parse(localStorage.getItem("todos"));
            currentTodo = {
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


document.addEventListener('DOMContentLoaded', TodoList);