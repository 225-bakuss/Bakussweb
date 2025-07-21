// Mock data pour le site Bakuss Web Services

export const mockServices = [
  {
    id: 'site-vitrine',
    title: 'Création de site vitrine',
    description: 'Site web professionnel pour présenter votre entreprise et attirer de nouveaux clients.',
    features: [
      'Design responsive et moderne',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Hébergement 1 an inclus',
      'Formation à la gestion'
    ],
    price: 'À partir de 150 000 FCFA'
  },
  {
    id: 'site-complet',
    title: 'Création de site complet',
    description: 'Solution web complète avec fonctionnalités avancées pour votre activité.',
    features: [
      'Site multi-pages personnalisé',
      'Système de gestion de contenu',
      'Optimisation SEO avancée',
      'Intégration réseaux sociaux',
      'Analytics et suivi'
    ],
    price: 'À partir de 300 000 FCFA'
  },
  {
    id: 'e-commerce',
    title: 'Site e-commerce avec commande WhatsApp',
    description: 'Boutique en ligne avec système de commande via WhatsApp et paiement intégré.',
    features: [
      'Catalogue produits complet',
      'Commande via WhatsApp',
      'Paiement mobile money',
      'Gestion des stocks',
      'Tableau de bord vendeur'
    ],
    price: 'À partir de 500 000 FCFA'
  },
  {
    id: 'logo',
    title: 'Création de logo',
    description: 'Logo professionnel et identité visuelle pour votre marque.',
    features: [
      'Logo original et unique',
      'Déclinaisons couleurs',
      'Formats vectoriels HD',
      '3 propositions créatives',
      'Révisions incluses'
    ],
    price: 'À partir de 50 000 FCFA'
  },
  {
    id: 'carte-visite',
    title: 'Conception de cartes de visite',
    description: 'Cartes de visite professionnelles qui marquent les esprits.',
    features: [
      'Design personnalisé',
      'Impression haute qualité',
      'Finitions au choix',
      'Format standard ou original',
      'Livraison rapide'
    ],
    price: 'À partir de 25 000 FCFA'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & assistance',
    description: 'Support technique et maintenance pour garder votre site performant.',
    features: [
      'Mises à jour régulières',
      'Sauvegardes automatiques',
      'Support technique 24h',
      'Optimisation performance',
      'Rapports mensuels'
    ],
    price: 'À partir de 30 000 FCFA/mois'
  }
];

export const mockPortfolio = [
  {
    id: 1,
    title: 'Restaurant Le Savoureux',
    category: 'Site vitrine',
    description: 'Site web pour restaurant avec menu en ligne et réservations.',
    image: '/api/placeholder/400/300',
    link: '#',
    technologies: ['WordPress', 'Responsive Design', 'SEO']
  },
  {
    id: 2,
    title: 'Boutique Mode Africaine',
    category: 'E-commerce',
    description: 'Boutique en ligne avec commandes WhatsApp et paiement mobile.',
    image: '/api/placeholder/400/300',
    link: '#',
    technologies: ['E-commerce', 'WhatsApp API', 'Mobile Money']
  },
  {
    id: 3,
    title: 'Cabinet Médical Dr. Koné',
    category: 'Site professionnel',
    description: 'Site professionnel avec prise de rendez-vous en ligne.',
    image: '/api/placeholder/400/300',
    link: '#',
    technologies: ['Booking System', 'Responsive', 'Sécurisé']
  },
  {
    id: 4,
    title: 'Entreprise BTP Construct+',
    category: 'Site corporate',
    description: 'Site corporate avec galerie projets et devis en ligne.',
    image: '/api/placeholder/400/300',
    link: '#',
    technologies: ['Portfolio', 'Formulaires', 'Galerie']
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'Aminata Diallo',
    position: 'Directrice, Restaurant Le Palmier',
    content: 'Bakuss Web Services a créé un site magnifique pour notre restaurant. Nos réservations ont augmenté de 40% depuis le lancement !',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 2,
    name: 'Kouadio Jean-Baptiste',
    position: 'Fondateur, KB Logistics',
    content: 'Très professionnel et à l\'écoute. Notre site e-commerce fonctionne parfaitement et les clients adorent commander via WhatsApp.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 3,
    name: 'Dr. Marie Touré',
    position: 'Médecin, Cabinet Médical Santé+',
    content: 'Un travail exceptionnel ! Le site est moderne et les patients peuvent facilement prendre rendez-vous en ligne. Merci !',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 4,
    name: 'Ibrahim Sanogo',
    position: 'CEO, Tech Solutions CI',
    content: 'Bakuss Web Services comprend vraiment les besoins des entreprises ivoiriennes. Leur expertise technique est remarquable.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 5,
    name: 'Fatou Kone',
    position: 'Propriétaire, Boutique Élégance',
    content: 'Mon site e-commerce est parfait ! Les clients commandent facilement et le paiement mobile money fonctionne sans problème.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  }
];

export const mockCompanyInfo = {
  name: 'Bakuss Web Services',
  tagline: 'Votre présence en ligne commence ici',
  description: 'Bakuss Web Services est une agence de création web à Bouaké, dédiée à la digitalisation des PME et entrepreneurs. Nous croyons qu\'un site internet doit être accessible, rapide et orienté résultats.',
  location: 'Bouaké, Côte d\'Ivoire',
  phone: '0556109225',
  whatsapp: '2250556109225',
  email: 'contact@bakusswebservices.com',
  facebook: 'https://facebook.com/bakusswebservices',
  services: 6,
  clients: '50+',
  experience: '3+ ans',
  satisfaction: '100%'
};