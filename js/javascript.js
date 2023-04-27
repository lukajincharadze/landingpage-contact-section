let navbarLinks = document.getElementById("navbarLinks");
let togglebutton = document.getElementById("toggle-button");
let navigation = document.getElementById("navigation");

navigation.style.transition = "height 0.3s ease-in-out";
navbarLinks.style.transition = "opacity 0.3s ease-in-out";

togglebutton.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
    if (navigation.style.height === "324px") {
        navigation.style.height = "250px";
        navbarLinks.style.opacity = "0";
    } else {
        navigation.style.height = "324px";
        navbarLinks.style.opacity = "1";
    }
});