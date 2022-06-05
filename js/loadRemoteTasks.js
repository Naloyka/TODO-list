import { getTaskHTML } from "./getTaskHTML";
import { checked } from "./checked";
import { deleteTask } from "./deleteTask";

const pasteTask = document.querySelector(".paste__task")

export function loadRemoteTasks () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhr.send()
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            let parseJ = JSON.parse(xhr.responseText)
            for (let i = 0; i < 5; i++) {
                const textContent = parseJ[i].title
                pasteTask.insertAdjacentHTML('beforeend', getTaskHTML(textContent, false, true))
            }
            checked()
            deleteTask()
        }
    })
}