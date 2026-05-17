const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const matchingLink = document.querySelector(`.navbar a[href="#${id}"]`);

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            matchingLink?.classList.add("active");
        }
    });
});

if (window.Typed) {
    new Typed(".multiple-text", {
        strings: ["Frontend Developer", "Web Designer", "App Developer"],
        typeSpeed: 90,
        backSpeed: 70,
        backDelay: 1200,
        loop: true
    });
} else {
    document.querySelector(".multiple-text").textContent = "Frontend Developer";
}
function toggleText() {
    // Get references to the text and the button
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");

    // Check if the extra text is currently hidden
    if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Show the hidden text
        btnText.innerHTML = "Read Less";    // Change button label
    } else {
        moreText.style.display = "none";   // Hide the text again
        btnText.innerHTML = "Read More";   // Revert button label
    }
}
