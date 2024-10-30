function toggleDropdown() {
  const dropdown = document.getElementById('servicesDropdown');
  dropdown.classList.toggle('show');
}

function showTab(tabId) {
  // Hapus class active dari semua tab dan tab panel
  document.querySelectorAll(".tab-button").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));

  // Tambahkan class active pada tab dan panel yang dipilih
  document.getElementById("tab-" + tabId).classList.add("active");
  document.getElementById("content-" + tabId).classList.add("active");
}
