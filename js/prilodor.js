document.body.onload = function () {
  var preloador = document.getElementById('page-preloader');
  if (!preloador.classList.contains('done')) {
    preloador.classList.add('done');
  }
}