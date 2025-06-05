function showSection(id) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  // Fecha o menu hamburguer se estiver aberto
  const nav = document.getElementById('navLinks');
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
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
  hamburger.addEventListener('click', () => {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('open');

    // Aplica atraso em cascata para os itens
    const items = nav.querySelectorAll('a, .theme-toggle');
    if (nav.classList.contains('open')) {
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
      });
    } else {
      items.forEach(item => {
        item.style.transitionDelay = `0s`;
      });
    }
  });
});
