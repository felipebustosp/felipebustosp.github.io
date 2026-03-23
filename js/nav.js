/**
 * nav.js — Navbar scroll shrink, active link tracking, mobile menu.
 */

const Nav = (() => {

  function init() {
    const navbar   = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      // Shrink navbar on scroll
      navbar.classList.toggle('scrolled', window.scrollY > 60);

      // Highlight active nav link
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
  }

  function toggleMobile() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  function closeMobile() {
    document.getElementById('mobileMenu').classList.remove('open');
  }

  return { init, toggleMobile, closeMobile };
})();
