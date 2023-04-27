let navbarLinks = document.getElementById("navbarLinks");
let togglebutton = document.getElementById("toggle-button");
let navigation = document.getElementById("navigation");

togglebutton.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
    if (navigation.style.height === "324px") {
        navigation.style.height = "250px";
    } else {
        navigation.style.height = "324px";
    }
});