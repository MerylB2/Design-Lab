import React, { useState } from 'react';
import { ArrowRight, Palette, Sun, Calendar, MessageCircle, ShoppingBag } from 'lucide-react';

const RefonteInterfaceProjet = () => {
  const [selectedProject, setSelectedProject] = useState('meteo');

  const projects = {
    meteo: {
      name: 'Application Météo',
      icon: <Sun className="w-8 h-8" />,
      description: 'Refonte pour une expérience plus apaisante et naturelle',
      before: {
        title: 'Version Originale',
        colors: ['#0066CC', '#FFFFFF', '#FF0000', '#000000'],
        problems: [
          'Bleu trop saturé, fatigue visuelle',
          'Contraste agressif avec le rouge',
          'Manque de cohérence naturelle',
          'Pas d\'harmonie avec le thème météo'
        ],
        mockup: (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Météo</h3>
              <p className="text-sm">Paris, France</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-black mb-2">22°</div>
                <p className="text-slate-600">Ensoleillé</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-600 text-white p-3 rounded">
                  <p className="text-xs">LUN</p>
                  <p className="text-lg font-bold">24°</p>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded">
                  <p className="text-xs">MAR</p>
                  <p className="text-lg font-bold">26°</p>
                </div>
                <div className="bg-red-600 text-white p-3 rounded">
                  <p className="text-xs">MER</p>
                  <p className="text-lg font-bold">32°</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      after: {
        title: 'Refonte Proposée',
        colors: ['#87CEEB', '#FFE4B5', '#FFB347', '#4A90E2', '#F0F8FF'],
        improvements: [
          'Dégradé ciel naturel et apaisant',
          'Tons chauds pour températures élevées',
          'Palette inspirée de la nature',
          'Meilleure lisibilité et confort visuel'
        ],
        mockup: (
          <div className="bg-gradient-to-b from-sky-200 to-blue-100 rounded-xl shadow-lg overflow-hidden border-2 border-sky-300">
            <div className="bg-gradient-to-r from-sky-400 to-blue-400 text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Météo</h3>
              <p className="text-sm text-sky-100">Paris, France</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-slate-700 mb-2">22°</div>
                <p className="text-sky-700">Ensoleillé</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-sky-300 to-sky-400 text-white p-3 rounded-lg">
                  <p className="text-xs">LUN</p>
                  <p className="text-lg font-bold">24°</p>
                </div>
                <div className="bg-gradient-to-br from-sky-300 to-blue-400 text-white p-3 rounded-lg">
                  <p className="text-xs">MAR</p>
                  <p className="text-lg font-bold">26°</p>
                </div>
                <div className="bg-gradient-to-br from-orange-300 to-orange-400 text-white p-3 rounded-lg">
                  <p className="text-xs">MER</p>
                  <p className="text-lg font-bold">32°</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    },
    agenda: {
      name: 'Application Agenda',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Refonte pour une meilleure organisation et sérénité',
      before: {
        title: 'Version Originale',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
        problems: [
          'Couleurs criardes et agressives',
          'Difficile de hiérarchiser les événements',
          'Fatigue visuelle rapide',
          'Manque de professionnalisme'
        ],
        mockup: (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
            <div className="bg-red-600 text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Mon Agenda</h3>
              <p className="text-sm">Octobre 2025</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="bg-red-600 text-white p-3 rounded">
                <p className="font-bold">Réunion client</p>
                <p className="text-xs">9h00 - 10h30</p>
              </div>
              <div className="bg-green-500 text-white p-3 rounded">
                <p className="font-bold">Déjeuner équipe</p>
                <p className="text-xs">12h00 - 13h30</p>
              </div>
              <div className="bg-blue-600 text-white p-3 rounded">
                <p className="font-bold">Présentation projet</p>
                <p className="text-xs">15h00 - 16h00</p>
              </div>
              <div className="bg-yellow-400 text-black p-3 rounded">
                <p className="font-bold">Sport</p>
                <p className="text-xs">18h00 - 19h00</p>
              </div>
            </div>
          </div>
        )
      },
      after: {
        title: 'Refonte Proposée',
        colors: ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'],
        improvements: [
          'Palette moderne et professionnelle',
          'Couleurs nuancées et élégantes',
          'Catégorisation intuitive par teinte',
          'Confort visuel optimal'
        ],
        mockup: (
          <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden border-2 border-indigo-200">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Mon Agenda</h3>
              <p className="text-sm text-indigo-100">Octobre 2025</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg">
                <p className="font-bold text-slate-800">Réunion client</p>
                <p className="text-xs text-slate-600">9h00 - 10h30</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
                <p className="font-bold text-slate-800">Déjeuner équipe</p>
                <p className="text-xs text-slate-600">12h00 - 13h30</p>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                <p className="font-bold text-slate-800">Présentation projet</p>
                <p className="text-xs text-slate-600">15h00 - 16h00</p>
              </div>
              <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <p className="font-bold text-slate-800">Sport</p>
                <p className="text-xs text-slate-600">18h00 - 19h00</p>
              </div>
            </div>
          </div>
        )
      }
    },
    social: {
      name: 'Réseau Social',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Refonte pour une expérience plus chaleureuse et engageante',
      before: {
        title: 'Version Originale',
        colors: ['#1DA1F2', '#FFFFFF', '#14171A', '#657786'],
        problems: [
          'Bleu omniprésent, monotone',
          'Interface froide et impersonnelle',
          'Peu d\'émotion visuelle',
          'Manque de chaleur humaine'
        ],
        mockup: (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
            <div className="bg-blue-500 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Feed</h3>
              <div className="w-10 h-10 bg-blue-700 rounded-full"></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                  <div>
                    <p className="font-bold text-slate-900">Utilisateur</p>
                    <p className="text-xs text-slate-500">Il y a 2h</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-3">Voici mon nouveau post sur le réseau social...</p>
                <div className="flex gap-4 text-slate-500 text-sm">
                  <button className="text-blue-500">J'aime</button>
                  <button>Commenter</button>
                  <button>Partager</button>
                </div>
              </div>
            </div>
          </div>
        )
      },
      after: {
        title: 'Refonte Proposée',
        colors: ['#FF6B9D', '#C44569', '#FFA07A', '#FFE66D', '#4ECDC4'],
        improvements: [
          'Palette chaleureuse et accueillante',
          'Touches de couleur pour l\'émotion',
          'Dégradés subtils et modernes',
          'Ambiance conviviale et humaine'
        ],
        mockup: (
          <div className="bg-gradient-to-b from-pink-50 to-orange-50 rounded-xl shadow-lg overflow-hidden border-2 border-pink-200">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Feed</h3>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full"></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full"></div>
                  <div>
                    <p className="font-bold text-slate-900">Utilisateur</p>
                    <p className="text-xs text-slate-500">Il y a 2h</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-3">Voici mon nouveau post sur le réseau social...</p>
                <div className="flex gap-4 text-sm">
                  <button className="text-pink-500 font-semibold">❤️ J'aime</button>
                  <button className="text-teal-500 font-semibold">💬 Commenter</button>
                  <button className="text-orange-500 font-semibold">🔄 Partager</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    },
    ecommerce: {
      name: 'Application E-commerce',
      icon: <ShoppingBag className="w-8 h-8" />,
      description: 'Refonte pour stimuler l\'achat tout en restant élégant',
      before: {
        title: 'Version Originale',
        colors: ['#000000', '#FFFFFF', '#FF0000', '#CCCCCC'],
        problems: [
          'Trop austère et sérieux',
          'Rouge agressif pour les promos',
          'Manque de chaleur et d\'invitation',
          'Interface peu engageante'
        ],
        mockup: (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
            <div className="bg-black text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Shop</h3>
              <p className="text-sm text-slate-300">Nouveautés</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded p-3">
                  <div className="bg-slate-200 h-32 rounded mb-2"></div>
                  <p className="font-bold text-sm">Produit 1</p>
                  <p className="text-red-600 font-bold">€49.99</p>
                </div>
                <div className="border border-slate-200 rounded p-3">
                  <div className="bg-slate-200 h-32 rounded mb-2"></div>
                  <p className="font-bold text-sm">Produit 2</p>
                  <p className="text-red-600 font-bold">€39.99</p>
                </div>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded mt-4 font-bold">
                ACHETER
              </button>
            </div>
          </div>
        )
      },
      after: {
        title: 'Refonte Proposée',
        colors: ['#2D3748', '#ED8936', '#48BB78', '#F6E05E', '#EDF2F7'],
        improvements: [
          'Gris élégant au lieu du noir pur',
          'Orange chaleureux pour les prix',
          'Vert pour encourager l\'action',
          'Palette équilibrée et premium'
        ],
        mockup: (
          <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden border-2 border-slate-300">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Shop</h3>
              <p className="text-sm text-slate-300">Nouveautés</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-32 rounded-lg mb-2"></div>
                  <p className="font-bold text-sm text-slate-800">Produit 1</p>
                  <p className="text-orange-500 font-bold text-lg">€49.99</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-32 rounded-lg mb-2"></div>
                  <p className="font-bold text-sm text-slate-800">Produit 2</p>
                  <p className="text-orange-500 font-bold text-lg">€39.99</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg mt-4 font-bold shadow-lg hover:shadow-xl transition-shadow">
                AJOUTER AU PANIER
              </button>
            </div>
          </div>
        )
      }
    }
  };

  const currentProject = projects[selectedProject];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-10 h-10 text-violet-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              Mockup Visuel - Projet 1
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Refonte Colorimétrique d'une Interface
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-violet-700 mb-4">Consigne du projet</h2>
          <div className="bg-violet-50 border-l-4 border-violet-400 p-6 rounded mb-6">
            <p className="text-slate-700 mb-4">
              <strong className="text-violet-800">Objectif :</strong> Choisir une application existante et proposer une nouvelle palette de couleurs cohérente avec son usage et son public cible
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Analyser l'interface actuelle et identifier les problèmes colorimétriques</li>
              <li>Définir une nouvelle palette harmonieuse et fonctionnelle</li>
              <li>Appliquer la refonte en respectant l'accessibilité (WCAG)</li>
              <li>Présenter un avant/après avec justification des choix</li>
            </ul>
          </div>

          {/* Project Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(projects).map(([key, project]) => (
              <button
                key={key}
                onClick={() => setSelectedProject(key)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedProject === key
                    ? 'bg-violet-100 border-violet-500 shadow-lg'
                    : 'bg-white border-slate-200 hover:border-violet-300'
                }`}
              >
                <div className={`mb-2 ${selectedProject === key ? 'text-violet-600' : 'text-slate-600'}`}>
                  {project.icon}
                </div>
                <p className={`text-sm font-semibold ${selectedProject === key ? 'text-violet-700' : 'text-slate-700'}`}>
                  {project.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-8 bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-violet-600">
              {currentProject.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">{currentProject.name}</h3>
              <p className="text-slate-600">{currentProject.description}</p>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* BEFORE */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{currentProject.before.title}</h3>
              <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-semibold">AVANT</span>
            </div>

            {/* Mockup */}
            <div className="p-8 bg-slate-50">
              {currentProject.before.mockup}
            </div>

            {/* Color Palette */}
            <div className="p-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3">Palette utilisée :</h4>
              <div className="flex gap-2 mb-4">
                {currentProject.before.colors.map((color, idx) => (
                  <div key={idx} className="flex-1">
                    <div 
                      className="h-16 rounded-lg shadow-md border-2 border-white"
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-2 font-mono">{color}</p>
                  </div>
                ))}
              </div>

              {/* Problems */}
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <h5 className="font-bold text-red-800 mb-2">Problèmes identifiés :</h5>
                <ul className="space-y-1 text-sm text-red-700">
                  {currentProject.before.problems.map((problem, idx) => (
                    <li key={idx}>• {problem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{currentProject.after.title}</h3>
              <span className="bg-green-800 px-3 py-1 rounded-full text-sm font-semibold">APRÈS</span>
            </div>

            {/* Mockup */}
            <div className="p-8 bg-slate-50">
              {currentProject.after.mockup}
            </div>

            {/* Color Palette */}
            <div className="p-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3">Nouvelle palette :</h4>
              <div className="flex gap-2 mb-4">
                {currentProject.after.colors.map((color, idx) => (
                  <div key={idx} className="flex-1">
                    <div 
                      className="h-16 rounded-lg shadow-md border-2 border-white"
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-2 font-mono">{color}</p>
                  </div>
                ))}
              </div>

              {/* Improvements */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h5 className="font-bold text-green-800 mb-2">Améliorations apportées :</h5>
                <ul className="space-y-1 text-sm text-green-700">
                  {currentProject.after.improvements.map((improvement, idx) => (
                    <li key={idx}>✓ {improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Arrow */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-xl p-6">
            <ArrowRight className="w-12 h-12 text-violet-600" />
          </div>
        </div>

        {/* Methodology Guide */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Méthodologie de Refonte Colorimétrique
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h4 className="font-bold text-blue-800 mb-2">Analyse</h4>
              <p className="text-sm text-slate-700">
                Identifier l'usage, le public cible et les problèmes de l'interface actuelle
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Recherche</h4>
              <p className="text-sm text-slate-700">
                Étudier la psychologie des couleurs et les références du domaine
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h4 className="font-bold text-green-800 mb-2">Création</h4>
              <p className="text-sm text-slate-700">
                Concevoir une palette harmonieuse et tester l'accessibilité WCAG
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h4 className="font-bold text-orange-800 mb-2">Validation</h4>
              <p className="text-sm text-slate-700">
                Appliquer la refonte et valider avec des tests utilisateurs
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="mt-8 p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border-2 border-violet-200">
            <h4 className="font-bold text-violet-800 mb-4 text-lg">Principes clés à respecter :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p>✓ <strong>Cohérence :</strong> Palette limitée à 3-5 couleurs principales</p>
                <p>✓ <strong>Hiérarchie :</strong> Couleur primaire dominante, secondaires et accent</p>
                <p>✓ <strong>Contexte :</strong> Adaptation aux codes du secteur</p>
              </div>
              <div className="space-y-2">
                <p>✓ <strong>Accessibilité :</strong> Contraste minimum de 4.5:1</p>
                <p>✓ <strong>Émotion :</strong> Couleurs alignées avec l'expérience souhaitée</p>
                <p>✓ <strong>Flexibilité :</strong> Système évolutif avec nuances</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RefonteInterfaceProjet;