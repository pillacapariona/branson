$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
  const menu = document.querySelector('.navbar-menu');
  const menuButton = document.querySelector('.navbar-button');
  const xButton = document.querySelector('.navbar-menu .navbar-button');

  menuButton.addEventListener('click', () => {
  menu.classList.toggle('hiden');
});

xButton.addEventListener('click', () => {
    menu.classList.toggle('hiden');
});
});
