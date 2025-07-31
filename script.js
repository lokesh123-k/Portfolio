const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('theme-light');
  icon.classList.replace('fa-sun', 'fa-moon');
}

// Toggle dark/light mode
themeToggle.addEventListener('click', () => {
  const light = document.body.classList.toggle('theme-light');
  icon.classList.toggle('fa-sun', !light);
  icon.classList.toggle('fa-moon', light);
  localStorage.setItem('theme', light ? 'light' : 'dark');
});
