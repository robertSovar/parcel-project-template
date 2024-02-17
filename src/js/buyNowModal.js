const buyNowModal = () => {
  const buyNowModal = {
    openModalBtn: document.querySelector('[data-modal-open-buy-now]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy-now]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  buyNowModal.openModalBtn.addEventListener('click', toggleModal);
  buyNowModal.closeModalBtn.addEventListener('click', toggleModal);

  document.addEventListener('click', function (event) {
    if (
      !buyNowModal.modal.contains(event.target) &&
      !event.target.matches('[data-modal-open-buy-now]')
    ) {
      buyNowModal.modal.classList.add('buy-now-modal-is-hidden');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      buyNowModal.modal.classList.add('buy-now-modal-is-hidden');
    }
  });

  function toggleModal() {
    buyNowModal.modal.classList.toggle('buy-now-modal-is-hidden');
  }
};

export default buyNowModal;
