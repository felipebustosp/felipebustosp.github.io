/**
 * skills.js — Renders the skills grid from DATA.skills.
 * Skills are language-agnostic (technical terms stay in English).
 */

const Skills = (() => {

  function buildGroup(group, index) {
    const delayClass = index < 4 ? `d${index + 1}` : '';
    const items = group.items.map(i => `<li>${i}</li>`).join('');
    return `
      <div class="skill-group reveal ${delayClass}">
        <div class="skill-group-title">${group.title}</div>
        <ul class="skill-list">${items}</ul>
      </div>
    `;
  }

  function render() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    container.innerHTML = DATA.skills.map((g, i) => buildGroup(g, i)).join('');
    Animations.observe(container.querySelectorAll('.reveal'));
  }

  return { render };
})();
