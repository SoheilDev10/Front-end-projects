//add vars
const myBody = document.querySelector("body");
const themeSwitcher = document.querySelector(".btn-theme");
const iconTheme = document.querySelector(".theme");
const main = document.getElementById("main");
const header = document.querySelector(".header");
const addNote = document.querySelector(".add-note");
const myNotes = document.querySelector(".notes");
let count = 0;

function NoteApp() {
    //add theme switcher
    themeSwitcher.addEventListener('click', () => {
        myBody.classList.toggle("light");
        if (myBody.classList.contains("light"))
            iconTheme.src = "/picture/moon.png";
        else
            iconTheme.src = "/picture/icon-sun.svg";
    });
    makeItemsOfNotes(JSON.parse(localStorage.getItem("notes")));
    //add inputs
    addNote.addEventListener('click', () => {
        const infoNote = document.createElement("div");
        infoNote.className = "info-note d-flex flex-column justify-content-center w-100 gap-3 pt-4";
        infoNote.innerHTML = `<label for="title" class="form-label title">عنوان</label>
            <input type="text" id="title" class="form-control form-control-lg title-input" placeholder="عنوان...">
            <label for="text" class="form-label text">یاد داشت</label>
            <input type="text" class="form-control form-control-lg text-input" id="text" placeholder="یاد داشت...">
            <div class="d-flex align-items-center gap-3 w-100 holder-save-note"><button class="save-note" type="button"><i class="fi fi-br-bookmark"></i>ذخیره نوت</button>
            </div`;
        main.insertBefore(infoNote, header.nextSibling);
        //save in local storage
        const titleInput = document.querySelector(".title-input");
        const textInput = document.querySelector(".text-input");
        const saveNote = document.querySelector(".save-note");
        let status = true;
        saveNote.addEventListener('click', () => {
            const titleValue = titleInput.value.trim();
            const textValue = textInput.value.trim();
            if (!titleValue || !textValue) {
                const holderSaveNote = document.querySelector(".holder-save-note");
                const textError = document.createElement("p");
                textError.textContent = "لطفا تمام فیلد های بالا را پر کنید.";
                textError.classList.add("fs-5", "text-danger");
                if (status == true) {
                    status = false;
                    holderSaveNote.append(textError);
                }
                setTimeout(() => {
                    textError.remove();
                    status = true;
                }, 5000);
            } else {
                titleInput.value = "";
                textInput.value = "";
                const notes = !localStorage.getItem("notes") ? [] : JSON.parse(localStorage.getItem("notes"));
                const infoOfNotes = {
                    title: titleValue,
                    text: textValue
                };
                notes.push(infoOfNotes);
                makeItemsOfNotes([infoOfNotes]);
                localStorage.setItem("notes", JSON.stringify(notes));
            }
        });
        //create item by enter
        document.addEventListener('keydown', (e) => {
            if (e.key === "Enter")
                saveNote.click();
        });
    });
}
//create items
function makeItemsOfNotes(value) {
    value.forEach(val => {
        const li = document.createElement("li");
        li.className = "items d-flex flex-column";
        li.draggable = "true";
        li.innerHTML = `<div class="info-notes d-flex justify-content-between">
                    <div class="change d-flex gap-2">
                        <button class="change-btns d-flex align-items-center gap-2 bin"><i
                                class="fi fi-rr-trash"></i>حذف</button>
                        <button class="change-btns d-flex align-items-center gap-2 edit"><i
                                class="fi fi-rr-file-edit"></i>ویرایش</button>
                    </div>
                    <div class="name-note d-flex gap-2">
                        <i class="fi fi-rr-note"></i>
                        <p class="count-note text-primary">نوت<span class="count">${count+=1}:</span></p>
                        <p class="title-note">${val.title}</p>
                    </div>
                </div>
                <div class="div-text-notes d-flex align-items-center p-3 mt-3">
                    <p class="text-notes">${val.text}</p>
                </div>`;
        myNotes.append(li);
        //remove note
        const bin = li.querySelector(".bin");
        bin.addEventListener('click', () => {
            const selectLi = bin.parentElement.parentElement.parentElement;
            const items = [...document.querySelectorAll(".items")];
            const indexItems = items.indexOf(selectLi);
            deleteNote(indexItems);
            selectLi.remove();
        });
        //edit note
        const edit = li.querySelector(".edit");
        edit.addEventListener('click', () => {
            const selectLi = edit.closest(".items");
            const divTextNote = selectLi.querySelector(".div-text-notes");
            selectLi.classList.toggle("editing");
            const items = [...document.querySelectorAll(".items")];
            const indexEdit = items.indexOf(selectLi);
            items.forEach(item => {
                if (item.classList.contains("editing")) {
                    const inputEdit = document.createElement("input");
                    inputEdit.type = "text";
                    inputEdit.classList.add("input-edit");
                    const textNote = selectLi.querySelector(".text-notes");
                    inputEdit.value = textNote.textContent;
                    textNote.classList.add("d-none");
                    divTextNote.append(inputEdit);
                    inputEdit.addEventListener('keydown', (e) => {
                        if (e.key === "Enter") {
                            textNote.classList.remove("d-none");
                            const editText = textNote.textContent = inputEdit.value.trim();
                            inputEdit.remove();
                            selectLi.classList.remove("editing");
                            editNote(indexEdit, editText);
                        }
                    });
                }
            })
        });
        //add dragging option
        li.addEventListener('dragstart', () => {
            li.classList.add("dragging");
        });
        li.addEventListener('dragend', () => {
            li.classList.remove("dragging");
        });
        myNotes.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (e.target.classList.contains("items") && !e.target.classList.contains("dragging")) {
                const items = [...document.querySelectorAll(".items")];
                const draggingItem = document.querySelector(".dragging");
                const currentPos = items.indexOf(draggingItem);
                const newPos = items.indexOf(e.target);
                if (currentPos > newPos)
                    myNotes.insertBefore(draggingItem, e.target);
                else
                    myNotes.insertBefore(draggingItem, e.target.nextSibling);
                const notes = JSON.parse(localStorage.getItem("notes"));
                const removed = notes.splice(currentPos, 1);
                notes.splice(newPos, 0, removed[0]);
                localStorage.setItem("notes", JSON.stringify(notes));
            }
        });
    });
}

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function editNote(index, editText) {
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes[index].text = editText;
    localStorage.setItem("notes", JSON.stringify(notes));
}

document.addEventListener('DOMContentLoaded', NoteApp);