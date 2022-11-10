(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-order-open]'),
    openModalBtn1: document.querySelector('[data-modal-order-open1]'),
    openModalBtn2: document.querySelector('[data-modal-order-open2]'),
    openModalBtn3: document.querySelector('[data-modal-order-open3]'),
    openModalBtn4: document.querySelector('[data-modal-order-open4]'),
    openModalBtn5: document.querySelector('[data-modal-order-open5]'),
    openModalBtn6: document.querySelector('[data-modal-order-open6]'),

    closeModalBtn: document.querySelector('[data-modal-order-close]'),
    modal: document.querySelector('[data-modal-order]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.openModalBtn5.addEventListener('click', toggleModal);
  refs.openModalBtn6.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-order');
    refs.modal.classList.toggle('is-hidden-modal-order');
  }
})();
