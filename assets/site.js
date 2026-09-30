const header = document.querySelector('.site-header');
const menu = document.querySelector('.nav-links');
const toggle = document.querySelector('.menu-toggle');

const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.textContent = open ? 'CLOSE' : 'MENU';
  toggle.setAttribute('aria-expanded', String(open));
  header?.classList.toggle('menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  header?.classList.remove('menu-open');
  if (toggle) {
    toggle.textContent = 'MENU';
    toggle.setAttribute('aria-expanded', 'false');
  }
  document.body.style.overflow = '';
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

const preview = document.querySelector('.research-preview');
document.querySelectorAll('.research-item[data-position]').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (preview) preview.style.backgroundPosition = item.dataset.position;
  });
});


// Responsive menu safety: do not leave the page scroll-locked after a tablet/phone rotation.
const resetMenuForDesktop = () => {
  if (window.innerWidth > 900 && menu?.classList.contains('open')) {
    menu.classList.remove('open');
    header?.classList.remove('menu-open');
    if (toggle) {
      toggle.textContent = 'MENU';
      toggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }
};
window.addEventListener('resize', resetMenuForDesktop, { passive: true });

// Keyboard escape should close the full-screen mobile navigation.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('open')) {
    menu.classList.remove('open');
    header?.classList.remove('menu-open');
    if (toggle) {
      toggle.textContent = 'MENU';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
    document.body.style.overflow = '';
  }
});
