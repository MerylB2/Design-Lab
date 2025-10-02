import React from 'react';
import { Type, Palette, ChevronRight, BookOpen, Clock, BarChart, Layout } from 'lucide-react';

const DesignGraphiquePage = ({ setCurrentPage }) => {
  const designGraphiqueCourses = {
    modules: [
      {
        id: 'theorie-design',
        title: 'Théorie du Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <BookOpen className="w-8 h-8" />,
        lessons: 5,
        duration: '2h30',
        level: 'Débutant',
        bgGradient: 'from-purple-500 to-indigo-600',
        topics: [
          'Lorem ipsum dolor sit amet',
          'Consectetur adipiscing elit sed do',
          'Eiusmod tempor incididunt ut labore',
          'Dolore magna aliqua ut enim'
        ]
      },
      {
        id: 'principes-composition',
        title: 'Principes de Composition',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icon: <Layout className="w-8 h-8" />,
        lessons: 4,
        duration: '2h00',
        level: 'Intermédiaire',
        bgGradient: 'from-emerald-500 to-teal-600',
        topics: [
          'Duis aute irure dolor in reprehenderit',
          'Voluptate velit esse cillum dolore',
          'Excepteur sint occaecat cupidatat',
          'Non proident sunt in culpa'
        ]
      }
    ],
    exercises: [
      {
        id: 'typo',
        title: 'Typographie',
        description: 'Apprenez à identifier les polices, créer des spécimens et hiérarchiser vos textes efficacement',
        icon: <Type className="w-8 h-8" />,
        exercises: 3,
        duration: '1h30',
        level: 'Débutant à Intermédiaire',
        bgGradient: 'from-blue-500 to-indigo-600',
        skills: [
          'Identification des polices de caractères',
          'Création de spécimens typographiques',
          'Hiérarchisation visuelle des textes',
          'Composition typographique avancée'
        ]
      },
      {
        id: 'couleur',
        title: 'Couleur',
        description: 'Maîtrisez la théorie des couleurs, créez des palettes harmonieuses et respectez l\'accessibilité',
        icon: <Palette className="w-8 h-8" />,
        exercises: 3,
        duration: '1h45',
        level: 'Débutant à Avancé',
        bgGradient: 'from-pink-500 to-rose-600',
        skills: [
          'Théorie des couleurs et harmonies',
          'Création de palettes professionnelles',
          'Tests de contraste et accessibilité WCAG',
          'Synesthésie et traduction émotionnelle'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-violet-100 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-purple-100 opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-fuchsia-100 opacity-25 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-10 h-10 text-violet-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              Design Graphique
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Maîtrisez les fondamentaux du design graphique : typographie, couleur, composition et théorie du design
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-violet-600 mb-2">2</div>
            <div className="text-slate-600">Modules théoriques</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-slate-600">Exercices pratiques</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-fuchsia-600 mb-2">4h30</div>
            <div className="text-slate-600">Durée totale</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">★★★</div>
            <div className="text-slate-600">Débutant/Inter.</div>
          </div>
        </div>

        {/* Modules Théoriques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-violet-600" />
            Modules Théoriques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {designGraphiqueCourses.modules.map((module) => (
              <div key={module.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
                <div className={`bg-gradient-to-r ${module.bgGradient} px-6 py-4`}>
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                      <p className="text-white text-opacity-90 text-sm">{module.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-slate-800">{module.lessons}</div>
                      <div className="text-xs text-slate-500">Leçons</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">{module.duration}</div>
                      <div className="text-xs text-slate-500">Durée</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">{module.level}</div>
                      <div className="text-xs text-slate-500">Niveau</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Sujets abordés :</h4>
                    <ul className="space-y-1">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${module.bgGradient} text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all`}>
                    Accéder au module
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercices Pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Type className="w-6 h-6 text-violet-600" />
            Exercices Pratiques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {designGraphiqueCourses.exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
                <div className={`bg-gradient-to-r ${exercise.bgGradient} px-6 py-4`}>
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full">
                      {exercise.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exercise.title}</h3>
                      <p className="text-white text-opacity-90 text-sm">{exercise.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-slate-800">{exercise.exercises}</div>
                      <div className="text-xs text-slate-500">Exercices</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">{exercise.duration}</div>
                      <div className="text-xs text-slate-500">Durée</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">{exercise.level}</div>
                      <div className="text-xs text-slate-500">Niveau</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2">Compétences développées :</h4>
                    <ul className="space-y-1">
                      {exercise.skills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => setCurrentPage(exercise.id)}
                    className={`w-full bg-gradient-to-r ${exercise.bgGradient} text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 group`}
                  >
                    Commencer les exercices
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Parcours recommandé</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-slate-800">Théorie du Design</h3>
                <p className="text-sm text-slate-600">Apprenez les bases</p>
              </div>
            </div>

            <div className="hidden md:block">
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            <div className="md:hidden">
              <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-slate-800">Typographie</h3>
                <p className="text-sm text-slate-600">Maîtrisez les polices</p>
              </div>
            </div>

            <div className="hidden md:block">
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            <div className="md:hidden">
              <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
              <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-slate-800">Couleur</h3>
                <p className="text-sm text-slate-600">Créez des harmonies</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <button
              onClick={() => setCurrentPage('cours')}
              className="text-violet-600 hover:text-violet-700 font-medium flex items-center gap-2 mx-auto"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Retour aux cours
            </button>
            <div className="border-t border-slate-200 pt-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors group"
              >
                <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGraphiquePage;