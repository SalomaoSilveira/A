function showSection(id) {
  const sections = document.querySelectorAll('main section');
  const newSection = document.getElementById(id);

  sections.forEach(section => {
    section.classList.remove('active');
  });

  newSection.classList.add('active');

  // Fecha o menu hamburguer após clique
  const nav = document.getElementById('navLinks');
  nav.classList.remove('open');
}

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('themeButton');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  button.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.getElementById('themeButton');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    button.textContent = '☀️';
  }
});

// Abre/fecha menu mobile
document.getElementById('hamburger').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
});
