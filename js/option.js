const option = Array.from(document.querySelectorAll(".option"))

export function filterStateTasks() {

    option.forEach(item => {

        item.addEventListener("click", (e) => {
            const stateChecked = Array.from(document.querySelectorAll(".checkbox__input"))
            const containerTask = Array.from(document.querySelectorAll(".container__task"))
    
            if (item.getAttribute("data-value") == 3) {
                for (let i = 0; i < stateChecked.length; i++) {
                    containerTask[i].classList.remove("container__task_hidden")
                    if (stateChecked[i].checked === true) {
                        containerTask[i].classList.add("container__task_hidden")
                    }
                }
            }
    
            if (item.getAttribute("data-value") == 2) {
                for (let i = 0; i < stateChecked.length; i++) {
                    containerTask[i].classList.remove("container__task_hidden")
                    if (stateChecked[i].checked === false) {
                        containerTask[i].classList.add("container__task_hidden")
                    }
                }
            }
    
            if (item.getAttribute("data-value") == 1) {
                for (let i = 0; i < stateChecked.length; i++) {
                    containerTask[i].classList.remove("container__task_hidden")
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



