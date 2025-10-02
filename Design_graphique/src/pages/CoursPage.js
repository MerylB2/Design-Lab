import React from 'react';
import { Type, Palette, ChevronRight, BookOpen, Monitor, GraduationCap, Target, Users } from 'lucide-react';

const CoursPage = ({ setCurrentPage }) => {

  const categories = [
    {
      id: 'design-graphique',
      title: 'Design Graphique',
      description: 'Maîtrisez les fondamentaux du design graphique, de la typographie aux couleurs',
      longDescription: 'Apprenez les bases du design visuel : typographie, théorie des couleurs, composition et principes de design. Développez vos compétences créatives avec des exercices pratiques.',
      icon: <Palette className="w-8 h-8" />,
      bgGradient: 'from-violet-600 to-fuchsia-600',
      modules: 2,
      exercises: 6,
      duration: '4h30',
      level: 'Débutant à Intermédiaire',
      skills: ['Typographie', 'Couleur', 'Composition', 'Théorie du design'],
      status: 'available'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Créez des interfaces utilisateur intuitives et des expériences utilisateur optimales',
      longDescription: 'Découvrez les principes de conception d\'interface et d\'expérience utilisateur. Apprenez à créer des designs centrés utilisateur avec des méthodes de recherche et de validation.',
      icon: <Monitor className="w-8 h-8" />,
      bgGradient: 'from-blue-600 to-cyan-600',
      modules: 2,
      exercises: 7,
      duration: '6h30',
      level: 'Débutant à Avancé',
      skills: ['UX Research', 'Wireframing', 'Prototyping', 'User Testing'],
      status: 'coming-soon'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 relative overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-slate-100 opacity-25 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-sky-100 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              Tous les Cours
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choisissez votre domaine d'apprentissage et commencez votre parcours de formation
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-slate-600">Domaines disponibles</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-violet-600 mb-2">4</div>
            <div className="text-slate-600">Modules théoriques</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">13</div>
            <div className="text-slate-600">Exercices pratiques</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">11h</div>
            <div className="text-slate-600">Durée totale</div>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all">
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.bgGradient} px-8 py-6`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    {category.icon}
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-white text-opacity-90">{category.description}</p>
                  </div>
                </div>
                {category.status === 'coming-soon' && (
                  <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Bientôt disponible</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-xl font-bold text-slate-800">{category.modules}</div>
                    <div className="text-xs text-slate-500">Modules</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800">{category.exercises}</div>
                    <div className="text-xs text-slate-500">Exercices</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800">{category.duration}</div>
                    <div className="text-xs text-slate-500">Durée</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800">{category.level.split(' ')[0]}</div>
                    <div className="text-xs text-slate-500">Niveau</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-slate-600 text-sm mb-4">{category.longDescription}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Compétences développées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setCurrentPage(category.id)}
                  disabled={category.status === 'coming-soon'}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group ${
                    category.status === 'available'
                      ? `bg-gradient-to-r ${category.bgGradient} text-white hover:shadow-lg`
                      : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {category.status === 'available' ? (
                    <>
                      Accéder aux cours
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5" />
                      Bientôt disponible
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
            <Target className="w-6 h-6 text-blue-600" />
            Votre parcours d'apprentissage
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl border border-violet-200">
              <div className="bg-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-slate-800">Design Graphique</h3>
                <p className="text-sm text-slate-600">Commencez par les fondamentaux</p>
              </div>
            </div>

            <div className="hidden md:block">
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            <div className="md:hidden">
              <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 opacity-60">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-slate-800">UI/UX Design</h3>
                <p className="text-sm text-slate-600">Perfectionnez avec l'expérience utilisateur</p>
              </div>
            </div>

            <div className="hidden md:block">
              <ChevronRight className="w-6 h-6 text-slate-400" />
            </div>
            <div className="md:hidden">
              <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200 opacity-40">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-slate-800">Projets Avancés</h3>
                <p className="text-sm text-slate-600">Créez un portfolio professionnel</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Suivez ce parcours progressif pour développer vos compétences de design de manière structurée
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
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
  );
};

export default CoursPage;