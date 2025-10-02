import React, { useState } from 'react';
import { Menu, X, Palette, ChevronDown, User, LogIn } from 'lucide-react';
import { exercices } from '../data/exercices';

const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Structure hiérarchique des cours
  const courseStructure = [
    {
      id: 'home',
      label: 'Accueil',
      type: 'page'
    },
    {
      id: 'cours',
      label: 'Cours',
      type: 'dropdown',
      children: [
        {
          id: 'design-graphique',
          label: 'Design Graphique',
          description: 'Typographie, couleur, composition',
          type: 'category',
          children: [
            {
              id: 'typo',
              label: 'Typographie',
              description: '3 exercices pratiques',
              exercises: exercices.typo || []
            },
            {
              id: 'couleur', 
              label: 'Couleur',
              description: '3 exercices pratiques',
              exercises: exercices.couleur || []
            }
          ]
        },
        {
          id: 'ui-ux-design',
          label: 'UI/UX Design',
          description: 'Interfaces, expérience utilisateur',
          type: 'category',
          children: [
            {
              id: 'wireframing',
              label: 'Wireframing',
              description: 'Prototypage et maquettage',
              exercises: []
            },
            {
              id: 'user-testing',
              label: 'User Testing',
              description: 'Tests utilisateur et validation',
              exercises: []
            }
          ]
        }
      ]
    },
    {
      id: 'projets',
      label: 'Projets',
      type: 'dropdown',
      children: exercices.projets || []
    },
    {
      id: 'ressources',
      label: 'Ressources',
      type: 'page'
    }
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
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
          <div className="hidden md:flex items-center gap-1 relative">
            {courseStructure.map((item) => (
              <div key={item.id} className="relative">
                {item.type === 'page' ? (
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === item.id
                        ? 'bg-violet-100 text-violet-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <>
                    <div 
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex">
                        <button
                          onClick={() => setCurrentPage(item.id)}
                          className={`flex items-center px-4 py-2 rounded-l-lg font-medium transition-all ${
                            currentPage === item.id
                              ? 'bg-violet-100 text-violet-700'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <span>{item.label}</span>
                        </button>
                        <button
                          onClick={() => toggleDropdown(item.id)}
                          className={`flex items-center px-2 py-2 rounded-r-lg font-medium transition-all border-l border-slate-200 ${
                            activeDropdown === item.id
                              ? 'bg-violet-100 text-violet-700'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.id ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.id && (
                        <div 
                          className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-64 z-50"
                        >
                        {item.id === 'cours' ? (
                          // Menu des cours avec catégories
                          item.children.map((category) => (
                            <div key={category.id} className="relative group px-4 py-3 border-b border-slate-100 last:border-b-0">
                              <div className="flex items-center justify-between">
                                <button
                                  onClick={() => {
                                    setCurrentPage(category.id);
                                    setActiveDropdown(null);
                                  }}
                                  className="flex-1 text-left hover:bg-slate-50 p-2 rounded transition-colors"
                                >
                                  <div className="font-bold text-slate-800">{category.label}</div>
                                  <div className="text-sm text-slate-500">{category.description}</div>
                                </button>
                                <div className="text-slate-400 text-sm ml-2">›</div>
                              </div>
                              
                              {/* Sous-menu de catégorie au survol */}
                              <div className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-72 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                <div className="px-3 py-2 border-b border-slate-100">
                                  <div className="font-bold text-slate-800 text-sm">{category.label}</div>
                                  <div className="text-xs text-slate-500">{category.description}</div>
                                </div>
                                
                                {category.children && category.children.map((course) => (
                                  <div key={course.id} className="relative group/course">
                                    <button
                                      onClick={() => {
                                        setCurrentPage(course.id);
                                        setActiveDropdown(null);
                                      }}
                                      className="w-full text-left hover:bg-slate-50 p-3 transition-colors border-b border-slate-50 last:border-b-0"
                                    >
                                      <div className="font-semibold text-slate-700">{course.label}</div>
                                      <div className="text-sm text-slate-500">{course.description}</div>
                                    </button>
                                    
                                    {/* Sous-sous-menu des exercices */}
                                    {course.exercises && course.exercises.length > 0 && (
                                      <div className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-64 z-50 opacity-0 group-hover/course:opacity-100 pointer-events-none group-hover/course:pointer-events-auto transition-opacity duration-200">
                                        <div className="px-3 py-2 border-b border-slate-100">
                                          <div className="font-semibold text-slate-800 text-sm">Exercices {course.label}</div>
                                        </div>
                                        {course.exercises.map((exercise) => (
                                          <button
                                            key={exercise.id}
                                            onClick={() => {
                                              setCurrentPage(course.id);
                                              setActiveDropdown(null);
                                            }}
                                            className="block w-full text-left text-sm text-slate-600 hover:text-violet-600 py-2 px-4 hover:bg-violet-50 transition-colors"
                                            title={exercise.description}
                                          >
                                            <div className="font-medium">{exercise.title.replace('Exercice ', 'Ex.')}</div>
                                            <div className="text-xs text-slate-500 mt-1">{exercise.niveau} • {exercise.duree}</div>
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          // Menu des projets
                          item.children.map((project) => (
                            <button
                              key={project.id}
                              onClick={() => {
                                setCurrentPage('projets');
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors"
                            >
                              <div className="font-semibold text-slate-800">{project.title}</div>
                              <div className="text-sm text-slate-500">{project.description}</div>
                              <div className="text-xs text-violet-600 mt-1">
                                {project.niveau} • {project.duree}
                              </div>
                            </button>
                          ))
                        )}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Connexion */}
            <div className="ml-4 pl-4 border-l border-slate-200">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('user')}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Mon compte</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === 'user' ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === 'user' && (
                    <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-48 z-50">
                      <button className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        Mon profil
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        Mes progrès
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        Paramètres
                      </button>
                      <hr className="my-2" />
                      <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-red-600"
                      >
                        Se déconnecter
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Se connecter</span>
                </button>
              )}
            </div>
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
          <div className="md:hidden py-4 border-t space-y-2">
            {courseStructure.map((item) => (
              <div key={item.id}>
                {item.type === 'page' ? (
                  <button
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
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleDropdown(`mobile-${item.id}`)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-all"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === `mobile-${item.id}` ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === `mobile-${item.id}` && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.id === 'cours' ? (
                          item.children.map((category) => (
                            <div key={category.id} className="mb-3">
                              <button
                                onClick={() => {
                                  setCurrentPage(category.id);
                                  setMobileMenuOpen(false);
                                }}
                                className="w-full px-4 py-2 bg-slate-50 rounded hover:bg-slate-100 transition-colors"
                              >
                                <div className="font-bold text-slate-700 text-sm text-left">{category.label}</div>
                                <div className="text-xs text-slate-500 text-left">{category.description}</div>
                              </button>
                              <div className="ml-2 mt-1 space-y-1">
                                {category.children && category.children.map((course) => (
                                  <button
                                    key={course.id}
                                    onClick={() => {
                                      setCurrentPage(course.id);
                                      setMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2 rounded text-slate-700 hover:bg-violet-50 transition-colors"
                                  >
                                    <div className="font-medium text-sm">{course.label}</div>
                                    <div className="text-xs text-slate-500">{course.description}</div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          item.children.map((project) => (
                            <button
                              key={project.id}
                              onClick={() => {
                                setCurrentPage('projets');
                                setMobileMenuOpen(false);
                              }}
                              className="w-full text-left px-4 py-2 rounded text-slate-700 hover:bg-violet-50 transition-colors"
                            >
                              <div className="font-medium text-sm">{project.title}</div>
                              <div className="text-xs text-slate-500">{project.niveau} • {project.duree}</div>
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Connexion Mobile */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              {isLoggedIn ? (
                <div>
                  <div className="flex items-center gap-3 px-4 py-3 text-slate-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Mon compte</span>
                  </div>
                  <div className="ml-8 space-y-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded transition-colors">
                      Mon profil
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded transition-colors">
                      Mes progrès
                    </button>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      Se déconnecter
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-3 rounded-lg font-medium mx-4"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Se connecter</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Connexion</h2>
              <p className="text-slate-600">Accédez à votre espace d'apprentissage</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mot de passe</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-slate-600">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-violet-600 hover:text-violet-700">Mot de passe oublié ?</a>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsLoggedIn(true);
                    setShowLoginModal(false);
                  }}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Se connecter
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="w-full bg-slate-200 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-300 transition-all"
                >
                  Annuler
                </button>
              </div>
            </form>

            <div className="text-center mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Pas encore de compte ?{' '}
                <a href="#" className="text-violet-600 hover:text-violet-700 font-medium">
                  Créer un compte
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;