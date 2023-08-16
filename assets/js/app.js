let open = document.querySelector(".btn");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let sidebar = document.querySelector(".sidebar");

open.addEventListener("click", function () {
    if (sidebar.classList !== document.querySelector("show")) {
        sidebar.classList.add("show");
        open.classList.add("b1");
        overlay.style.display = "block";
    }
});
close.addEventListener("click", function () {
    sidebar.classList.remove("show");
    open.classList.remove("b1");
    overlay.style.display = "none";
});
overlay.addEventListener("click", function () {
    sidebar.classList.remove("show");
    open.classList.remove("b1");
    overlay.style.display = "none";
    btn.style.display = "none"
});