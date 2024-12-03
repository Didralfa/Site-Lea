window.addEventListener('load', function() {
    // Sélectionner tous les éléments à afficher avec la classe "fade-item"
    const fadeItems = document.querySelectorAll('.fade-item');
  
    // Fonction pour ajouter la classe "visible" avec un délai
    fadeItems.forEach((item, index) => {
      // Calculer le délai en fonction de l'index (1s de délai par élément)
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 500); // Délai de 500ms entre chaque élément
    });

  });
  document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelector('.carousel-images');
    const totalSlides = slides.children.length;

    // Ajuste la largeur totale pour contenir toutes les images
    slides.style.width = `${totalSlides * 100}%`;

    // Affiche la première diapositive
    showSlide(carousel.id, 0);
});

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.carousel-images');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    carousel.dataset.currentSlide = index;
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const currentSlide = parseInt(carousel.dataset.currentSlide || 0, 10);
    showSlide(carouselId, currentSlide + 1);
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const currentSlide = parseInt(carousel.dataset.currentSlide || 0, 10);
    showSlide(carouselId, currentSlide - 1);
}

        // Sélectionner le conteneur à masquer
        const fadeContainer = document.getElementById('fadeContainer');

        // Ajouter un événement sur le défilement
        window.addEventListener('scroll', () => {
            // Obtenir la position de défilement actuelle
            const scrollPosition = window.scrollY;

            // Ajuster l'opacité en fonction de la position de défilement
            const maxScroll = 200; // La distance après laquelle l'élément est complètement invisible
            const opacity = Math.max(0, 1 - scrollPosition / maxScroll);

            // Appliquer l'opacité
            fadeContainer.style.opacity = opacity;
        });