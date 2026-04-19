const en = {
  meta: {
    brand: 'SNK ENG Co., Ltd.',
    description:
      'SNK ENG supplies electrical and electronic equipment, components, and instrumentation essential to the safe and efficient operation of power plants.',
  },

  common: {
    skipToContent: 'Skip to main content',
    scrollToTop: 'Scroll to top',
    toggleMenu: 'Toggle menu',
    scroll: 'Scroll',
    toggleThemeLight: 'Switch to light mode',
    toggleThemeDark: 'Switch to dark mode',
    toggleLangKo: '한국어로 보기',
    toggleLangEn: 'Switch to English',
  },

  nav: {
    mainMenuLabel: 'Primary',
    mobileMenuLabel: 'Mobile menu',
    about: 'About',
    business: 'Business',
    projects: 'Projects',
    hr: 'Careers',
    center: 'Support',
    home: 'Go to home',
  },

  footer: {
    address: '28, Sinchon 5-gil, Danwon-gu, Ansan-si, Gyeonggi-do, Korea',
    tel: 'TEL: +82-70-8270-0665',
    fax: 'FAX: +82-31-421-0551',
    email: 'sk5559611@hanmail.net',
    hours: 'Mon–Fri 09:00 – 18:00 (Lunch 12:00 – 13:00)',
    description:
      'SNK ENG is a trusted supplier of high-quality automation systems and instrumentation solutions, serving leading domestic and international clients.',
    about: 'About',
    aboutLinks: {
      company: 'Company',
      history: 'History',
      awards: 'Awards',
      certification: 'Certification',
      location: 'Location',
      transport: 'Getting here',
    },
    business: 'Business',
    businessLinks: {
      overview: 'Business Areas',
      partners: 'Key Partners',
      delivery: 'Delivery Status',
      power: 'Electrical Machinery & Equipment',
      control: 'Control Systems & Electronics',
      instruments: 'Instrumentation & Test Equipment',
      materials: 'Materials & Parts',
      projects: 'Projects',
    },
    hr: 'Careers',
    hrLinks: { talent: 'Talent Philosophy', process: 'Hiring Process' },
    center: 'Support',
    centerLinks: { support: 'Customer Support', faq: 'FAQ' },
    copyright: (year) => `© ${year} SNK ENG Co., Ltd. All Rights Reserved.`,
    business_info: 'Business Registration No. 134-87-13658 | CEO: Jaemin Choi | Privacy Officer: Yongsoo Park',
  },

  home: {
    hero: {
      eyebrow: 'Since 1999 · Power Engineering Partner',
      title: 'SNK ENG Co., Ltd.',
      subtitle: 'Your Trusted Power & Instrumentation Supply Partner',
      description:
        'SNK ENG is the authorized power-plant distributor for Duon System Co., Ltd. Backed by decades of expertise, we deliver reliable electrical and instrumentation solutions to power producers worldwide.',
      primaryCta: 'Explore our business',
      secondaryCta: 'Get in touch',
    },
    business: {
      eyebrow: 'Business',
      title: 'What we do',
      subtitle: 'Core electrical and electronic solutions that keep power plants running safely and efficiently.',
      cards: [
        {
          title: 'Electrical Machinery & Equipment',
          description:
            'High-reliability transformers, breakers, protection relays, and other essential electrical equipment for stable power generation and distribution.',
        },
        {
          title: 'Control Systems & Electronic Components',
          description:
            'PLC, sensors, and control modules for precision automation — high-performance components that bring intelligence to power plant operations.',
        },
        {
          title: 'Instrumentation & Test Equipment',
          description:
            'Dependable industrial meters (voltage, current, temperature, pressure) and test tools for accurate condition monitoring and diagnostics.',
        },
        {
          title: 'Materials & Spare Parts',
          description:
            'Cables, connectors, piping materials, and spare parts — the everyday supplies that keep power plants operational and maintainable.',
        },
      ],
    },
  },

  about: {
    banner: {
      eyebrow: 'About Us',
      title: 'About SNK ENG',
      description: 'A specialist supplier of electrical and electronic equipment for power-plant operations.',
    },
    companyTitle: 'Company Overview',
    companyEyebrow: 'Company',
    companyLead:
      'SNK ENG is the [strong]authorized power-plant distributor for Duon System Co., Ltd.[/strong], supplying the core electrical and electronic equipment required to keep power plants running.',
    docs: {
      license: 'Business Registration Certificate',
      sme: 'Small & Medium Enterprise Certificate',
    },
    historyTitle: 'History',
    historyEyebrow: 'History',
    yearSuffix: '',
    awardsTitle: 'Awards & Recognition',
    awardsEyebrow: 'Awards',
    awards: [
      {
        title: 'Appreciation Plaque — KOMIPO Incheon Thermal Power Division',
        lines: [
          'Recognition for parts supply and operational support for Units 1 & 2 turbine reinforcement.',
          'Awarded for outstanding technical performance and rapid response that enhanced equipment safety and plant reliability.',
        ],
        date: 'November 29, 2013',
      },
      {
        title: 'EWP Field Verification Participation Certificate',
        lines: [
          'Led the localization of piping-pressure transmitters and completed field verification.',
          'Issued by Korea East-West Power (EWP) in recognition of our contribution to the localization of domestic power-plant equipment.',
        ],
        date: 'November 27, 2020',
      },
    ],
    certTitle: 'Quality Certification',
    certEyebrow: 'Certification',
    certLead:
      'Certified to ISO quality management standards — assurance that our products and services deliver consistent, verified quality.',
    certs: [
      {
        title: 'ISO 9001:2008 / KS Q ISO 9001:2009 (Korean)',
        desc: 'Quality Management System — international standard certification. Ensures consistent quality products and services to international standards.',
        meta: 'Certification Body: Korean Standards Association (ITS) · Certificate No: ITS-KQ-00563',
      },
      {
        title: 'ISO 9001:2008 / KS Q ISO 9001:2009 Certificate',
        desc: 'International Standard for Quality Management Systems. Certified to provide consistent quality products and services according to international standards.',
        meta: 'Certification Body: ITS · Certificate No: ITS-KQ-00563',
      },
    ],
    locationTitle: 'Location',
    locationEyebrow: 'Location',
    address: {
      heading: 'Address',
      line1: '28, Sinchon 5-gil, Danwon-gu, Ansan-si, Gyeonggi-do 15443, Korea',
      line2: 'Tel: +82-70-8270-0665 · Email: sk5559611@hanmail.net',
      line3: 'Hours: Mon–Fri 09:00 – 18:00 (closed Sat/Sun & public holidays)',
    },
    transportTitle: 'Getting Here',
    transportEyebrow: 'Transport',
    transport: [
      { title: 'By Car', lines: ['15 min from Ansan IC on the Seohaean Expressway', 'Free on-site parking'] },
      { title: 'By Bus', lines: ['Get off at Ansan Station / Ansan Terminal', 'Bus 123 or 456 → “Sinchon Sageori” stop → 5-min walk'] },
      { title: 'By Subway', lines: ['Line 4, Ansan Station Exit 2 → 15-min walk', 'Or transfer to Bus 123 / 456 → “Sinchon Sageori” stop'] },
    ],
    mapTitle: 'SNK ENG — Location Map',
  },

  business: {
    banner: {
      eyebrow: 'Business',
      title: 'Business Areas',
      description: 'Integrated electrical and electronic solutions for every aspect of power-plant operations.',
    },
    partnersTitle: 'Key Partners',
    partnersEyebrow: 'Partners',
    partnersLead:
      'SNK ENG has built long-standing relationships with major power producers and industrial partners in Korea and abroad.',
    deliveryTitle: 'Partner Delivery Share',
    deliveryEyebrow: 'Deliveries',
    deliveryLead: 'Share of our supply volume by partner (normalized to a total of 100).',
    areasTitle: 'Our Business Areas',
    areasEyebrow: 'Areas',
    areasLead:
      'From core power-plant equipment to control and instrumentation solutions, we deliver an integrated supply that keeps power generation stable.',
    areas: [
      {
        title: 'Electrical Machinery & Equipment',
        description:
          'Through partnerships with world-class manufacturers, we supply reliable generators, transformers, and switchgear that support uninterrupted operation and improved efficiency.',
        items: ['Generators & turbine equipment', 'HV/LV transformers & reactors', 'GIS & switchgear', 'Protection relay systems', 'UPS & batteries'],
      },
      {
        title: 'Control Systems & Electronic Components',
        description:
          'DCS, PLC, HMI, industrial sensors and actuators that enable automation and intelligence across the plant.',
        items: ['DCS, PLC, HMI', 'Temperature / pressure / flow sensors', 'Control valves & actuators', 'Inverters & drives', 'Industrial networking equipment'],
      },
      {
        title: 'Instrumentation & Test Equipment',
        description:
          'Precision measurement and diagnostic equipment for preventive maintenance and improved reliability.',
        items: ['Power analyzers & quality meters', 'Insulation / grounding resistance testers', 'Process instruments (T/P/F etc.)', 'Vibration analyzers', 'Portable test equipment'],
      },
      {
        title: 'Materials & Spare Parts',
        description:
          'A reliable supply chain for cables, connectors, valves, and consumable parts — available when you need them.',
        items: ['Power / control / optical cables', 'Connectors & wiring materials', 'Pipe valves & fittings', 'Filters & bearings', 'Tools & safety equipment'],
      },
    ],
  },

  projects: {
    banner: {
      eyebrow: 'Projects',
      title: 'Delivery Portfolio',
      description: 'Representative instrumentation and control solutions delivered to leading Korean power plants and industrial sites.',
    },
    highlightsTitle: 'Project Highlights',
    highlightsEyebrow: 'Highlights',
    highlightsLead:
      'SNK ENG supplies high-quality instrumentation and control equipment to major power plants and industrial customers, tailored to each site\'s requirements.',
    contractsTitle: 'Contract History',
    contractsEyebrow: 'Contracts',
    contractsLead: 'Detailed contract history of products delivered to major Korean power plants and industrial sites since 2007.',
    specsLabels: { feature: 'Product Features', application: 'Applications' },
    featured: [
      {
        title: 'High-Precision Pressure Transmitters',
        description: 'Custom-engineered transmitters that deliver stable performance in high-vacuum and high-temperature environments.',
        items: ['Absolute Pressure Transmitter APT3200-A — 570 EA', 'Flow Transmitter (Differential Pressure) APT3500-D — 30 EA'],
        specs: [
          { label: 'Product Features', value: 'Designed for high-vacuum and high-temperature tolerance, reliable in extreme conditions' },
          { label: 'Applications', value: 'Vacuum system control and precise flow measurement' },
        ],
        tags: ['Pressure transmitter', 'Flow', 'High vacuum', 'High temperature'],
      },
      {
        title: 'Precision Transmitters for Harsh Environments',
        description: 'High-reliability transmitters that stay accurate under radiation exposure and electromagnetic interference.',
        items: ['Absolute Pressure Transmitter APT3200-A', 'Differential Transmitter APT3100-D'],
        specs: [
          { label: 'Product Features', value: 'Built for high-vacuum, radiation, and EMI-tolerant applications' },
          { label: 'Applications', value: 'Nuclear plants, medical radiation facilities, high-precision process control' },
        ],
        tags: ['Precision', 'Radiation tolerance', 'EMI shielding', 'Extreme environments'],
      },
      {
        title: 'High-Temp / High-Pressure Absolute Transmitters',
        description: 'Stable operation up to 600 °C and 50 bar for demanding industrial conditions.',
        items: ['Absolute Pressure Transmitter APT3200-A'],
        specs: [
          { label: 'Product Features', value: 'Rated up to 600 °C · 50 bar' },
          { label: 'Applications', value: 'Vacuum system control · precision flow measurement' },
        ],
        tags: ['High temperature', 'High pressure', 'Absolute pressure', 'Vacuum control'],
      },
      {
        title: 'e-Fuel Pilot Plant',
        description: 'High-precision pressure measurement for green methane production from hydrogen and CO₂.',
        items: ['Absolute Pressure Transmitter APT3200-G'],
        specs: [
          { label: 'Product Features', value: 'Optimized for H₂ + CO₂ → green methane processes' },
          { label: 'Applications', value: 'Vacuum, flow, and synthetic fuel production' },
        ],
        tags: ['Green methane', 'e-fuel', 'Hydrogen', 'Carbon neutral'],
      },
      {
        title: 'Li-ion Battery LIELSORT Line',
        description: 'High-precision pressure measurement and control tailored for battery-cell manufacturing.',
        items: ['Absolute Pressure Transmitter ALT6210', 'Pressure Transmitter APT3200-LED, APT3100-LEC'],
        specs: [
          { label: 'Product Features', value: 'High-vacuum, high-temperature tolerance — 600 °C / 50 bar' },
          { label: 'Applications', value: 'Electrode coating · electrolyte injection · cell activation' },
        ],
        tags: ['Secondary battery', 'Li-ion', 'Cell production', 'High vacuum process'],
      },
      {
        title: 'Generator Auxiliary Systems',
        description: 'High-precision pressure measurement solutions optimized for power-generation auxiliaries.',
        items: ['Absolute Pressure Transmitter APT3100-G'],
        specs: [
          { label: 'Product Features', value: 'Proven reliability for long continuous operation' },
          { label: 'Applications', value: 'Turbine pressure monitoring · cooling system control' },
        ],
        tags: ['Power equipment', 'Turbine control', 'Precision measurement', 'System reliability'],
      },
    ],
    table: {
      year: 'Year',
      client: 'Client',
      contractNumber: 'Contract No.',
      items: 'Items',
      scale: 'Scale',
      empty: 'No matching records found.',
    },
    scaleLabels: { small: 'Small', medium: 'Medium', large: 'Large' },
    filters: { all: 'All', jungbu: 'KOMIPO', seobu: 'KOWEPO', dongseo: 'EWP', namdong: 'KOEN', other: 'Other' },
  },

  hr: {
    banner: {
      eyebrow: 'Careers',
      title: 'Join Us',
      description: 'We look for passionate, expert, and collaborative people who help us move power engineering forward.',
    },
    talentTitle: 'Who We Look For',
    talentEyebrow: 'People',
    talentLead:
      'We value people who are passionate and ambitious, creative and innovative thinkers, and experts with global competence.',
    talents: [
      {
        title: 'Creative',
        description:
          'People who break from convention, approach problems with fresh perspective, generate innovative ideas, and pursue continuous change and growth.',
      },
      {
        title: 'Expert',
        description:
          'People who pursue excellence in their field, continuously strengthen their skills through learning and self-development, and stay competitive in the global market.',
      },
      {
        title: 'Collaborative',
        description:
          'People who respect diverse backgrounds and perspectives, communicate well inside and outside the organization, and create synergy through strong collaboration.',
      },
    ],
    processTitle: 'Hiring Process',
    processEyebrow: 'Process',
    processLead: 'A fair and transparent hiring process to find outstanding people.',
    steps: [
      { title: 'Application Review',  description: 'Resume & statement of purpose' },
      { title: 'First Interview',     description: 'With the hiring team (role fit)' },
      { title: 'Second Interview',    description: 'With leadership (overall fit)' },
      { title: 'Offer & Onboarding',  description: 'Health check & start date' },
    ],
  },

  center: {
    banner: {
      eyebrow: 'Support',
      title: 'Customer Support',
      description: 'Product questions, technical support, partner registration — we\'re here to help.',
    },
    supportTitle: 'Get in Touch',
    supportEyebrow: 'Support',
    support: [
      {
        title: 'By Phone',
        text: 'Reach us by phone for quick help on technical and product questions. Open Mon–Fri, 09:00–18:00.',
        label: '+82-70-8270-0665',
      },
      {
        title: 'By Email',
        text: 'For detailed inquiries, email us and we\'ll reply within 1 business day.',
        label: 'sk5559611@hanmail.net',
      },
      {
        title: 'Technical Support',
        text: 'Need help with installation or maintenance? Our technical support team is ready to assist.',
        label: 'Request technical support',
      },
    ],
    helpTitle: 'FAQ & Contact',
    helpEyebrow: 'Help',
    tabs: { faq: 'FAQ', contact: 'Contact' },
    faqs: [
      {
        q: 'How do I purchase a product?',
        a: 'Contact us by phone (+82-70-8270-0665) or email (sk5559611@hanmail.net). A sales representative will guide you through specifications, pricing, and delivery timelines. For bulk or recurring orders, we work with a separate supply agreement.',
      },
      {
        q: 'Do you offer product training?',
        a: 'Yes — we provide usage and maintenance training for customers who purchase our products. Sessions are available online, on-site at our office, or at your facility. Contact us to arrange a schedule.',
      },
      {
        q: 'How do I register as a partner/vendor?',
        a: 'Please email your partner registration form, business registration certificate, and company profile to sk5559611@hanmail.net. Our internal review typically takes about two weeks.',
      },
      {
        q: 'How does delivery work?',
        a: 'Products typically ship within 3–5 business days after order confirmation and payment. Large or custom items may follow a separate schedule. We ship through trusted logistics partners and offer installation support where required.',
      },
    ],
    form: {
      name: 'Name *',
      namePh: 'Enter your name',
      email: 'Email *',
      emailPh: 'Enter your email',
      phone: 'Phone *',
      phonePh: 'Enter your phone number',
      company: 'Company',
      companyPh: 'Enter your company name',
      type: 'Inquiry type *',
      typePh: 'Select an inquiry type',
      types: {
        product: 'Product inquiry',
        technical: 'Technical support',
        warranty: 'Warranty / service',
        partnership: 'Partner registration',
        order: 'Order / shipping',
        other: 'Other',
      },
      model: 'Product model',
      modelPh: 'Model name of the product',
      subject: 'Subject *',
      subjectPh: 'Enter a subject',
      message: 'Message *',
      messagePh: 'Please describe your inquiry in detail',
      file: 'Attachment',
      fileHint: 'Up to 10 MB (jpg, png, pdf, doc, docx)',
      submit: 'Submit',
    },
    info: {
      address: 'Address',
      addressValue: '28, Sinchon 5-gil, Danwon-gu, Ansan-si, Gyeonggi-do, Korea',
      phone: 'Phone',
      phoneValue: '+82-70-8270-0665',
      email: 'Email',
      emailValue: 'sk5559611@hanmail.net',
    },
  },

  location: {
    banner: {
      eyebrow: 'Contact',
      title: 'Visit Us',
      description: 'How to find our headquarters in Ansan.',
    },
    visitTitle: 'Visiting',
    visitEyebrow: 'Visit',
    address: {
      heading: 'Address',
      lines: [
        '28, Sinchon 5-gil, Danwon-gu, Ansan-si, Gyeonggi-do, Korea',
        'Postcode: 15443',
        'Phone: +82-70-8270-0665',
        'Email: sk5559611@hanmail.net',
        'Hours: Mon–Fri 09:00 – 18:00',
        'Closed: Sat, Sun, public holidays',
      ],
    },
    transportTitle: 'Getting Here',
    transportEyebrow: 'Transport',
    transport: [
      { title: 'By Car',     lines: ['15 min from Ansan IC on the Seohaean Expressway', 'Free on-site parking'] },
      { title: 'By Bus',     lines: ['Get off at Ansan Station / Ansan Terminal', 'Take Bus 123 or 456', '“Sinchon Sageori” stop, 5-min walk'] },
      { title: 'By Subway',  lines: ['Line 4, Ansan Station', 'Exit 2, 15-min walk', 'Or transfer to Bus 123 / 456'] },
    ],
    mapTitle: 'SNK ENG — Location Map',
  },
};

export default en;
