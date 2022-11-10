(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-order-open]'),
    closeModalBtn: document.querySelector('[data-modal-order-close]'),
    modal: document.querySelector('[data-modal-order]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-order');
    refs.modal.classList.toggle('is-hidden-modal-order');
  }
})();
