const closeUser = document.querySelector(".close__user")
const containerUser = document.querySelector(".container__user")
const bodyContent = document.querySelector(".body")

export function closePopup() {
    closeUser.addEventListener("click", () => {
        containerUser.style = "display: none"
        bodyContent.classList.remove("body")
    })
}


