import { getTaskHTML } from "./getTaskHTML";

const pasteTask = document.querySelector(".paste__task")

export function loadTaskState() {
    const openSaveTasks = JSON.parse(localStorage.getItem("tasks"))

    if (openSaveTasks === null) {
        return
    } else {
        for (let i = 0; i < openSaveTasks.length; i++) {
            const textContent = openSaveTasks[i].textContent
            const checked = Boolean(openSaveTasks[i].checked)

            pasteTask.insertAdjacentHTML('beforeend', getTaskHTML(textContent, checked, false))
        }
    }
}