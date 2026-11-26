export type SkillBridgeRole = 'etudiant' | 'enseignant'

export type Talent = {
  id: string
  name: string
  initials: string
  headline: string
  institution: string
  availability: 'Disponible' | 'Disponibilité limitée'
  skills: string[]
}

export type Project = {
  id: string
  title: string
  summary: string
  domain: string
  owner: string
  skills: string[]
}

export type Opportunity = {
  id: string
  title: string
  description: string
  type: string
  location: string
  owner: string
  skills: string[]
}

export const talents: Talent[] = [
  {
    id: 't1',
    name: 'Lina Mansour',
    initials: 'LM',
    headline: 'Développeuse full-stack',
    institution: 'Institut Supérieur des Technologies',
    availability: 'Disponible',
    skills: ['React', 'Node.js', 'UX research'],
  },
  {
    id: 't2',
    name: 'Youssef Trabelsi',
    initials: 'YT',
    headline: 'Data science & intelligence artificielle',
    institution: 'École Nationale d’Ingénieurs',
    availability: 'Disponible',
    skills: ['Python', 'Machine learning', 'Data viz'],
  },
  {
    id: 't3',
    name: 'Meriem Gharbi',
    initials: 'MG',
    headline: 'Designer produit',
    institution: 'École Supérieure des Sciences et Technologies du Design',
    availability: 'Disponibilité limitée',
    skills: ['Figma', 'Prototypage', 'Design systems'],
  },
  {
    id: 't4',
    name: 'Amine Ben Salem',
    initials: 'AB',
    headline: 'Électronique & systèmes embarqués',
    institution: 'Institut National des Sciences Appliquées',
    availability: 'Disponible',
    skills: ['Arduino', 'IoT', 'C++'],
  },
  {
    id: 't5',
    name: 'Nour Khelifi',
    initials: 'NK',
    headline: 'Communication digitale',
    institution: 'Université Centrale',
    availability: 'Disponible',
    skills: ['Stratégie', 'Vidéo', 'Community management'],
  },
  {
    id: 't6',
    name: 'Sami Jlassi',
    initials: 'SJ',
    headline: 'Entrepreneuriat social',
    institution: 'IHEC',
    availability: 'Disponibilité limitée',
    skills: ['Business model', 'Pitch', 'Impact'],
  },
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Campus Energy Lab',
    summary:
      'Concevoir une solution intelligente pour mesurer et réduire la consommation énergétique du campus.',
    domain: 'Énergie',
    owner: 'Laboratoire Smart Campus',
    skills: ['React', 'IoT', 'Communication'],
  },
  {
    id: 'p2',
    title: 'From 2D to 3D',
    summary:
      'Transformer des images 2D en modèles 3D exploitables pour la pédagogie et le prototypage.',
    domain: 'Technologie',
    owner: 'Département Informatique',
    skills: ['Python', 'Vision', '3D'],
  },
  {
    id: 'p3',
    title: 'Bibliothèque inclusive',
    summary:
      'Imaginer une expérience numérique accessible pour faciliter l’accès aux ressources universitaires.',
    domain: 'Éducation',
    owner: 'Club Accessibilité',
    skills: ['UX design', 'Accessibilité', 'Développement web'],
  },
  {
    id: 'p4',
    title: 'Green Mobility Challenge',
    summary:
      'Créer un service de mobilité partagée adapté aux trajets courts entre les différents campus.',
    domain: 'Social',
    owner: 'Living Lab Mobilité',
    skills: ['Étude terrain', 'Data', 'Design service'],
  },
  {
    id: 'p5',
    title: 'MedSim',
    summary:
      'Développer un prototype de simulation interactive pour accompagner les étudiants en santé.',
    domain: 'Santé',
    owner: 'Faculté de Médecine',
    skills: ['Unity', 'Pédagogie', 'Motion design'],
  },
  {
    id: 'p6',
    title: 'Marché des créateurs',
    summary:
      'Lancer une vitrine commune pour valoriser les produits et savoir-faire des étudiants entrepreneurs.',
    domain: 'Entrepreneuriat',
    owner: 'Incubateur Campus',
    skills: ['E-commerce', 'Photo', 'Marketing'],
  },
]

export const opportunities: Opportunity[] = [
  {
    id: 'o1',
    title: 'Hackathon IA pour l’éducation',
    description:
      '48 heures pour prototyper un outil qui rend l’apprentissage plus personnalisé et accessible.',
    type: 'Hackathon',
    location: 'Tunis',
    owner: 'EduTech Hub',
    skills: ['IA', 'Produit', 'Pitch'],
  },
  {
    id: 'o2',
    title: 'Mission identité visuelle',
    description:
      'Accompagner une jeune association universitaire dans la création de son univers graphique.',
    type: 'Mission',
    location: 'Hybride',
    owner: 'Impact Campus',
    skills: ['Branding', 'Figma', 'Illustration'],
  },
  {
    id: 'o3',
    title: 'Défi ville durable',
    description:
      'Documenter les usages du quartier et proposer un service concret pour améliorer le quotidien.',
    type: 'Défi',
    location: 'Ariana',
    owner: 'Urban Lab',
    skills: ['Recherche', 'Data', 'Service design'],
  },
  {
    id: 'o4',
    title: 'Mentorat scientifique',
    description:
      'Animer des ateliers pratiques pour faire découvrir les sciences aux lycéens de la région.',
    type: 'Bénévolat',
    location: 'Campus',
    owner: 'Science pour tous',
    skills: ['Pédagogie', 'Prise de parole', 'Sciences'],
  },
]
