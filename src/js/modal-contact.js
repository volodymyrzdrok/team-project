(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cont-open]'),
    closeModalBtn: document.querySelector('[data-modal-cont-close]'),

    modal: document.querySelector('[data-modal-cont]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-contact');
    refs.modal.classList.toggle('is-hidden-modal-cont');
  }
})();
