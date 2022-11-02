const theme = document.querySelector('.theme-switcher');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

function switchTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

theme.addEventListener('click', switchTheme);

