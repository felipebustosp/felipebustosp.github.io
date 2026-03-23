/**
 * i18n.js — Internationalization module.
 * Handles ES/EN toggle for all static UI strings.
 * Dynamic content (experience, projects, etc.) is handled per-module using DATA.
 */

const I18n = (() => {

  const strings = {
    es: {
      'nav.about':      'Sobre mí',
      'nav.experience': 'Experiencia',
      'nav.skills':     'Habilidades',
      'nav.projects':   'Proyectos',
      'nav.contact':    'Contacto',

      'hero.tag':      'Quality Engineering Lead · Test Architecture & Governance',
      'hero.subtitle': 'Escalabilidad · Gobernanza · DevSecOps',
      'hero.desc':     'Diseño sistemas de calidad escalables que permiten a las organizaciones de ingeniería crecer sin aumentar el riesgo operacional. 10+ años construyendo arquitecturas de testing, frameworks de gobernanza y estrategias de automatización.',
      'hero.cta1':     'Contáctame',
      'hero.cta2':     'Descargar CV',
      'hero.stat1':    'años en QA',
      'hero.stat2':    'empresas internacionales',
      'hero.stat3':    'aumento en cobertura automatizada',

      'about.label':  '01 — SOBRE MÍ',
      'about.title1': 'Quién soy',
      'about.title2': 'qué hago',
      'about.p1':     'Soy un Quality Engineering Lead con más de 10 años de experiencia en ingeniería de calidad de software en entornos multinacionales. Me especializo en construir arquitecturas de testing, frameworks de gobernanza y estrategias de automatización que garantizan mantenibilidad a largo plazo y propiedad distribuida.',
      'about.p2':     'Mi trabajo se centra en el diseño y estandarización de arquitecturas de prueba, escalabilidad de plataformas de automatización, modelos de gobernanza para equipos distribuidos y alineación estratégica con liderazgo de ingeniería.',
      'about.p3':     'Actualmente lidero en ZeroFox la estandarización de prácticas de testing AIO, estableciendo modelos de propiedad compartida y reduciendo silos de conocimiento. Mi foco profesional está evolucionando hacia autoridad técnica en arquitectura de calidad.',
      'about.stat1':  'años en QA',
      'about.stat2':  'empresas top',
      'about.stat3':  'defect backlog',
      'about.stat4':  'cobertura auto',

      'exp.label':  '02 — EXPERIENCIA',
      'exp.title1': 'Trayectoria',
      'exp.title2': 'profesional',

      'skills.label': '03 — HABILIDADES',
      'skills.title': 'técnico',

      'proj.label': '04 — PROYECTOS',
      'proj.title': 'Proyectos destacados',

      'contact.label':  '05 — CONTACTO',
      'contact.title1': 'Hablemos',
      'contact.title2': 'hoy',
      'contact.intro':  'Disponible para nuevas oportunidades en Quality Engineering, Test Architecture y roles de liderazgo técnico. También abierto a colaboraciones en DevSecOps y Cybersecurity Automation.',

      'form.name':    'NOMBRE',
      'form.subject': 'ASUNTO',
      'form.message': 'MENSAJE',
      'form.send':    'ENVIAR MENSAJE →',
      'form.sending': 'ENVIANDO...',
      'form.success': '¡Mensaje enviado! Te responderé pronto.',
      'form.error':   'Escríbeme directamente a felipe.bustosp@gmail.com',

      'ph.name':    'Tu nombre',
      'ph.email':   'tu@email.com',
      'ph.subject': 'Oportunidad laboral / Colaboración',
      'ph.message': 'Cuéntame sobre la oportunidad...',

      'footer.text': 'Construido con precisión, escalado por diseño.',
    },

    en: {
      'nav.about':      'About',
      'nav.experience': 'Experience',
      'nav.skills':     'Skills',
      'nav.projects':   'Projects',
      'nav.contact':    'Contact',

      'hero.tag':      'Quality Engineering Lead · Test Architecture & Governance',
      'hero.subtitle': 'Scalability · Governance · DevSecOps',
      'hero.desc':     'I design scalable quality systems that enable engineering organizations to grow without increasing operational risk. 10+ years building test architectures, governance frameworks, and automation strategies.',
      'hero.cta1':     'Contact me',
      'hero.cta2':     'Download CV',
      'hero.stat1':    'years in QA',
      'hero.stat2':    'international companies',
      'hero.stat3':    'automated coverage increase',

      'about.label':  '01 — ABOUT ME',
      'about.title1': 'Who I am',
      'about.title2': 'what I do',
      'about.p1':     'I\'m a Quality Engineering Lead with 10+ years of experience in software quality engineering across multinational environments. I specialize in building test architectures, governance frameworks, and automation strategies that ensure long-term maintainability and distributed ownership.',
      'about.p2':     'My work focuses on test architecture design and standardization, automation platform scalability, governance models for distributed teams, and strategic alignment with engineering leadership.',
      'about.p3':     'I currently lead the standardization of AIO testing practices at ZeroFox, establishing shared ownership models and reducing knowledge silos. My professional focus is evolving toward technical authority in quality architecture.',
      'about.stat1':  'years in QA',
      'about.stat2':  'top companies',
      'about.stat3':  'defect backlog',
      'about.stat4':  'auto coverage',

      'exp.label':  '02 — EXPERIENCE',
      'exp.title1': 'Professional',
      'exp.title2': 'journey',

      'skills.label': '03 — SKILLS',
      'skills.title': 'stack',

      'proj.label': '04 — PROJECTS',
      'proj.title': 'Featured projects',

      'contact.label':  '05 — CONTACT',
      'contact.title1': 'Let\'s talk',
      'contact.title2': 'today',
      'contact.intro':  'Available for new opportunities in Quality Engineering, Test Architecture, and technical leadership roles. Also open to collaborations in DevSecOps and Cybersecurity Automation.',

      'form.name':    'NAME',
      'form.subject': 'SUBJECT',
      'form.message': 'MESSAGE',
      'form.send':    'SEND MESSAGE →',
      'form.sending': 'SENDING...',
      'form.success': 'Message sent! I\'ll get back to you soon.',
      'form.error':   'Email me directly at felipe.bustosp@gmail.com',

      'ph.name':    'Your name',
      'ph.email':   'your@email.com',
      'ph.subject': 'Job opportunity / Collaboration',
      'ph.message': 'Tell me about the opportunity...',

      'footer.text': 'Built with precision, scaled by design.',
    },
  };

  let current = 'es';

  function t(key) {
    return strings[current][key] || strings['es'][key] || key;
  }

  function setLang(lang) {
    current = lang;
    document.documentElement.lang = lang;

    // Update lang buttons
    document.getElementById('btnES').classList.toggle('active', lang === 'es');
    document.getElementById('btnEN').classList.toggle('active', lang === 'en');

    // Update all static [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });

    // Update form placeholders
    const placeholders = [
      ['fname',    'ph.name'],
      ['femail',   'ph.email'],
      ['fsubject', 'ph.subject'],
      ['fmessage', 'ph.message'],
    ];
    placeholders.forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.placeholder = t(key);
    });

    // Re-render dynamic sections so descriptions update
    Experience.render(lang);
    Projects.render(lang);
  }

  function getLang() { return current; }

  return { setLang, getLang, t };
})();
