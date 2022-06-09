const closeUser = document.querySelector(".close__popup")
const containerUser = document.querySelector(".profile__popup")
const bodyContent = document.querySelector(".body")

export function closePopup() {
    closeUser.addEventListener("click", () => {
        containerUser.style = "display: none"
        bodyContent.classList.remove("body")
    })
}


