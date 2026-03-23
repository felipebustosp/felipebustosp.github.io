/**
 * experience.js — Renders the experience timeline from DATA.experience.
 * Supports ES/EN via lang param.
 */

const Experience = (() => {

  function buildItem(job, lang) {
    const tags = job.tags.map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <div class="timeline-item reveal">
        <div class="timeline-date">${job.date[lang]}</div>
        <div class="timeline-role">${job.role[lang]}</div>
        <div class="timeline-company">${job.company}</div>
        <p class="timeline-desc">${job.desc[lang]}</p>
        <div class="timeline-tags">${tags}</div>
      </div>
    `;
  }

  function render(lang = 'es') {
    const container = document.getElementById('timeline');
    if (!container) return;
    container.innerHTML = DATA.experience.map(job => buildItem(job, lang)).join('');

    // Re-observe new elements for scroll animation
    Animations.observe(container.querySelectorAll('.reveal'));
  }

  return { render };
})();
