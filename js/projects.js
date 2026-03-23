/**
 * projects.js — Renders project cards from DATA.projects.
 * Supports ES/EN via lang param.
 */

const Projects = (() => {

  function buildCard(project, lang, index) {
    const delayClass = index < 4 ? `d${index + 1}` : '';
    const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <div class="card card--project reveal ${delayClass}">
        <div class="project-icon">${project.icon}</div>
        <div class="project-title">${project.title[lang]}</div>
        <p class="project-desc">${project.desc[lang]}</p>
        <div class="timeline-tags">${tags}</div>
      </div>
    `;
  }

  function render(lang = 'es') {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    container.innerHTML = DATA.projects.map((p, i) => buildCard(p, lang, i)).join('');
    Animations.observe(container.querySelectorAll('.reveal'));
  }

  return { render };
})();
