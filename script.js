const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
