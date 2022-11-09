(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cont-open]'),
    closeModalBtn: document.querySelector('[data-modal-cont-close]'),
    modal: document.querySelector('[data-modal-cont]'),
  };
  console.log('ти лох? ');
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden-modal-cont');
  }
})();
