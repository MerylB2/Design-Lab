import { Home, Type, Palette, Layers, BookOpen } from 'lucide-react';

export const menuItems = [
  { id: 'home', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
  { id: 'typo', label: 'Typographie', icon: <Type className="w-5 h-5" /> },
  { id: 'couleur', label: 'Couleur', icon: <Palette className="w-5 h-5" /> },
  { id: 'projets', label: 'Projets', icon: <Layers className="w-5 h-5" /> },
  { id: 'ressources', label: 'Ressources', icon: <BookOpen className="w-5 h-5" /> }
];

export const exercices = {
  typo: [
    {
      id: 'ex1',
      title: 'Exercice 1 : Identification de typographies',
      description: 'Associer des mots affichés avec le nom de leur police',
      niveau: 'Débutant',
      duree: '15 min'
    },
    {
      id: 'ex2',
      title: 'Exercice 2 : Spécimen typographique',
      description: 'Créer une affiche présentant alphabet, chiffres et phrase type',
      niveau: 'Intermédiaire',
      duree: '45 min'
    },
    {
      id: 'ex3',
      title: 'Exercice 3 : Hiérarchisation de texte',
      description: 'Mettre en page un article avec hiérarchie visuelle',
      niveau: 'Intermédiaire',
      duree: '30 min'
    }
  ],
  couleur: [
    {
      id: 'ex4',
      title: 'Exercice 4 : Palettes harmonieuses',
      description: 'Créer 3 palettes (analogique, complémentaire, triadique)',
      niveau: 'Débutant',
      duree: '20 min'
    },
    {
      id: 'ex5',
      title: 'Exercice 5 : Test de contraste',
      description: 'Vérifier l\'accessibilité de couples texte/fond (WCAG)',
      niveau: 'Intermédiaire',
      duree: '25 min'
    },
    {
      id: 'ex6',
      title: 'Exercice 6 : Synesthésie musicale',
      description: 'Traduire une musique en composition colorée',
      niveau: 'Avancé',
      duree: '60 min'
    }
  ],
  projets: [
    {
      id: 'projet1',
      title: 'Projet 1 : Refonte colorimétrique',
      description: 'Proposer une nouvelle palette de couleurs pour une interface existante',
      niveau: 'Intermédiaire',
      duree: '2h'
    },
    {
      id: 'projetFinal',
      title: 'Projet Final S1 : Mini-application + UI simple',
      description: 'Cahier des charges complet pour le projet de synthèse du semestre',
      niveau: 'Avancé',
      duree: '6-8 semaines'
    }
  ]
};