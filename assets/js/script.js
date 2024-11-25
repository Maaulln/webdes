function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("hidden");
}

function toggleDropdown() {
    const dropdown = document.getElementById("servicesDropdown");
    dropdown.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburgerButton");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    });
});

  // profil-daerah
function showTab(tabName) {
    document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
    });
    document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
    content.classList.add("hidden");
    });

    document.getElementById(`${tabName}-tab`).classList.add("active");
    let activeContent = document.getElementById(`${tabName}-content`);
    activeContent.classList.remove("hidden");
    activeContent.classList.add("active");
}

showTab("sejarah");

document.addEventListener("DOMContentLoaded", () => {
    const animatedNumbers = document.querySelectorAll(".animate-number");

    const animateNumber = (element) => {
    const value = parseInt(element.getAttribute("data-value"));
    const duration = 1500;
    const interval = 50;
    const steps = duration / interval;
    const increment = value / steps;

    let currentValue = 0;
    const updateNumber = () => {
        currentValue += increment;
        if (currentValue < value) {
        element.textContent = Math.round(currentValue).toLocaleString();
        requestAnimationFrame(updateNumber);
        } else {
        element.textContent = value.toLocaleString();
        }
    };

    updateNumber();
    };

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animatedNumbers.forEach(animateNumber);
            observer.unobserve(entry.target);
        }
        });
    },
    { threshold: 0.1 }
    );

    observer.observe(document.querySelector("section"));
});