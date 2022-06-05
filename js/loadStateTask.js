import { getTaskHTML } from "./getTaskHTML";

const pasteTask = document.querySelector(".paste__task")

export function loadTaskState() {

    const openSaveTasks = JSON.parse(localStorage.getItem("tasks"))
    console.log(openSaveTasks)

    for (let i = 0; i < openSaveTasks.length; i++) {
        console.log
        const textContent = openSaveTasks[i].textContent
        const checked = Boolean(openSaveTasks[i].checked)

        pasteTask.insertAdjacentHTML('beforeend', getTaskHTML(textContent, checked, false))
    }
}
