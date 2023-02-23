let seFue = document.title

window.addEventListener('blur', () => {
    seFue = document.title
    document.title = "No te vallas"
})

window.addEventListener("focus", () => {
    document.title = seFue
})