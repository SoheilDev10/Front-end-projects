//add vars
const myBody = document.querySelector("body");
const themeSwitcher = document.querySelector(".btn-theme");
const iconTheme = document.querySelector(".theme");
const main = document.getElementById("main");
const header = document.querySelector(".header");
const addNote = document.querySelector(".add-note");
let showError;

function NoteApp() {
    //add theme switcher
    themeSwitcher.addEventListener('click', () => {
        myBody.classList.toggle("light");
        if (myBody.classList.contains("light"))
            iconTheme.src = "/picture/moon.png";
        else
            iconTheme.src = "/picture/icon-sun.svg";
    });
    //add inputs
    addNote.addEventListener('click', () => {
        const infoNote = document.createElement("div");
        infoNote.className = "info-note d-flex flex-column justify-content-center w-100 gap-3 pt-4";
        infoNote.innerHTML = `   <label for="title" class="form-label title">عنوان</label>
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
        saveNote.addEventListener('click', () => {
            const titleValue = titleInput.value.trim();
            const textValue = textInput.value.trim();
            if (!titleValue || !textValue) {
                const holderSaveNote = document.querySelector(".holder-save-note");
                const textError = document.createElement("p");
                textError.textContent = "لطفا تمام فیلد های بالا را پر کنید.";
                textError.classList.add("fs-5", "text-danger");
                showError = setInterval(() => {
                    holderSaveNote.append(textError);
                }, 100);
                setTimeout(() => {
                    clearInterval(showError);
                    textError.remove();
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
                localStorage.setItem("notes", JSON.stringify(notes));
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', NoteApp);