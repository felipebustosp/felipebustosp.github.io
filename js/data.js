/**
 * data.js — Single source of truth for all site content.
 *
 * To update the site, edit ONLY this file.
 * All sections (experience, skills, projects, contact) are driven from here.
 */

const DATA = {

  /* ── PROFILE ─────────────────────────────────────────────── */
  profile: {
    name:     'Felipe Bustos Ponce',
    initials: 'FBP',
    role:     'Quality Engineering Lead',
    email:    'felipe.bustosp@gmail.com',
    linkedin: 'https://www.linkedin.com/in/felipe-bustosponce',
    github:   'https://github.com/felipebustosp',          // ← update with real URL
    phone:    '+56 9 9901 0015',              // ← update with real number
    location: 'Santiago, Chile',
  },

  /* ── EXPERIENCE ──────────────────────────────────────────── */
  experience: [
    {
      date:    { es: 'AGO 2023 — PRESENTE · 2 años 8 meses', en: 'AUG 2023 — PRESENT · 2 yrs 8 mos' },
      role:    { es: 'Senior QA Automation Engineer',         en: 'Senior QA Automation Engineer' },
      company: 'ZeroFox · Gran Santiago, Chile',
      desc: {
        es: 'Diseño y evolución de la estrategia de Quality Engineering en plataformas de seguridad, integrando frameworks de automatización y validación risk-based en pipelines CI/CD. Colaboro con Engineering Managers para alinear estándares de gobernanza con objetivos de release y mitigación de riesgos. Lidero la estandarización de AIO test management, definiendo modelos de gobernanza y prácticas de propiedad compartida para escalabilidad cross-team. Reduje silos de conocimiento habilitando distributed test ownership entre equipos de ingeniería.',
        en: 'Design and evolve Quality Engineering strategy across multiple security-focused platforms, integrating automation frameworks and risk-based validation into CI/CD pipelines. Collaborate with Engineering Managers to align test governance standards with release objectives and risk mitigation. Lead AIO test management standardization, defining governance models and shared ownership practices for cross-team scalability. Reduced knowledge silos by enabling distributed test ownership across engineering teams.',
      },
      tags: ['Test Architecture', 'CI/CD', 'Risk-Based Testing', 'Governance', 'Shift-Left', 'AI-assisted QA'],
    },
    {
      date:    { es: 'ABR 2023 — AGO 2023 · 5 meses', en: 'APR 2023 — AUG 2023 · 5 mos' },
      role:    { es: 'QA Automation Engineer',         en: 'QA Automation Engineer' },
      company: 'Falabella · Chile',
      desc: {
        es: 'Automatización de pruebas para plataformas de retail e-commerce de alto tráfico, contribuyendo a la estabilidad de releases en uno de los ecosistemas digitales más grandes de Latinoamérica.',
        en: 'Test automation for high-traffic retail e-commerce platforms, contributing to release stability for one of Latin America\'s largest digital ecosystems.',
      },
      tags: ['Automation', 'E-commerce', 'Retail'],
    },
    {
      date:    { es: 'OCT 2021 — ABR 2023 · 1 año 7 meses', en: 'OCT 2021 — APR 2023 · 1 yr 7 mos' },
      role:    { es: 'SDET — Software Development Engineer in Test', en: 'SDET — Software Development Engineer in Test' },
      company: 'Evernote · Santiago, Chile',
      desc: {
        es: 'Lideré la estrategia de calidad para features de Editor y Calendar, definiendo criterios de validación para deployments quincenales a producción. Reduje el backlog de defectos de 200 a 40 en tres meses reestructurando los flujos de validación. Incrementé la cobertura automatizada en un 50% mediante suites integradas de UI y backend. Contribuí al lanzamiento de Single Click Share y MS 365 Calendar Integration.',
        en: 'Led quality strategy for Editor and Calendar features, defining release validation criteria for biweekly production deployments. Reduced open defect backlog from 200 to 40 in three months by restructuring validation workflows. Increased automated coverage by 50% through integrated UI and backend test suites. Contributed to launch of Single Click Share and MS 365 Calendar Integration.',
      },
      tags: ['Python', 'UI Testing', 'Backend Testing', 'Release Management', 'Defect Reduction'],
    },
    {
      date:    { es: 'JUN 2016 — ABR 2021 · 4 años 11 meses', en: 'JUN 2016 — APR 2021 · 4 yrs 11 mos' },
      role:    { es: 'Quality Assurance Engineer', en: 'Quality Assurance Engineer' },
      company: 'Synopsys Inc · Vitacura, Santiago',
      desc: {
        es: 'Lideré iniciativas QA para productos enterprise coordinando esfuerzos de validación con equipos globales. Gestioné suites de performance testing y procesos de validación de confiabilidad para sistemas críticos. Mentoricé nuevos ingenieros y participé en summits internacionales para alinear estrategia de calidad y procesos de ingeniería.',
        en: 'Led QA initiatives for enterprise-level products, coordinating validation efforts across global teams. Managed performance testing suites and reliability validation processes for critical systems. Mentored new engineers and participated in international summits to align quality strategy and engineering processes.',
      },
      tags: ['Enterprise QA', 'Performance Testing', 'Global Teams', 'Mentoring'],
    },
    {
      date:    { es: 'ABR 2013 — FEB 2016 · 2 años 11 meses', en: 'APR 2013 — FEB 2016 · 2 yrs 11 mos' },
      role:    { es: 'Application Developer', en: 'Application Developer' },
      company: 'Equifax · Santiago, Chile',
      desc: {
        es: 'Developer en Core Software Engineering Group, responsable de diseño, desarrollo, testing e integración continua para Equifax International (UK, Canada, Chile). Stack JavaEE, JSF, Oracle, Groovy. Negociación directa con clientes y coordinación con equipos internacionales.',
        en: 'Application developer in Core Software Engineering Group, responsible for product design, development, testing and continuous integration for Equifax International (UK, Canada, Chile). Stack: JavaEE, JSF, Oracle, Groovy. Direct client negotiation and coordination with international teams.',
      },
      tags: ['JavaEE', 'JSF', 'Oracle', 'Groovy', 'CI/CD'],
    },
  ],

  /* ── SKILLS ──────────────────────────────────────────────── */
  skills: [
    {
      title: '// QA AUTOMATION',
      items: ['Python · Java · JavaScript', 'Selenium · Playwright · Cypress', 'Appium (mobile testing)', 'REST Assured · Postman · Karate', 'TestNG · JUnit · PyTest'],
    },
    {
      title: '// ARCHITECTURE & GOVERNANCE',
      items: ['Test Architecture Design', 'Governance Frameworks', 'Risk-Based Testing', 'CI/CD Quality Integration', 'Cross-Team Enablement'],
    },
    {
      title: '// CI/CD & DEVSECOPS',
      items: ['Jenkins · GitHub Actions · GitLab CI', 'Docker · Kubernetes', 'Shift-Left Quality Gates', 'SAST · DAST integration', 'AWS · Cloud platforms'],
    },
    {
      title: '// TOOLS & PLATFORMS',
      items: ['Jira · Confluence · TestRail', 'Git · GitHub · GitLab', 'SQL · Oracle · Databases', 'AI-assisted validation workflows', 'Performance testing suites'],
    },
  ],

  /* ── PROJECTS ────────────────────────────────────────────── */
  projects: [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: { es: 'AIO Test Governance Framework — ZeroFox', en: 'AIO Test Governance Framework — ZeroFox' },
      desc: {
        es: 'Liderazgo de la estandarización de prácticas de testing AIO: definición de modelos de gobernanza, propiedad distribuida y reducción de silos. Iniciativa adoptada orgánicamente por múltiples equipos de ingeniería, mejorando consistencia estructural y reduciendo el riesgo de single-point-of-failure.',
        en: 'Leading the standardization of AIO testing practices: defining governance models, distributed ownership, and reducing silos. Initiative organically adopted by multiple engineering teams, improving structural consistency and reducing single-point-of-failure risk.',
      },
      tags: ['Governance', 'Test Architecture', 'Distributed Teams'],
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: { es: 'Defect Reduction Initiative — Evernote', en: 'Defect Reduction Initiative — Evernote' },
      desc: {
        es: 'Reestructuración de flujos de validación que redujo el backlog de defectos de 200 a 40 en tres meses. Incremento del 50% en cobertura automatizada integrando suites de UI y backend, alineadas con el roadmap de producto y cadencia de delivery quincenal.',
        en: 'Restructured validation workflows that reduced the defect backlog from 200 to 40 in three months. 50% increase in automated coverage integrating UI and backend suites with the product roadmap and biweekly delivery cadence.',
      },
      tags: ['Python', 'UI Automation', 'Backend Testing', 'Release Quality'],
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      title: { es: 'Shift-Left CI/CD Integration — ZeroFox', en: 'Shift-Left CI/CD Integration — ZeroFox' },
      desc: {
        es: 'Embedding de quality gates y validación automatizada en etapas tempranas del desarrollo, reduciendo defectos en producción y mejorando la confianza en releases de plataformas de ciberseguridad.',
        en: 'Embedding quality gates and automated validation earlier in the development lifecycle, reducing production defects and improving release confidence for cybersecurity platforms.',
      },
      tags: ['CI/CD', 'Shift-Left', 'Security Testing', 'DevSecOps'],
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
      title: { es: 'AI-Assisted QA Workflow — ZeroFox', en: 'AI-Assisted QA Workflow — ZeroFox' },
      desc: {
        es: 'Desarrollo de herramientas internas de testing y flujos de validación asistidos por IA para mejorar la velocidad de detección de defectos y la eficiencia general del equipo de QA en plataformas de ciberseguridad.',
        en: 'Development of internal testing tools and AI-assisted validation workflows to improve defect detection speed and overall QA team efficiency for cybersecurity platforms.',
      },
      tags: ['AI/ML', 'Automation', 'Cybersecurity', 'Internal Tools'],
    },
  ],

  /* ── CV TEXT (used for download) ─────────────────────────── */
  cvText: `FELIPE BUSTOS PONCE
Quality Engineering Lead | Test Architecture & Governance | Scalable Automation Systems
Email: felipe.bustosp@gmail.com
LinkedIn: linkedin.com/in/felipe-bustosponce
Location: Santiago, Chile

━━━ SUMMARY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I design scalable quality systems that enable engineering organizations to grow without
increasing operational risk. 10+ years in software quality engineering across multinational
environments, specializing in test architectures, governance frameworks, and automation
strategies that ensure long-term maintainability and distributed ownership.

━━━ EXPERIENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━
Senior QA Automation Engineer — ZeroFox (Aug 2023 – Present)
  · Design and evolve QE strategy across security-focused platforms
  · Lead AIO test management standardization (governance, shared ownership)
  · Reduced knowledge silos via distributed test ownership

SDET — Evernote (Oct 2021 – Apr 2023)
  · Reduced defect backlog 200 → 40 in 3 months
  · +50% automated coverage (UI + backend suites)

Quality Assurance Engineer — Synopsys Inc (Jun 2016 – Apr 2021)
  · Led enterprise QA initiatives across global teams
  · Performance testing & reliability validation

Application Developer — Equifax (Apr 2013 – Feb 2016)
  · Core Software Engineering Group — JavaEE, JSF, Oracle, Groovy

━━━ EDUCATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ingeniero Civil en Informática — Universidad de Santiago de Chile (2006–2012)

━━━ SKILLS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Python, Java, JavaScript, Selenium, Playwright, Cypress, Appium
Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes, AWS
Test Architecture, Governance Frameworks, Risk-Based Testing
Jira, Confluence, TestRail, Git, SQL

━━━ LANGUAGES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Spanish (native) · English (full professional) · German (limited) · French (basic)
`,

};
