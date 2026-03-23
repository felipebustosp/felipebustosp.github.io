/**
 * contact.js — Renders contact links from DATA.profile and handles form submission.
 */

const Contact = (() => {

  const iconEmail = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  const iconLI   = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#00c896"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const iconGH   = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
  const iconPhone= `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

  function link(href, icon, label, value, clickable = true) {
    const tag   = clickable ? 'a' : 'div';
    const attrs = clickable ? `href="${href}" target="_blank" rel="noopener"` : 'style="cursor:default"';
    return `
      <${tag} class="contact-link" ${attrs}>
        <div class="contact-link-icon">${icon}</div>
        <div>
          <span class="contact-link-label">${label}</span>
          <span class="contact-link-val">${value}</span>
        </div>
      </${tag}>
    `;
  }

  function render() {
    const container = document.getElementById('contactLinks');
    if (!container) return;

    const { email, linkedin, github, phone, location } = DATA.profile;

    container.innerHTML = [
      link(`mailto:${email}`, iconEmail, 'EMAIL',    email),
      link(linkedin,          iconLI,    'LINKEDIN', linkedin.replace('https://www.', '')),
      link(github,            iconGH,    'GITHUB',   github.replace('https://', '')),
      link('',                iconPhone, 'PHONE',    phone, false),
    ].join('');
  }

  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const t      = I18n.t.bind(I18n);
      const btn    = document.getElementById('submitBtn');
      const msgEl  = document.getElementById('formMsg');
      const name   = document.getElementById('fname').value.trim();
      const email  = document.getElementById('femail').value.trim();
      const subject= document.getElementById('fsubject').value.trim() || 'Contact from portfolio';
      const message= document.getElementById('fmessage').value.trim();

      btn.disabled       = true;
      btn.textContent    = t('form.sending');
      msgEl.style.display = 'none';

      const body   = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:${DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

      setTimeout(() => {
        window.location.href = mailto;
        msgEl.className     = 'form-msg success';
        msgEl.textContent   = t('form.success');
        msgEl.style.display = 'block';
        form.reset();
        btn.disabled        = false;
        btn.textContent     = t('form.send');
      }, 800);
    });
  }

  return { render, initForm };
})();
