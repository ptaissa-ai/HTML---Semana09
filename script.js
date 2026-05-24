let slideIndex = 1;
let tempoAutomatico;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  reiniciarAutomatico();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  reiniciarAutomatico();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let bolinhas = document.getElementsByClassName("bolinha");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < bolinhas.length; i++) {
    bolinhas[i].className = bolinhas[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  bolinhas[slideIndex - 1].className += " active";
}

function slideAutomatico() {
  slideIndex++;
  showSlides(slideIndex);
  tempoAutomatico = setTimeout(slideAutomatico, 4000);
}

function reiniciarAutomatico() {
  clearTimeout(tempoAutomatico);
  tempoAutomatico = setTimeout(slideAutomatico, 4000);
}

tempoAutomatico = setTimeout(slideAutomatico, 4000);
