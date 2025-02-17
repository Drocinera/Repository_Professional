/* Footer */

  document.addEventListener("DOMContentLoaded", () => {
    // récupérer l'année en cours
    const currentYear = new Date().getFullYear();
    // cibler les éléments avec un attribut "data-year"
    const currentYearSpans = document.querySelectorAll('[data-year]');
    // mettre à jour ces éléments avec l'année en cours
    currentYearSpans.forEach(element => {
      element.textContent = currentYear;
    });
  });