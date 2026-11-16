// 1. Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// 2. Services filter
const filterButtons = document.querySelectorAll(".filter");
const serviceItems = document.querySelectorAll(".services li");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const chosen = button.dataset.filter;

        filterButtons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");

        serviceItems.forEach((item) => {
            const show = chosen === "all" || item.dataset.category === chosen;
            item.classList.toggle("hidden", !show);
        });
    });
});

// 3. Highlight the nav link for the section on screen
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
                });
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((section) => observer.observe(section));

// 4. Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();