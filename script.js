let currentIndex = 0;
const sectionsWrapper = document.querySelector('.sections-wrapper');
const sections = document.querySelectorAll('section');

function showSection(id) {
  const sectionIds = Array.from(sections).map(sec => sec.id);
  const targetIndex = sectionIds.indexOf(id);
  if (targetIndex !== -1) {
    currentIndex = targetIndex;
    sectionsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Fecha o menu no mobile
  document.getElementById('navLinks').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('active');
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
  const burger = document.querySelector('.hamburger');
  nav.classList.toggle('open');
  burger.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.getElementById('themeButton');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    button.textContent = '☀️';
  }
});
