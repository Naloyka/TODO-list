import { getTaskHTML } from "./getTaskHTML"
import { checked } from "./checked"
import { load } from "./load"
import { deleteTask } from "./deleteTask"

const add = document.querySelector(".button__add-task")
const input = document.querySelector(".input__add-task_entry-field")
const pasteTask = document.querySelector(".paste__task")

export function addTask() {

    const addTaskItem = function () {
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