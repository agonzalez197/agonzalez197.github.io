// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'agonzalez197', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['agonzalez197/genomeanalysis', 'agonzalez197/microbiometutorial'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Presentation on Toxoplasma gondii ',
          description:
            'This is a presentation discussing the parasite T.gondii including symptoms, epidemiology, and several case studies',
          imageUrl:
            'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/toxoplasmapresentation.png',
          link: 'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/Toxoplasma%20gondii%20presentation.pdf',
        },
        {
          title: 'Presentation on the impact of light intensity on photosynthetic rates and resource allocation in sunflower plants (Helianthus annuus) ',
          description:
            'This is a presentation on a experimental project showing the research of the effects of varying light intensity on the photosynthetic rates and resource allocation in sunflowers.',
          imageUrl:
            'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/sunflowerproject.png',
          link: 'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/The%20impact%20of%20light%20intensity%20on%20photosynthetic%20rates%20and%20resource%20allocation%20in%20sunflower%20plants%20(Helianthus%20annuus)%20%20(1).pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Adrianna Gonzalez',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'gadrianna444@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/GonzalezCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Microsoft Office',
    'Microbiology',
    'Bilingual',
  ],
  experiences: [
    {
      company: 'RxTechExam',
      position: 'Student',
      from: 'December 2023',
      to: 'March 2024',
    },
  ],
  certifications: [
    {
      name: 'Certified Pharmacy Technician',
      body: 'This certification indicates that the requirements for the certification and merits have been met.',
      year: 'March 2024',
      link: 'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/CPhT.png',
    }, 
    {
      name: 'Licensed Pharmacy Technician- TCH 199202',
      body: 'This indicates that the requirements, including licensure exam, were met.',
      year: 'June 2024',
      link: 'https://search.dca.ca.gov/details/7200/TCH/199202/5ffbbb739f7464832e1c1a64bf9fa949',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'B.S. in Biological Sciences',
      from: '2021',
      to: 'Present',
    },
  ],
  publications: [
    {
      title: 'Genome Sequence of Atlantibacter subterranea DSM 16208 Isolated from Uranium-Contaminated Sediment',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Sofia Amaral, Luis Garcia, Adrianna Gonzalez, Samantha Prince, Komal Takhar, Tricia Van Laar',
      link: 'https://github.com/agonzalez197/agonzalez197.github.io/raw/main/MRA_Template.pdf',
      description:
        'This is a manuscript in submission. We report the whole genome sequence of an antibiotic-resistant strain of Atlantibacter subterranea isolated from Uranium-contaminated sediment in Tennessee. The genome sequence of this strain was 4,717,064 bp in length, contained 34 contigs and 29 scaffolds, and with a GC content of 55.17%.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
