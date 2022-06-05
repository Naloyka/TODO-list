export function load() {

    const containerTask = Array.from(document.querySelectorAll(".container__task"))
    const arraySaveTasks = []

    for (let i = 0; i < containerTask.length; i++) {

        if (containerTask[i].getAttribute("data-flag") !== "server") {
            let textTask = containerTask[i].querySelector(".text__task").textContent
            let childTask = containerTask[i].querySelector(".checkbox__input").checked

            let task = {
                "checked": childTask,
                "textContent": textTask,
            }

            arraySaveTasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(arraySaveTasks))
        }
    }
}