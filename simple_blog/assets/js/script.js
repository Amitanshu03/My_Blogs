document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.innerText = "Toggle Dark Mode";
    document.body.insertBefore(button, document.body.firstChild);

    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
