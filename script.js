function showSection(id) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  // Fecha o menu lateral se estiver aberto
  const nav = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  nav.classList.remove('open');
  hamburger.classList.remove('active');
}

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('themeButton');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  button.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.getElementById('themeButton');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    button.textContent = '☀️';
  }

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
});
