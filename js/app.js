/**
 * app.js — Entry point. Initializes all modules in the correct order.
 *
 * Load order (defined in index.html):
 *   data.js → i18n.js → experience.js → skills.js → projects.js
 *   → contact.js → nav.js → animations.js → app.js
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Set up scroll reveal observer first (needed by renderers)
  Animations.init();

  // 2. Render dynamic sections (data-driven)
  Experience.render('es');
  Skills.render();
  Projects.render('es');
  Contact.render();

  // 3. Wire up interactive behaviour
  Contact.initForm();
  Nav.init();
  Animations.initCVDownload();

  // 4. Apply default language (ES) — also re-renders Experience & Projects
  I18n.setLang('es');

});
