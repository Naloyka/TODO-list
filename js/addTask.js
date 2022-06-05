import { getTaskHTML } from "./getTaskHTML"
import { checked } from "./checked"
import { load } from "./load"
import { deleteTask } from "./deleteTask"

const add = document.querySelector(".add")
const containerInput = document.querySelector(".container__input")
const input = document.querySelector(".input")
const pasteTask = document.querySelector(".paste__task")

export function addTask() {

    let addTaskItem = function () {
        if (input.value === "") {
            return
        }
        pasteTask.insertAdjacentHTML('afterbegin', getTaskHTML(input.value, false, false))
        input.value = "";
        checked()
        load()
        deleteTask()
    }

    add.addEventListener("click", () => {
        addTaskItem()
    })

    input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            addTaskItem()
        }
    })
}