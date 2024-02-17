//  Header modal
const headerModal = () => {
  const headerModal = {
    openModalBtn: document.querySelector('[data-modal-open-header]'),
    closeModalBtn: document.querySelector('[data-modal-close-header]'),
    modal: document.querySelector('[data-modal-header]'),
  };

  headerModal.openModalBtn.addEventListener('click', toggleModal);

  headerModal.closeModalBtn.addEventListener('click', toggleModal);

  document.addEventListener('click', function (event) {
    if (
      !headerModal.modal.contains(event.target) &&
      !event.target.matches('[data-modal-open-header]')
    ) {
      headerModal.modal.classList.add('header-modal-is-hidden');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      headerModal.modal.classList.add('header-modal-is-hidden');
    }
  });

  function toggleModal() {
    headerModal.modal.classList.toggle('header-modal-is-hidden');
  }
};

export default headerModal;
