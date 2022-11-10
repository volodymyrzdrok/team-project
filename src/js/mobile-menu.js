(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');

  const mobileNavRef = document.querySelector('[data-menu-nav]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    mobileNavRef.classList.toggle('nav-menu__cont');
    menuBtnRef.classList.toggle('is-open-menu');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    document.body.classList.toggle('modal-menu-open');
    //  mobileNavRef.classList.toggle('is-open-menu-backdrop');
  });
})();
