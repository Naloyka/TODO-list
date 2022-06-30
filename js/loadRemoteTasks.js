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
            let parseResponse = JSON.parse(xhr.responseText)
            for (let i = 0; i < 5; i++) {
                let randomNum =  Math.floor(Math.random() * (parseResponse.length - 0)) + 0;
                const textContent = parseResponse[randomNum].title
                pasteTask.insertAdjacentHTML('beforeend', getTaskHTML(textContent, false, true))
            }
            checked()
            deleteTask()
        }
    })
}