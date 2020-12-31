var kabinet = document.querySelector("#kabinet");
var overlay = document.querySelector('#overlay');
var body = document.querySelector('body');
var mobileMenu = document.querySelector('#mobile-menu');

kabinet.addEventListener('click', function (e) {
  e.preventDefault();
  console.log();
  this.classList.toggle('crossed');
  overlay.classList.toggle('visible');
  body.classList.toggle('no-scroll');
  mobileMenu.classList.toggle('opened');
});