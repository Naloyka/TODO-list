import { getTaskHTML } from "./getTaskHTML";

const pasteTask = document.querySelector(".paste__task")

export function loadTaskState() {
    window.addEventListener("load", () => {
        for (let i = 0; i < localStorage.length; i++) {
            let openTask = JSON.parse(localStorage[i])
            let textContent = openTask.textContent
            let checkboxInput = Boolean(openTask.checked)

            let flagChecked;
            let flagClass;

            if (checkboxInput) {
                flagChecked = "checked"
                flagClass = "text__task_done"
            } else {
                flagChecked = ""
                flagClass = ""
            }

            pasteTask.insertAdjacentHTML('beforeend', getTaskHTML(textContent, flagChecked, false))
        }
    })
}