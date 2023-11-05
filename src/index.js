//  Header modal
(() => {
  const headerModal = {
    openModalBtn: document.querySelector('[data-modal-open-header]'),
    closeModalBtn: document.querySelector('[data-modal-close-header]'),
    modal: document.querySelector('[data-modal-header]'),
  };

  headerModal.openModalBtn.addEventListener('click', toggleModal);
  headerModal.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    headerModal.modal.classList.toggle('header-modal-is-hidden');
  }
})();

(() => {
  const buyNowModal = {
    openModalBtn: document.querySelector('[data-modal-open-buy-now]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy-now]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  buyNowModal.openModalBtn.addEventListener('click', toggleModal);
  buyNowModal.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    buyNowModal.modal.classList.toggle('buy-now-modal-is-hidden');
  }
})();

// Country prefixes for telephone numbers
