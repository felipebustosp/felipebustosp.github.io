/**
 * animations.js — Scroll reveal via IntersectionObserver + CV download.
 */

const Animations = (() => {

  let observer;

  function init() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    observe(document.querySelectorAll('.reveal'));
  }

  function observe(elements) {
    elements.forEach(el => observer && observer.observe(el));
  }

  function initCVDownload() {
    const btn = document.getElementById('cvDownload');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // To use a real PDF instead of a text file:
      //   1. Place your PDF at: assets/Felipe_Bustos_Ponce_CV.pdf
      //   2. Replace everything below with: window.open('assets/Felipe_Bustos_Ponce_CV.pdf', '_blank');
      window.open('assets/FelipeBustos_CV.pdf', '_blank');
    });
  }

  return { init, observe, initCVDownload };
})();
