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

function showTab(tabId) {
  // Hapus class active dari semua tab dan tab panel
  document.querySelectorAll(".tab-button").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));

  // Tambahkan class active pada tab dan panel yang dipilih
  document.getElementById("tab-" + tabId).classList.add("active");
  document.getElementById("content-" + tabId).classList.add("active");
}