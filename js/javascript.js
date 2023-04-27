let navbarLinks = document.getElementById("navbarLinks");
let togglebutton = document.getElementById("toggle-button");

togglebutton.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
})