// dropdown
function toggleDropdown() {
  const dropdown = document.getElementById('servicesDropdown');
  dropdown.classList.toggle('show');
}

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