import {loadTaskState} from "./loadStateTask";
import {loadRemoteTasks} from "./loadRemoteTasks";
import {getTaskHTML} from "./getTaskHTML";
import { deleteTask } from "./deleteTask";
import { checked } from "./checked";
import { load } from "./load";

/* Option */

const selectOption = document.querySelector(".select__option")
const containerOption = document.querySelector(".option__items")
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

closeUser.addEventListener("click", () => {
    containerUser.style = "display: none"
    bodyContent.classList.remove("body")
})

/* Меняем иконку фильтра */

const option = Array.from(document.querySelectorAll(".option"))

option.forEach((item) =>
    item.addEventListener("click", (e) => {
        const meaning = e.currentTarget.textContent;
        selectOption.textContent = meaning
        containerOption.style.display = "none"
        selectOption.classList.toggle("select__option_active")
    }))

/* Фильтр*/

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


/* Кнопка добавить задачу*/

const add = document.querySelector(".add")
const containerInput = document.querySelector(".container__input")
const input = document.querySelector(".input")

function addTask() {

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
addTask()
loadTaskState()
deleteTask()
loadRemoteTasks();

