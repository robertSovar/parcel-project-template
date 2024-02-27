new Swiper('.sellers-swiperbuy', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.sellers-swiper-pagination',
    clickable: !0,
  },
});
new Swiper('.myswipernav', {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: !0,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.querySelector('[data-reviews-modal-open]');
  const modal = document.querySelector('[data-reviews-modal]');
  const closeModalButton = modal
    ? modal.querySelector('[data-reviews-modal-close]')
    : null;

  function showModal() {
    modal.classList.remove('is-hidden');
    document.querySelector('.container-reviews').style.display = 'block'; // Face container-ul de reviews vizibil
  }

  function hideModal() {
    modal.classList.add('is-hidden');
    document.querySelector('.container-reviews').style.display = 'none'; // Ascunde container-ul de reviews
  }

  openModalButton.addEventListener('click', showModal);

  closeModalButton.addEventListener('click', hideModal);

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      hideModal();
    }
  });
});
