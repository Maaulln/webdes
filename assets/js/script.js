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
  // Hide all tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.add('hidden'));
  // Remove active styles from all tabs
  document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('border-b-2', 'text-gray-800'));
  // Show the selected tab panel
  document.getElementById(`content-${tabId}`).classList.remove('hidden');
  // Add active styles to the selected tab
  document.getElementById(`tab-${tabId}`).classList.add('border-b-2', 'text-gray-800');
}

// Initialize by showing the first tab
document.addEventListener('DOMContentLoaded', () => {
  showTab('sejarah');
});