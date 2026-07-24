// =============================
// HSHCS Robotics Club Website
// =============================

// Mobile Navigation
const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");

if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
        siteNav.classList.toggle("show");

        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !expanded);
    });

    // Close menu after clicking a link
    document.querySelectorAll(".site-nav a").forEach(link => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// Automatically update the copyright year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
