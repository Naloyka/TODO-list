import { load } from "./load"

export function deleteTask() {

    let close = Array.from(document.querySelectorAll(".close"))

    close.forEach(item => {
        item.addEventListener("click", (e) => {

            let deleteElement = item.closest(".task__container")
            deleteElement.remove()
            localStorage.clear()
            load()
        })
    })
}