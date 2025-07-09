// Detectar tema previo
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

const toggleBtn = document.getElementById('theme-toggle');
updateIcon(currentTheme);

// Cambiar tema al pulsar
toggleBtn.addEventListener('click', () => {
  const newTheme =
    document.documentElement.getAttribute('data-theme') === 'light'
      ? 'dark'
      : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}
