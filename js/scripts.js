(function() {

  window.addEventListener('load', function() {

    const questions = document.querySelectorAll('.js-questions-item');
    const questionLinks = document.querySelectorAll('.js-questions-item-link');

    for(const question of questions) {
      question.classList.add('is-collapsed');
    }

    for(const link of questionLinks) {
      link.addEventListener('click', (evt) => {
        link.parentElement.classList.toggle('is-collapsed');
        evt.preventDefault();
      });
    }

  });

}());
