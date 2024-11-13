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
function showContent(section, buttonId) {
  document.getElementById('sejarah').classList.add('hidden');
  document.getElementById('geografi').classList.add('hidden');
  document.getElementById('demografi').classList.add('hidden');
  document.getElementById(section).classList.remove('hidden');

  document.getElementById('btn-sejarah').classList.remove('active');
  document.getElementById('btn-geografi').classList.remove('active');
  document.getElementById('btn-demografi').classList.remove('active');
  document.getElementById(buttonId).classList.add('active');
}

// Mendapatkan elemen header
        const header = document.getElementById('header');

        // Fungsi untuk mengubah warna header berdasarkan scroll
        window.addEventListener('scroll', () => {
            const homeSection = document.getElementById('home');
            const homeSectionBottom = homeSection.offsetHeight;

            if (window.scrollY > homeSectionBottom) {
                header.classList.remove('bg-white', 'text-black');
                header.classList.add('bg-gray-800', 'text-white');
            } else {
                header.classList.remove('bg-gray-800', 'text-white');
                header.classList.add('bg-white', 'text-black');
            }
        });