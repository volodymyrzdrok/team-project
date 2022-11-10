(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');

  const closeBtnRef1 = document.querySelector('[data-menu-1]');
  const closeBtnRef2 = document.querySelector('[data-menu-2]');
  const closeBtnRef3 = document.querySelector('[data-menu-3]');

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

  closeBtnRef1.addEventListener('click', () => {
    mobileNavRef.classList.remove('nav-menu__cont');
    menuBtnRef.classList.remove('is-open-menu');

    document.body.classList.remove('modal-menu-open');
  });
  closeBtnRef2.addEventListener('click', () => {
    mobileNavRef.classList.remove('nav-menu__cont');
    menuBtnRef.classList.remove('is-open-menu');

    document.body.classList.remove('modal-menu-open');
  });
  closeBtnRef3.addEventListener('click', () => {
    mobileNavRef.classList.remove('nav-menu__cont');
    menuBtnRef.classList.remove('is-open-menu');

    document.body.classList.remove('modal-menu-open');
  });
})();
