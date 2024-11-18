function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden'); // Toggles the hidden class
}

function toggleDropdown() {
  const dropdown = document.getElementById('servicesDropdown');
  dropdown.classList.toggle('show'); // Toggles the show class
}

document.addEventListener('DOMContentLoaded', function() {
        const hamburgerButton = document.getElementById('hamburgerButton');
        const mobileMenu = document.getElementById('mobileMenu');

        // Event listener untuk klik tombol hamburger
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    });

// profil-daerah
function showTab(tabName) {
  // Remove active class from all buttons and contents
  document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
      content.classList.add('hidden');
  });

  // Add active class to selected button and content
  document.getElementById(`${tabName}-tab`).classList.add('active');
  let activeContent = document.getElementById(`${tabName}-content`);
  activeContent.classList.remove('hidden');
  activeContent.classList.add('active');
}

// Set Sejarah as default active tab
showTab('sejarah');

document.addEventListener('DOMContentLoaded', () => {
  const animatedNumbers = document.querySelectorAll('.animate-number');

  const animateNumber = (element) => {
      const value = parseInt(element.getAttribute('data-value'));
      const duration = 1500; // Total animation duration in ms
      const interval = 50; // Update interval
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

  // Intersection Observer to trigger animation when section is in view
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animatedNumbers.forEach(animateNumber);
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  // Observe the parent container
  observer.observe(document.querySelector('section'));
});