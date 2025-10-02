import React from 'react';
import { Monitor, Smartphone, ChevronRight, BookOpen, Clock, BarChart, Users, Layout } from 'lucide-react';

const UiUxDesignPage = ({ setCurrentPage }) => {
  const uiUxCourses = {
    modules: [
      {
        id: 'ux-research',
        title: 'UX Research & Analytics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel libero at ipsum cursus tempor.',
        icon: <Users className="w-8 h-8" />,
        lessons: 6,
        duration: '3h00',
        level: 'Débutant',
        bgGradient: 'from-cyan-500 to-blue-600',
        topics: [
          'Lorem ipsum dolor sit amet consectetur',
          'Adipiscing elit mauris vel libero',
          'Ipsum cursus tempor sed do eiusmod',
          'Tempor incididunt ut labore et dolore'
        ]
      },
      {
        id: 'interface-design',
        title: 'Interface Design Patterns',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
        icon: <Smartphone className="w-8 h-8" />,
        lessons: 7,
        duration: '3h30',
        level: 'Intermédiaire',
        bgGradient: 'from-indigo-500 to-purple-600',
        topics: [
          'Exercitation ullamco laboris nisi ut',
          'Aliquip ex ea commodo consequat',
          'Duis aute irure dolor in reprehenderit',
          'Voluptate velit esse cillum dolore'
        ]
      }
    ],
    exercises: [
      {
        id: 'wireframing',
        title: 'Wireframing & Prototyping',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
        icon: <Layout className="w-8 h-8" />,
        exercises: 4,
        duration: '2h15',
        level: 'Débutant à Intermédiaire',
        bgGradient: 'from-slate-500 to-gray-600',
        skills: [
          'Lorem ipsum dolor sit amet',
          'Consectetur adipiscing elit sed',
          'Eiusmod tempor incididunt ut',
          'Labore et dolore magna aliqua'
        ]
      },
      {
        id: 'user-testing',
        title: 'User Testing & Validation',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
        icon: <Users className="w-8 h-8" />,
        exercises: 3,
        duration: '2h00',
        level: 'Avancé',
        bgGradient: 'from-orange-500 to-red-600',
        skills: [
          'Commodo consequat duis aute',
          'Irure dolor in reprehenderit',
          'Voluptate velit esse cillum',
          'Dolore eu fugiat nulla pariatur'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-cyan-100 opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-indigo-100 opacity-25 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Monitor className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              UI/UX Design
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Créez des interfaces utilisateur intuitives et des expériences utilisateur optimales pour applications web et mobile
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="font-medium">Contenu bientôt disponible</span>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-slate-600">Modules théoriques</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">7</div>
            <div className="text-slate-600">Exercices pratiques</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">6h30</div>
            <div className="text-slate-600">Durée totale</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">★★★</div>
            <div className="text-slate-600">Débutant/Avancé</div>
          </div>
        </div>

        {/* Modules Théoriques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Modules Théoriques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {uiUxCourses.modules.map((module) => (
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
                  <button 
                    disabled
                    className={`w-full bg-gradient-to-r ${module.bgGradient} text-white py-2 rounded-lg font-medium opacity-50 cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    <Clock className="w-4 h-4" />
                    Bientôt disponible
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercices Pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Monitor className="w-6 h-6 text-blue-600" />
            Exercices Pratiques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {uiUxCourses.exercises.map((exercise) => (
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
                          <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    disabled
                    className={`w-full bg-gradient-to-r ${exercise.bgGradient} text-white py-2 rounded-lg font-medium opacity-50 cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    <Clock className="w-4 h-4" />
                    Bientôt disponible
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Learning Path */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Parcours prévu</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 opacity-60">
              <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-slate-800">UX Research</h3>
                <p className="text-sm text-slate-600">Recherche utilisateur</p>
              </div>
            </div>

            <div className="hidden md:block">
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            <div className="md:hidden">
              <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 opacity-60">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-slate-800">Wireframing</h3>
                <p className="text-sm text-slate-600">Maquettage interface</p>
              </div>
            </div>

            <div className="hidden md:block">
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            <div className="md:hidden">
              <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 opacity-60">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-slate-800">User Testing</h3>
                <p className="text-sm text-slate-600">Tests utilisateur</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <div className="mb-4">
              <p className="text-slate-600 text-sm mb-2">Ce contenu sera disponible prochainement</p>
              <p className="text-slate-500 text-xs">Restez connecté pour être informé des nouvelles publications</p>
            </div>
            <button
              onClick={() => setCurrentPage('cours')}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
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

export default UiUxDesignPage;