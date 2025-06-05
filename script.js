function showSection(id) {
  const sections = document.querySelectorAll('main section');
  const wrapper = document.querySelector('.sections-wrapper');
  const index = Array.from(sections).findIndex(section => section.id === id);
  wrapper.style.transform = `translateX(-${index * 100}%)`;

  // Fecha menu hambúrguer ao clicar
  const nav = document.getElementById('navLinks');
  nav.classList.remove('show');
}

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('themeButton');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  button.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.getElementById('themeButton');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    button.textContent = '☀️';
  }
});
