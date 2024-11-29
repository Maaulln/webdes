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
    function showTab(tabId) {
        const tabContents = document.querySelectorAll('.tab-content');
        const tabButtons = document.querySelectorAll('.tab-button');    
        tabContents.forEach(content => content.classList.add('hidden'));
        tabContents.forEach(content => content.classList.remove('active'));
        tabButtons.forEach(button => {
            button.classList.remove('bg-green-600', 'text-white');
            button.classList.add('bg-gray-200', 'text-gray-700');
        });
    
        document.getElementById(`${tabId}-content`).classList.remove('hidden');
        document.getElementById(`${tabId}-content`).classList.add('active');    
        document.getElementById(`${tabId}-tab`).classList.add('bg-green-600', 'text-white');
        document.getElementById(`${tabId}-tab`).classList.remove('bg-gray-200', 'text-gray-700');
    }

    // animasi-number
    document.querySelectorAll('.animate-number').forEach(el => {
        const value = +el.dataset.value;
        let start = 0;
        const increment = Math.ceil(value / 100);
        const interval = setInterval(() => {
            start += increment;
            el.textContent = start > value ? value : start;
            if (start >= value) clearInterval(interval);
        }, 15);
    });