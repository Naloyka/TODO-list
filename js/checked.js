import { load } from "./load"

export function checked() {

    const checkboxInput = Array.from(document.querySelectorAll(".checkbox__input"))
    const textTask = Array.from(document.querySelectorAll(".task__text"))

    for (let i = 0; i < checkboxInput.length; i++) {

        checkboxInput[i].addEventListener("click", () => {
            if (checkboxInput[i].checked) {
                textTask[i].classList.add("task__text_done")
            } else {
                textTask[i].classList.remove("task__text_done")
            }
            load()
        })
    }
}