import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Eye, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp,
  ArrowUp,
  BookOpen,
  Code,
  Database,
  Users,
  Globe,
  Shield,
  Presentation,
  Calendar,
  Target,
  Award,
  TrendingUp,
  Palette,
  Lightbulb
} from 'lucide-react';

const ProjetFinalS1 = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [showFab, setShowFab] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const handleChecklistChange = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const modules = [
    { code: 'TC101', name: 'Algorithmique & Programmation (Python/JS)', application: 'Développement backend et logique applicative' },
    { code: 'TC102', name: 'Bases de données SQL', application: 'Conception et administration de la BDD' },
    { code: 'TC103', name: 'Réseaux & Systèmes (Linux, TCP/IP)', application: 'Déploiement sur environnement Linux' },
    { code: 'TC104', name: 'Design graphique & UI', application: 'Conception et réalisation de l\'interface' },
    { code: 'TC106', name: 'Anglais technique', application: 'Documentation et présentation en anglais' },
    { code: 'TC107', name: 'Soft Skills (organisation, créativité)', application: 'Gestion de projet et innovation' }
  ];

  const technologies = [
    { title: 'Backend', content: 'Python 3.8+ OU JavaScript (Node.js 14+)', details: 'Frameworks : Flask, Django, Express.js', icon: <Code className="w-8 h-8" /> },
    { title: 'Base de données', content: 'SQL obligatoire', details: 'MySQL 8.0+ / PostgreSQL 12+ / SQLite 3', icon: <Database className="w-8 h-8" /> },
    { title: 'Frontend', content: 'HTML5 + CSS3 + JavaScript', details: 'Frameworks optionnels : Bootstrap, Tailwind', icon: <Globe className="w-8 h-8" /> },
    { title: 'Système', content: 'Linux', details: 'Ubuntu 20.04+ / Debian / CentOS', icon: <Shield className="w-8 h-8" /> }
  ];

  const checklistItems = [
    'Système d\'authentification (inscription, connexion) OU gestion multi-utilisateurs',
    'Opérations CRUD complètes sur au moins 2 entités principales',
    'Système de recherche/filtrage avec minimum 2 critères',
    'Visualisation de données (graphique ou statistiques)',
    'Au moins 1 fonctionnalité avancée (export, API, notifications, etc.)',
    'Base de données avec minimum 3 tables relationnelles',
    'Interface responsive (mobile et desktop)',
    'Sécurité : hachage mots de passe, protection SQL injection/XSS'
  ];

  const evaluationCriteria = [
    { category: 'Fonctionnalité et complétude', weight: '25%', points: 25, details: ['Application opérationnelle (10pt)', 'Fonctionnalités implémentées (10pt)', 'Robustesse et gestion erreurs (5pt)'] },
    { category: 'Qualité technique', weight: '30%', points: 30, details: ['Code (Python/JS) (10pt)', 'Base de données (10pt)', 'Architecture et déploiement Linux (10pt)'] },
    { category: 'Interface utilisateur (UI/UX)', weight: '15%', points: 15, details: ['Design et ergonomie (8pt)', 'Facilité d\'utilisation (7pt)'] },
    { category: 'Documentation', weight: '15%', points: 15, details: ['Documentation technique (7pt)', 'Documentation utilisateur (5pt)', 'Anglais technique (3pt)'] },
    { category: 'Gestion de projet', weight: '10%', points: 10, details: ['Organisation et planification (5pt)', 'Créativité et originalité (5pt)'] },
    { category: 'Présentation', weight: '5%', points: 5, details: ['Clarté et structure (3pt)', 'Démonstration (2pt)'] }
  ];

  const planning = [
    { week: 'S1', phase: 'Conception', objectives: 'Analyse besoins, MCD, wireframes', deliverable: 'Specs validées' },
    { week: 'S2', phase: 'Setup', objectives: 'Config environnement, BDD, structure', deliverable: 'Projet initialisé' },
    { week: 'S3-4', phase: 'Développement', objectives: 'CRUD, interface basique', deliverable: 'MVP fonctionnel' },
    { week: 'S5', phase: 'Fonctionnalités', objectives: 'Fonctionnalités avancées', deliverable: 'Version beta' },
    { week: 'S6', phase: 'Sécurité & Tests', objectives: 'Sécurité, RGPD, corrections', deliverable: 'Version RC' },
    { week: 'S7', phase: 'Documentation', objectives: 'Docs, polissage, déploiement', deliverable: 'Version finale' },
    { week: 'S8', phase: 'Présentation', objectives: 'Préparation soutenance', deliverable: 'Soutenance' }
  ];

  const securityChecklist = [
    'Mots de passe HACHÉS avec bcrypt (jamais en clair)',
    'Protection contre les injections SQL (requêtes préparées/ORM)',
    'Protection contre XSS (échappement automatique des templates)',
    'Protection CSRF (tokens dans les formulaires)',
    'Validation des entrées côté serveur',
    'Pas de credentials en dur dans le code (utiliser .env)',
    'Sessions sécurisées avec timeout',
    'Limitation des tentatives de connexion'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-12 rounded-2xl mb-8 text-center shadow-xl">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10" />
            Projet Final S1 : Mini-application + UI simple
          </h1>
          <p className="text-xl opacity-95">Cahier des Charges</p>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 sticky top-4 z-50">
          <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Table des matières
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {['Contexte', 'Spécifications', 'Compétences', 'Cadrage', 'Livrables', 'Évaluation', 'Contraintes', 'Conseils', 'Sécurité', 'Présentation'].map((item, index) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="p-3 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-lg text-sm font-medium text-slate-700 hover:text-indigo-700 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Contexte */}
        <section id="contexte" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Target className="w-8 h-8" />
            Contexte et Objectifs
          </h2>
          
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-indigo-400 pl-4">
            1.1 Contexte pédagogique
          </h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Le module PRJ101 constitue le projet de synthèse du premier semestre (S1). Il permet aux étudiants de mobiliser et d'intégrer l'ensemble des compétences acquises dans les modules techniques du semestre.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-500">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-6 h-6 text-indigo-600" />
                <h4 className="font-bold text-indigo-800">Objectif principal</h4>
              </div>
              <p className="text-slate-700">Développer une application complète de bout en bout en mobilisant tous les modules techniques</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-green-800">Durée</h4>
              </div>
              <p className="text-slate-700">6-8 semaines<br />30-50 heures de travail</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-6 h-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">Modalité</h4>
              </div>
              <p className="text-slate-700">Travail individuel ou en binôme selon directives</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-indigo-400 pl-4">
            1.2 Modules concernés
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Code</th>
                  <th className="p-4 text-left font-semibold">Module</th>
                  <th className="p-4 text-left font-semibold">Application dans PRJ101</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module, index) => (
                  <tr key={module.code} className={`border-b border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-indigo-50 transition-colors`}>
                    <td className="p-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {module.code}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-800">{module.name}</td>
                    <td className="p-4 text-slate-700">{module.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Spécifications */}
        <section id="spécifications" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Code className="w-8 h-8" />
            Spécifications Techniques
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            2.1 Technologies obligatoires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {technologies.map((tech) => (
              <div key={tech.title} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3 text-indigo-600">
                  {tech.icon}
                  <h4 className="font-bold text-slate-800">{tech.title}</h4>
                </div>
                <p className="font-semibold text-slate-800 mb-2">{tech.content}</p>
                <p className="text-sm text-slate-600">{tech.details}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            2.2 Fonctionnalités minimales requises
          </h3>
          <div className="space-y-3 mb-6">
            {checklistItems.map((item, index) => (
              <label key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors group">
                <input
                  type="checkbox"
                  checked={checkedItems[`spec-${index}`] || false}
                  onChange={() => handleChecklistChange(`spec-${index}`)}
                  className="w-5 h-5 text-indigo-600 rounded border-2 border-slate-300 focus:ring-indigo-500 mt-0.5"
                />
                <span className={`text-slate-700 group-hover:text-indigo-700 ${checkedItems[`spec-${index}`] ? 'line-through text-slate-500' : ''}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-800">Conseil :</span>
            </div>
            <p className="text-slate-700">
              Commencez par un MVP (Minimum Viable Product) avec les fonctionnalités essentielles, puis ajoutez des fonctionnalités bonus si le temps le permet.
            </p>
          </div>
        </section>

        {/* Section 3: Évaluation */}
        <section id="évaluation" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Award className="w-8 h-8" />
            Critères d'Évaluation
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            5.1 Grille de notation (sur 100 points)
          </h3>
          <div className="space-y-4 mb-8">
            {evaluationCriteria.map((criteria, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border-l-4 border-indigo-500">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-800 text-lg">{criteria.category}</h4>
                  <div className="flex items-center gap-3">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {criteria.weight}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {criteria.points} pts
                    </span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {criteria.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-slate-600 text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-800">Points bonus :</span>
            </div>
            <p className="text-slate-700 mb-2">
              Tests unitaires (+3%), CI/CD (+2%), Docker (+2%), API REST documentée (+2%), Accessibilité avancée (+2%)
            </p>
            <p className="text-sm text-slate-600 italic">Maximum +10% de bonus sur la note finale</p>
          </div>
        </section>

        {/* Section 4: Planning */}
        <section id="contraintes" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Calendar className="w-8 h-8" />
            Planning et Jalons
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Semaine</th>
                  <th className="p-4 text-left font-semibold">Phase</th>
                  <th className="p-4 text-left font-semibold">Objectifs</th>
                  <th className="p-4 text-left font-semibold">Livrable</th>
                </tr>
              </thead>
              <tbody>
                {planning.map((phase, index) => (
                  <tr key={index} className={`border-b border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-indigo-50 transition-colors`}>
                    <td className="p-4 font-bold text-indigo-700">{phase.week}</td>
                    <td className="p-4 font-medium text-slate-800">{phase.phase}</td>
                    <td className="p-4 text-slate-700">{phase.objectives}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {phase.deliverable}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Sécurité */}
        <section id="sécurité" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Shield className="w-8 h-8" />
            Sécurité et RGPD
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            8.1 Checklist de sécurité obligatoire
          </h3>
          <div className="space-y-3 mb-8">
            {securityChecklist.map((item, index) => (
              <label key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-red-50 transition-colors group">
                <input
                  type="checkbox"
                  checked={checkedItems[`security-${index}`] || false}
                  onChange={() => handleChecklistChange(`security-${index}`)}
                  className="w-5 h-5 text-red-600 rounded border-2 border-slate-300 focus:ring-red-500 mt-0.5"
                />
                <span className={`text-slate-700 group-hover:text-red-700 ${checkedItems[`security-${index}`] ? 'line-through text-slate-500' : ''}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-800">Important :</span>
            </div>
            <p className="text-slate-700">
              La sécurité et le RGPD sont des critères d'évaluation. Une application non sécurisée ou non conforme sera pénalisée, même si elle est fonctionnelle.
            </p>
          </div>
        </section>


        {/* Section 6: Référentiel de compétences */}
        <section id="compétences" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Users className="w-8 h-8" />
            Référentiel de Compétences
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">Développement & Systèmes</h3>
                <button
                  onClick={() => toggleAccordion('dev-systemes')}
                  className="ml-auto text-blue-600 hover:text-blue-800"
                >
                  {activeSection === 'dev-systemes' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              
              {activeSection === 'dev-systemes' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-2">Connaissances</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Algorithmique et structures de données</li>
                      <li>Bases de données relationnelles</li>
                      <li>Programmation web/mobile (Python/JavaScript)</li>
                      <li>Réseaux et systèmes (Linux, TCP/IP)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-2">Savoir-faire</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Développer une application simple et fonctionnelle</li>
                      <li>Administrer une base de données SQL</li>
                      <li>Configurer un réseau local et environnement système</li>
                      <li>Prototyper une interface utilisateur</li>
                    </ul>
                  </div>

                  <div className="bg-blue-100 p-4 rounded-lg">
                    <strong className="text-blue-800">Savoir-être :</strong> Rigueur, esprit analytique, autonomie
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-800">Cybersécurité & RGPD</h3>
                <button
                  onClick={() => toggleAccordion('cybersecurite')}
                  className="ml-auto text-red-600 hover:text-red-800"
                >
                  {activeSection === 'cybersecurite' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              
              {activeSection === 'cybersecurite' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-2">Connaissances</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Principes de sécurité informatique</li>
                      <li>Cryptographie de base</li>
                      <li>Législation RGPD et protection des données</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-2">Savoir-faire</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Identifier les vulnérabilités potentielles</li>
                      <li>Appliquer les bonnes pratiques SSI</li>
                      <li>Intégrer la sécurité dès le développement</li>
                      <li>Implémenter les droits utilisateurs RGPD</li>
                    </ul>
                  </div>

                  <div className="bg-red-100 p-4 rounded-lg">
                    <strong className="text-red-800">Savoir-être :</strong> Esprit critique, sens des responsabilités, éthique
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-800">Design & UX/UI</h3>
                <button
                  onClick={() => toggleAccordion('design-ux')}
                  className="ml-auto text-purple-600 hover:text-purple-800"
                >
                  {activeSection === 'design-ux' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              
              {activeSection === 'design-ux' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-2">Connaissances</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Bases du design graphique</li>
                      <li>Principes d'ergonomie</li>
                      <li>Psychologie de l'utilisateur</li>
                      <li>Méthodologies de conception centrée utilisateur</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-2">Savoir-faire</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Concevoir des maquettes (wireframes, mockups)</li>
                      <li>Tester un prototype</li>
                      <li>Améliorer l'expérience utilisateur</li>
                      <li>Créer une interface cohérente et accessible</li>
                    </ul>
                  </div>

                  <div className="bg-purple-100 p-4 rounded-lg">
                    <strong className="text-purple-800">Savoir-être :</strong> Créativité, écoute, sens du détail
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 7: Cadrage du projet */}
        <section id="cadrage" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Target className="w-8 h-8" />
            Cadrage du Projet
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            3.1 Types d'applications suggérés
          </h3>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">G</div>
                <h4 className="text-xl font-bold text-green-800">Applications de gestion</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Gestionnaire de tâches avancé :</strong> To-do list avec catégories, priorités, sous-tâches, statistiques</li>
                <li><strong>Bibliothèque personnelle :</strong> Gestion de livres, films, musique avec recherche et statistiques</li>
                <li><strong>Gestionnaire de budget :</strong> Suivi revenus/dépenses, catégories, graphiques, objectifs d'épargne</li>
                <li><strong>Carnet d'adresses intelligent :</strong> Contacts avec historique d'interactions, rappels, groupes</li>
                <li><strong>Système de réservation :</strong> Gestion de ressources (salles, matériel) avec calendrier</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">U</div>
                <h4 className="text-xl font-bold text-blue-800">Applications utilitaires</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Calculatrice avancée :</strong> Opérations complexes, historique, grapheur de fonctions</li>
                <li><strong>Convertisseur universel :</strong> Devises, unités, formats avec API temps réel</li>
                <li><strong>Gestionnaire de mots de passe :</strong> Génération sécurisée, stockage chiffré, évaluation de force</li>
                <li><strong>Outil de prise de notes :</strong> Markdown, organisation par tags, recherche, export</li>
                <li><strong>Chronomètre/Pomodoro :</strong> Multitâche, statistiques, technique Pomodoro</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">L</div>
                <h4 className="text-xl font-bold text-purple-800">Applications ludiques/éducatives</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Plateforme de quiz :</strong> Création de quiz, catégories, scores, classements</li>
                <li><strong>Jeu éducatif :</strong> Mathématiques, langues avec progression et badges</li>
                <li><strong>Flashcards (répétition espacée) :</strong> Algorithme Leitner, statistiques d'apprentissage</li>
                <li><strong>Générateur créatif :</strong> Histoires, noms, poèmes avec paramètres personnalisables</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            3.2 Complexité attendue
          </h3>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-lg mb-6">
            <p className="text-slate-700 mb-3">Le projet doit être "simple" mais complet :</p>
            <ul className="space-y-1 text-slate-700 ml-4">
              <li>• 5-8 fonctionnalités principales maximum</li>
              <li>• 3 à 6 tables en base de données</li>
              <li>• Application mono-page ou 3-4 pages maximum</li>
              <li>• 30-50 heures de développement estimé</li>
            </ul>
          </div>
        </section>

        {/* Section 8: Livrables finaux */}
        <section id="livrables" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <BookOpen className="w-8 h-8" />
            Livrables Finaux
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            Livrables techniques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-slate-500">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-slate-600" />
                <h4 className="font-bold text-slate-800">Code source</h4>
              </div>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Repository Git complet</li>
                <li>• Code commenté et structuré</li>
                <li>• Requirements.txt / package.json</li>
                <li>• .gitignore configuré</li>
                <li>• Historique de commits cohérent</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-slate-800">Base de données</h4>
              </div>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• MCD ou schéma relationnel</li>
                <li>• Scripts SQL (création, population)</li>
                <li>• Dictionnaire de données</li>
                <li>• Données de démonstration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-slate-800">Documentation</h4>
              </div>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• README.md en anglais</li>
                <li>• Guide d'installation Linux</li>
                <li>• Documentation technique</li>
                <li>• Manuel utilisateur</li>
                <li>• Architecture documentée</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
                <h4 className="font-bold text-slate-800">Déploiement</h4>
              </div>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Scripts d'installation</li>
                <li>• Scripts de démarrage/arrêt</li>
                <li>• Configuration système</li>
                <li>• Guide de troubleshooting</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            Gestion de projet
          </h3>
          
          <ul className="space-y-3 mb-6">
            <li className="p-4 bg-slate-50 rounded-lg">Spécifications fonctionnelles détaillées</li>
            <li className="p-4 bg-slate-50 rounded-lg">Planning prévisionnel vs réel (Gantt ou Kanban)</li>
            <li className="p-4 bg-slate-50 rounded-lg">Journal de bord hebdomadaire complet</li>
            <li className="p-4 bg-slate-50 rounded-lg">Difficultés rencontrées et solutions apportées</li>
            <li className="p-4 bg-slate-50 rounded-lg">Méthodologie adoptée (Agile, Scrum, etc.)</li>
            <li className="p-4 bg-slate-50 rounded-lg">Analyse des risques et mitigation</li>
          </ul>
        </section>

        {/* Section 9: Conseils pratiques */}
        <section id="conseils" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Lightbulb className="w-8 h-8" />
            Conseils Pratiques
          </h2>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            Stratégie de développement
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <h4 className="font-bold text-green-800">Commencer simple</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Développez d'abord un MVP (Minimum Viable Product)</li>
                <li>• Priorisez les fonctionnalités CRUD de base</li>
                <li>• Interface basique mais fonctionnelle d'abord</li>
                <li>• Ajoutez les fonctionnalités avancées ensuite</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <h4 className="font-bold text-blue-800">Tester constamment</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Testez chaque fonctionnalité immédiatement</li>
                <li>• Vérifiez sur mobile ET desktop</li>
                <li>• Testez avec différents utilisateurs/données</li>
                <li>• Corrigez les bugs au fur et à mesure</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <h4 className="font-bold text-purple-800">Gérer son temps</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Planifiez 20% de temps en plus que prévu</li>
                <li>• Documentez au fur et à mesure</li>
                <li>• Commitez régulièrement sur Git</li>
                <li>• Préparez la présentation en avance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <h4 className="font-bold text-orange-800">Rester organisé</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Structurez votre code proprement</li>
                <li>• Nommez clairement variables et fonctions</li>
                <li>• Commentez les parties complexes</li>
                <li>• Maintenez un journal de bord</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            Pièges à éviter
          </h3>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-red-800 mb-3">Erreurs fréquentes :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Vouloir faire trop complexe dès le début</li>
                <li>• Négliger la sécurité ("je ferai ça après")</li>
                <li>• Laisser la documentation pour la fin</li>
                <li>• Ne pas versionner son code régulièrement</li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Ignorer le responsive design</li>
                <li>• Ne pas tester sur différents navigateurs</li>
                <li>• Coder sans MCD/wireframes</li>
                <li>• Procrastiner la préparation de soutenance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-400 pl-4">
            Ressources utiles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-slate-500">
              <h4 className="font-bold text-slate-800 mb-3">Outils recommandés</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• VS Code + extensions Python/JS</li>
                <li>• Git + GitHub/GitLab</li>
                <li>• Postman pour tester APIs</li>
                <li>• Chrome DevTools</li>
                <li>• MySQL Workbench/phpMyAdmin</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-500">
              <h4 className="font-bold text-slate-800 mb-3">Documentation</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• MDN Web Docs (JavaScript)</li>
                <li>• Python.org documentation</li>
                <li>• Flask/Django documentation</li>
                <li>• W3Schools pour CSS/HTML</li>
                <li>• Stack Overflow (mais pas copier-coller !)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-slate-800 mb-3">Design</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Bootstrap/Tailwind CSS</li>
                <li>• Google Fonts</li>
                <li>• Color palette generators</li>
                <li>• Unsplash pour images libres</li>
                <li>• Figma pour wireframes</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-800">Conseil final :</span>
            </div>
            <p className="text-slate-700 text-lg">
              <strong>N'ayez pas peur de demander de l'aide !</strong> Vos encadrants, vos camarades et la communauté en ligne sont là pour vous accompagner. 
              Un problème qui vous bloque 2 heures peut être résolu en 5 minutes avec la bonne aide.
            </p>
          </div>
        </section>

        {/* Section 10: Présentation */}
        <section id="présentation" className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-200">
            <Presentation className="w-8 h-8" />
            Préparation de la Présentation
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-green-800 mb-3">Structure recommandée (15-20 min)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p><strong>Introduction :</strong> 2-3 min</p>
                <p><strong>Conception :</strong> 2-3 min</p>
                <p><strong>Démonstration :</strong> 5-7 min</p>
              </div>
              <div className="space-y-2">
                <p><strong>Technique :</strong> 3-5 min</p>
                <p><strong>Section anglais :</strong> 5 min</p>
                <p><strong>REX :</strong> 2-3 min</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">🎯 Message final</h3>
            <p className="text-lg font-semibold text-slate-800 mb-3">
              "Le succès de votre projet ne se mesure pas seulement à la note finale, mais surtout à ce que vous aurez appris en le réalisant."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2 text-sm">
                <p>💡 <strong>Commencez tôt</strong> - Ne sous-estimez jamais le temps nécessaire</p>
                <p>💡 <strong>Restez simple</strong> - Mieux vaut un projet simple bien fait</p>
                <p>💡 <strong>Documentez en continu</strong> - La documentation de dernière minute est toujours bâclée</p>
              </div>
              <div className="space-y-2 text-sm">
                <p>💡 <strong>Testez régulièrement</strong> - Ne découvrez pas les bugs la veille</p>
                <p>💡 <strong>Prenez du plaisir</strong> - Choisissez un projet qui vous motive</p>
                <p className="text-center font-bold text-lg text-indigo-700 mt-4">Bon courage pour votre projet ! 🚀</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6" />
            Besoin d'aide ?
          </h3>
          <p className="mb-4">N'hésitez pas à contacter votre encadrant ou à consulter le forum du cours</p>
          <p className="text-sm opacity-90">Document version 1.0 - Cahier des charges PRJ101</p>
        </div>
      </div>

      {/* Floating Action Button */}
      {showFab && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-50"
          title="Retour en haut"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ProjetFinalS1;