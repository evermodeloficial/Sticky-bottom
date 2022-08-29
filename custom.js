window.addEventListener('scroll', function () {
  var header = document.querySelector('.sticky-top');
  header.classList.toggle('baixo', window.scrollY > 0);
});
