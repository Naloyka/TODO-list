export function getTaskHTML(text, done, remoteTask) {
   
    return `<div class="task__container" ${remoteTask ? "data-flag=\"server\"" : ""}>
    <div class="task">
    <div class="task__item">
    <label class="checkbox">
        <input type="checkbox" name="checkbox" class="checkbox__input"${done ? ' checked' :''} id="checkbox">
        <span class="checkbox__label"></span>
    </label>
    <p class="task__text${done ? " task__text_done" : ""} " translate="no">${text}</p>
        </div>
        <button class="close"></button>
    </div>
    </div>`
}