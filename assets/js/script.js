function toggleDropdown() {
  const dropdown = document.getElementById('servicesDropdown');
  dropdown.classList.toggle('hidden');
}

// Optional: close the dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('button')) {
      const dropdown = document.getElementById('servicesDropdown');
      if (!dropdown.classList.contains('hidden')) {
          dropdown.classList.add('hidden');
      }
  }
}

function toggleDropdown() {
  const dropdown = document.getElementById('servicesDropdown');
  const icon = document.querySelector('.fa-chevron-down');

  dropdown.classList.toggle('hidden'); // Menampilkan atau menyembunyikan dropdown
  icon.classList.toggle('rotate'); // Menambahkan atau menghapus kelas rotate
}