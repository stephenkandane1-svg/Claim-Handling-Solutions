const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isCollapsed = nav.dataset.collapsed === 'true';
    const newCollapsed = !isCollapsed;
    nav.dataset.collapsed = String(newCollapsed);
    menuToggle.setAttribute('aria-expanded', String(!newCollapsed));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 880) {
        nav.dataset.collapsed = 'true';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
