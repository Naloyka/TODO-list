import { load } from "./load"

export function deleteTask() {

    let close = Array.from(document.querySelectorAll(".close"))

    close.forEach(item => {
        item.addEventListener("click", (e) => {

            let deleteElement = item.closest(".container__task")
            console.log(e.target)

            deleteElement.remove()
            localStorage.clear()
            load()
        })
    })
}