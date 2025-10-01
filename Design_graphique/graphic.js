import React, { useState } from 'react';
import { Menu, X, Palette, Type, Eye, Music, Layers, BookOpen, Home, ChevronRight } from 'lucide-react';

const SiteDesignGraphique = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { id: 'typo', label: 'Typographie', icon: <Type className="w-5 h-5" /> },
    { id: 'couleur', label: 'Couleur', icon: <Palette className="w-5 h-5" /> },
    { id: 'projets', label: 'Projets', icon: <Layers className="w-5 h-5" /> },
    { id: 'ressources', label: 'Ressources', icon: <BookOpen className="w-5 h-5" /> }
  ];

  const exercices = {
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
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Design Lab</h1>
                <p className="text-xs text-slate-500">UI/UX & Design Graphique</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-slate-800 mb-4">
                Maîtrisez le Design Graphique
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Une plateforme complète d'apprentissage pour développer vos compétences en UI/UX Design, typographie et théorie des couleurs
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('typo')}
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Commencer les exercices
                </button>
                <button
                  onClick={() => setCurrentPage('ressources')}
                  className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold border-2 border-slate-300 hover:border-violet-400 transition-all"
                >
                  Voir les ressources
                </button>
              </div>
            </div>

            {/* Featured Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              <div 
                className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-violet-400"
                onClick={() => setCurrentPage('typo')}
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Type className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Typographie</h3>
                <p className="text-slate-600 mb-4">
                  Apprenez à identifier les polices, créer des spécimens et hiérarchiser vos textes efficacement
                </p>
                <div className="flex items-center text-violet-600 font-semibold">
                  3 exercices pratiques <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>

              <div 
                className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-violet-400"
                onClick={() => setCurrentPage('couleur')}
              >
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Couleur</h3>
                <p className="text-slate-600 mb-4">
                  Maîtrisez la théorie des couleurs, créez des palettes harmonieuses et respectez l'accessibilité
                </p>
                <div className="flex items-center text-violet-600 font-semibold">
                  3 exercices pratiques <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>

              <div 
                className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-violet-400"
                onClick={() => setCurrentPage('projets')}
              >
                <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Projets</h3>
                <p className="text-slate-600 mb-4">
                  Mettez en pratique vos compétences avec des projets réels de refonte d'interfaces
                </p>
                <div className="flex items-center text-violet-600 font-semibold">
                  Projets complets <ChevronRight className="w-5 h-5 ml-1" />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl shadow-xl p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">6</div>
                  <p className="text-violet-100">Exercices pratiques</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">3</div>
                  <p className="text-violet-100">Thématiques principales</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">∞</div>
                  <p className="text-violet-100">Possibilités créatives</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TYPOGRAPHIE PAGE */}
        {currentPage === 'typo' && (
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-10 h-10 text-violet-600" />
                <h1 className="text-4xl font-bold text-slate-800">Typographie</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                La typographie est l'art de disposer les caractères pour rendre le texte lisible, agréable et expressif. 
                Ces exercices vous aideront à développer votre sensibilité typographique.
              </p>
            </div>

            <div className="space-y-6">
              {exercices.typo.map((exercice, index) => (
                <div key={exercice.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-violet-400 transition-all">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-2">{exercice.title}</h3>
                          <p className="text-slate-600 mb-4">{exercice.description}</p>
                          <div className="flex gap-3">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                              {exercice.niveau}
                            </span>
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                              ⏱ {exercice.duree}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Accéder à l'exercice
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Theory Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Principes fondamentaux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Classification des polices</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• <strong>Serif</strong> : avec empattements (Times, Garamond)</li>
                    <li>• <strong>Sans-serif</strong> : sans empattements (Arial, Helvetica)</li>
                    <li>• <strong>Script</strong> : imitant l'écriture manuscrite</li>
                    <li>• <strong>Monospace</strong> : largeur fixe (Courier)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Hiérarchie typographique</h4>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• <strong>Taille</strong> : différencier titres et corps de texte</li>
                    <li>• <strong>Graisse</strong> : bold pour les éléments importants</li>
                    <li>• <strong>Couleur</strong> : créer des niveaux d'attention</li>
                    <li>• <strong>Espacement</strong> : aérer pour améliorer la lecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COULEUR PAGE */}
        {currentPage === 'couleur' && (
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-10 h-10 text-violet-600" />
                <h1 className="text-4xl font-bold text-slate-800">Couleur et Psychologie Chromatique</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                La couleur est un outil puissant en design. Elle transmet des émotions, guide l'attention et crée des ambiances. 
                Apprenez à maîtriser la théorie des couleurs et l'accessibilité.
              </p>
            </div>

            <div className="space-y-6">
              {exercices.couleur.map((exercice, index) => (
                <div key={exercice.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-violet-400 transition-all">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {index + 4}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-2">{exercice.title}</h3>
                          <p className="text-slate-600 mb-4">{exercice.description}</p>
                          <div className="flex gap-3">
                            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                              {exercice.niveau}
                            </span>
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                              ⏱ {exercice.duree}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Accéder à l'exercice
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Wheel */}
            <div className="mt-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Le Cercle Chromatique</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold text-slate-800 mb-2">Couleurs Primaires</h4>
                  <div className="flex gap-2 mb-2">
                    <div className="flex-1 h-12 bg-red-500 rounded"></div>
                    <div className="flex-1 h-12 bg-yellow-400 rounded"></div>
                    <div className="flex-1 h-12 bg-blue-500 rounded"></div>
                  </div>
                  <p className="text-sm text-slate-600">Rouge, Jaune, Bleu - Base de toutes les couleurs</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold text-slate-800 mb-2">Couleurs Secondaires</h4>
                  <div className="flex gap-2 mb-2">
                    <div className="flex-1 h-12 bg-orange-500 rounded"></div>
                    <div className="flex-1 h-12 bg-green-500 rounded"></div>
                    <div className="flex-1 h-12 bg-purple-500 rounded"></div>
                  </div>
                  <p className="text-sm text-slate-600">Mélange de deux primaires</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold text-slate-800 mb-2">Couleurs Tertiaires</h4>
                  <div className="flex gap-2 mb-2">
                    <div className="flex-1 h-12 bg-red-700 rounded"></div>
                    <div className="flex-1 h-12 bg-teal-500 rounded"></div>
                    <div className="flex-1 h-12 bg-indigo-500 rounded"></div>
                  </div>
                  <p className="text-sm text-slate-600">Mélange primaire + secondaire</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROJETS PAGE */}
        {currentPage === 'projets' && (
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-10 h-10 text-violet-600" />
                <h1 className="text-4xl font-bold text-slate-800">Projets Pratiques</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                Mettez en application vos compétences avec des projets complets de refonte d'interfaces. 
                Analysez, concevez et justifiez vos choix de design.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8">
                <h3 className="text-3xl font-bold mb-2">Projet 1 : Refonte Colorimétrique</h3>
                <p className="text-purple-100">Proposer une nouvelle palette cohérente pour une interface existante</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-800 mb-3">Objectifs du projet :</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Analyser une interface existante (météo, agenda, réseau social, e-commerce)</li>
                    <li>✓ Identifier les problèmes colorimétriques actuels</li>
                    <li>✓ Créer une palette harmonieuse adaptée à l'usage</li>
                    <li>✓ Appliquer la refonte en respectant l'accessibilité WCAG</li>
                    <li>✓ Présenter un avant/après avec justification des choix</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h5 className="font-bold text-purple-800 mb-2">Niveau</h5>
                    <p className="text-slate-700">Intermédiaire à Avancé</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h5 className="font-bold text-purple-800 mb-2">Durée estimée</h5>
                    <p className="text-slate-700">2-3 heures</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Commencer le projet
                </button>
              </div>
            </div>
          </div>
        )}

        {/* RESSOURCES PAGE */}
        {currentPage === 'ressources' && (
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-10 h-10 text-violet-600" />
                <h1 className="text-4xl font-bold text-slate-800">Ressources</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl">
                Une sélection d'outils, références et ressources pour approfondir vos connaissances en design graphique.
              </p>
            </div>

            <div className="space-y-8">
              {/* Outils */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Outils Recommandés</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">Adobe Color</h4>
                    <p className="text-sm text-slate-600 mb-2">Création de palettes de couleurs harmonieuses</p>
                    <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">Coolors</h4>
                    <p className="text-sm text-slate-600 mb-2">Générateur de palettes rapide et intuitif</p>
                    <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">WebAIM Contrast Checker</h4>
                    <p className="text-sm text-slate-600 mb-2">Vérification de l'accessibilité des contrastes</p>
                    <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">Google Fonts</h4>
                    <p className="text-sm text-slate-600 mb-2">Bibliothèque de polices gratuites</p>
                    <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">Figma</h4>
                    <p className="text-sm text-slate-600 mb-2">Outil de design d'interface collaboratif</p>
                    <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">Adobe Illustrator</h4>
                    <p className="text-sm text-slate-600 mb-2">Création graphique professionnelle</p>
                    <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
                  </div>
                </div>
              </div>

              {/* Standards */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Standards & Guidelines</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-slate-800 mb-2">WCAG 2.1 (Accessibilité Web)</h4>
                    <p className="text-sm text-slate-600">Normes internationales pour rendre le web accessible à tous</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-slate-800 mb-2">Material Design (Google)</h4>
                    <p className="text-sm text-slate-600">System de design complet avec principes et composants</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-slate-800 mb-2">Human Interface Guidelines (Apple)</h4>
                    <p className="text-sm text-slate-600">Recommandations pour le design d'interfaces iOS et macOS</p>
                  </div>
                </div>
              </div>

              {/* Books */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Livres Essentiels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">The Elements of Typographic Style</h4>
                      <p className="text-sm text-slate-600 mb-1">Robert Bringhurst</p>
                      <p className="text-xs text-slate-500">Bible de la typographie</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Interaction of Color</h4>
                      <p className="text-sm text-slate-600 mb-1">Josef Albers</p>
                      <p className="text-xs text-slate-500">Théorie des couleurs avancée</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Don't Make Me Think</h4>
                      <p className="text-sm text-slate-600 mb-1">Steve Krug</p>
                      <p className="text-xs text-slate-500">UX Design et ergonomie web</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Refactoring UI</h4>
                      <p className="text-sm text-slate-600 mb-1">Adam Wathan & Steve Schoger</p>
                      <p className="text-xs text-slate-500">Design d'interfaces pratique</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glossaire */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Glossaire du Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border-l-4 border-violet-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">UI Design</h4>
                    <p className="text-sm text-slate-600">User Interface - Conception visuelle des interfaces</p>
                  </div>
                  <div className="p-4 border-l-4 border-violet-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">UX Design</h4>
                    <p className="text-sm text-slate-600">User Experience - Conception de l'expérience utilisateur</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">Kerning</h4>
                    <p className="text-sm text-slate-600">Espacement entre deux caractères spécifiques</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">Leading</h4>
                    <p className="text-sm text-slate-600">Interligne, espace vertical entre les lignes de texte</p>
                  </div>
                  <div className="p-4 border-l-4 border-pink-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">Teinte (Hue)</h4>
                    <p className="text-sm text-slate-600">Position sur le cercle chromatique (rouge, bleu, vert...)</p>
                  </div>
                  <div className="p-4 border-l-4 border-pink-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">Saturation</h4>
                    <p className="text-sm text-slate-600">Intensité ou pureté d'une couleur</p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">Contraste</h4>
                    <p className="text-sm text-slate-600">Différence de luminosité entre deux couleurs</p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-slate-50">
                    <h4 className="font-bold text-slate-800 mb-1">Accessibilité</h4>
                    <p className="text-sm text-slate-600">Conception utilisable par tous, y compris personnes handicapées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 rounded-lg">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Design Lab</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Plateforme d'apprentissage dédiée au design graphique et UI/UX
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Exercices</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Typographie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Couleur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Outils</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Livres</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Glossaire</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 Design Lab - Plateforme d'apprentissage en Design Graphique</p>
            <p className="mt-2">Développé avec passion pour les designers en herbe 🎨</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SiteDesignGraphique;