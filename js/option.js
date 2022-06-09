const option = Array.from(document.querySelectorAll(".option"))

export function filterStateTasks() {

    option.forEach(item => {

        item.addEventListener("click", (e) => {
            const stateChecked = Array.from(document.querySelectorAll(".checkbox__input"))
            const containerTask = Array.from(document.querySelectorAll(".task__container"))
    
            if (item.getAttribute("data-value") == 3) {
                for (let i = 0; i < stateChecked.length; i++) {
                    containerTask[i].classList.remove("task__container_hidden")
                    if (stateChecked[i].checked) {
                        containerTask[i].classList.add("task__container_hidden")
                    }
                }
            }
    
            if (item.getAttribute("data-value") == 2) {
                for (let i = 0; i < stateChecked.length; i++) {
                    containerTask[i].classList.remove("task__container_hidden")
                    if (stateChecked[i].checked === false) {
                        containerTask[i].classList.add("task__container_hidden")
                    }
                }
            }
    
            if (item.getAttribute("data-value") == 1) {
                for (let i = 0; i < stateChecked.length; i++) {
                    containerTask[i].classList.remove("task__container_hidden")
                }
            }
        })
    })
}

export function changeIconOptions() {
    option.forEach((item) =>
    item.addEventListener("click", (e) => {
        const meaning = e.currentTarget.textContent;
        selectOption.textContent = meaning
        containerOption.style.display = "none"
        selectOption.classList.toggle("btn__select_active")
    }))
}

const selectOption = document.querySelector(".btn__select")
const containerOption = document.querySelector(".option__items")
const body = document.getElementsByTagName("body")


export function hideSelect() {
    selectOption.addEventListener("click", () => {
        selectOption.classList.toggle("btn__select_active")
        if (containerOption.style.display == "block") {
            containerOption.style.display = "none"
        } else {
            containerOption.style.display = "block"
        }
    })
}



