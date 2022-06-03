/* Option */

const selectOption = document.querySelector(".select__option")
const containerOption = document.querySelector(".container__option")
const body = document.getElementsByTagName("body")
const pasteTask = document.querySelector(".paste__task")


selectOption.addEventListener("click", () => {
    selectOption.classList.toggle("select__option_active")
    if (containerOption.style.display == "block") {
        containerOption.style.display = "none"
    } else {
        containerOption.style.display = "block"
    }
})

/* Закрытие всплывающего окна */

const closeUser = document.querySelector(".close__user")
const containerUser = document.querySelector(".container__user")
const bodyContent = document.querySelector(".body")

let closePopup = function() {
    closeUser.addEventListener("click", () => {
        containerUser.style = "display: none"
        bodyContent.classList.remove("body")
        
    })
    unload()
}
closePopup()


/* Меняем иконку фильтра */

const option = Array.from(document.querySelectorAll(".option"))

option.forEach((item) =>
    item.addEventListener("click", (e) => {
        let meaning = e.currentTarget.textContent;
        selectOption.textContent = meaning
        containerOption.style.display = "none"
        selectOption.classList.toggle("select__option_active")
    }))

/* Фильтр*/

option.forEach(item => {

    item.addEventListener("click", (e) => {
        const stateChecked = Array.from(document.querySelectorAll(".checkbox__input"))
        const containerTask = Array.from(document.querySelectorAll(".container__task"))

        if (item.getAttribute("value") == 3) {
            for (let i = 0; i < stateChecked.length; i++) {
                containerTask[i].classList.remove("container__task_hidden")
                if (stateChecked[i].checked === true) {
                    containerTask[i].classList.add("container__task_hidden")
                }
            }
        }

        if (item.getAttribute("value") == 2) {
            for (let i = 0; i < stateChecked.length; i++) {
                containerTask[i].classList.remove("container__task_hidden")
                if (stateChecked[i].checked === false) {
                    containerTask[i].classList.add("container__task_hidden")
                }
            }
        }

        if (item.getAttribute("value") == 1) {
            for (let i = 0; i < stateChecked.length; i++) {
                containerTask[i].classList.remove("container__task_hidden")
            }
        }
    })

})


/* Кнопка добавить задачу*/

const add = document.querySelector(".add")
const containerInput = document.querySelector(".container__input")
const input = document.querySelector(".input")

function addTask() {
    add.addEventListener("click", () => {
        if (input.value === "") {
            return
        }

        pasteTask.insertAdjacentHTML('afterbegin', `
        <div class="container__task">
        <div class="task">
                <div class="task__item">
                    
                    <label class="checkbox__label">
                        <input type="checkbox" name="checkbox" class="checkbox__input" id="checkbox">
                        <span class="checkbox__span"></span>
                    </label>
    
                    <p class="text__task">${input.value}</p>
                </div>
                <div class="close"></div>
            </div>
            </div>`)

        input.value = "";
        checked()
        deleteTask()
        load()
    })

    input.addEventListener("keyup", (e) => {

        if (input.value === "") {
            return
        }

        if (e.key === "Enter") {
            pasteTask.insertAdjacentHTML('afterbegin', `
            <div class="container__task">
            <div class="task">
                    <div class="task__item">
                        
                        <label class="checkbox__label">
                            <input type="checkbox" name="checkbox" class="checkbox__input" id="checkbox">
                            <span class="checkbox__span"></span>
                        </label>
    
                        <p class="text__task">${input.value}</p>
                    </div>
                    <div class="close"></div>
                </div>
                </div>`)

            input.value = "";
            checked()
            deleteTask()
            load()
        }
    })
}
addTask()


/*Удалить задачу */

function deleteTask() {

    const close = Array.from(document.querySelectorAll(".close"))
    for (let item of close) {
        item.addEventListener("click", () => {

            let deleteElement = item.closest(".container__task")
            deleteElement.remove()
            localStorage.clear()
            load()
        })
    }
}

/*Зачеркивание текста */

function checked() {

    const checkboxInput = Array.from(document.querySelectorAll(".checkbox__input"))
    const textTask = Array.from(document.querySelectorAll(".text__task"))

    for (i = 0; i < checkboxInput.length; i++) {

        let count = i;

        checkboxInput[i].addEventListener("click", () => {
            if (checkboxInput[count].checked) {
                textTask[count].classList.add("text__task_done")
            } else {
                textTask[count].classList.remove("text__task_done")
            }
            load()
        })
    }
}

/* Хранилище (сохранение состояния задачи) */

let load = function () {

    const containerTask = Array.from(document.querySelectorAll(".container__task"))

    for (let i = 0; i < containerTask.length; i++) {

        if (containerTask[i].getAttribute("data-flag") !== "server") {
            let textTask = containerTask[i].querySelector(".text__task").textContent
            let childTask = containerTask[i].querySelector(".checkbox__input").checked
            let task = {
                "checked": childTask,
                "textContent": textTask,
            }
            let objTask = JSON.stringify(task)

            localStorage.setItem(`${i}`, objTask)
        }
    }
}


/* Загрузка состояния задачи*/

function unload() {
    window.addEventListener("load", () => {
        request()
        for (let i = 0; i < localStorage.length; i++) {
            let openTask = JSON.parse(localStorage[i])
            let textContent = openTask.textContent
            let checkboxInput = Boolean(openTask.checked)

            let flagChecked;
            let flagClass;

            if (checkboxInput) {
                flagChecked = "checked"
                flagClass = "text__task_done"
            } else {
                flagChecked = ""
                flagClass = ""
            }

            pasteTask.insertAdjacentHTML('beforeend', `
            <div class="container__task">
            <div class="task">
            <div class="task__item">
            <label class="checkbox__label">
                <input type="checkbox" name="checkbox" class="checkbox__input" id="checkbox" ${flagChecked}>
                <span class="checkbox__span"></span>
            </label>
            <p class="text__task ${flagClass}">${textContent}</p>
                </div>
                <div class="close"></div>
            </div>
            </div>`)
        }
        checked()
        deleteTask()
        

    })
}


/* Запросы на сервер */

let request = function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhr.send()
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            let parseJ = JSON.parse(xhr.responseText)
            for (let i = 0; i < 5; i++) {
                pasteTask.insertAdjacentHTML('afterend', `
            <div class="container__task" data-flag="server">
            <div class="task">
            <div class="task__item">
            <label class="checkbox__label">
                <input type="checkbox" name="checkbox" class="checkbox__input" id="checkbox "">
                <span class="checkbox__span"></span>
            </label>
            <p class="text__task">${parseJ[i].title}</p>
                </div>
                <div class="close"></div>
            </div>
            </div>`)
            }
            checked()
            deleteTask()



        }
    })
}