import React, { useState, useEffect } from 'react';
import { Type, Palette, Layers, ChevronRight, ArrowLeft, ArrowRight, Play, Monitor, GraduationCap, Target, Users, BookOpen, Star } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Données du carrousel
  const slides = [
    {
      id: 1,
      title: "Design Graphique",
      description: "Maîtrisez les fondamentaux : typographie, couleur, composition et théorie du design",
      image: "bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50",
      icon: <Palette className="w-12 h-12" />,
      action: () => setCurrentPage('design-graphique'),
      badge: "Disponible",
      stats: "6 exercices • 4h30"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Créez des interfaces utilisateur intuitives et des expériences utilisateur optimales",
      image: "bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50",
      icon: <Monitor className="w-12 h-12" />,
      action: () => setCurrentPage('ui-ux-design'),
      badge: "Bientôt",
      stats: "7 exercices • 6h30"
    },
    {
      id: 3,
      title: "Projets Pratiques",
      description: "Appliquez vos connaissances sur des projets concrets et créez votre portfolio",
      image: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
      icon: <Layers className="w-12 h-12" />,
      action: () => setCurrentPage('projets'),
      badge: "Portfolio",
      stats: "2 projets • Applications réelles"
    }
  ];

  // Auto-play du carrousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 relative overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-slate-100 opacity-25 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-sky-100 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-blue-50 opacity-35 blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-white opacity-40 blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Ambient Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <path d="M 0,200 Q 200,150 400,200 T 800,200" stroke="#A8D8EA" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M 0,300 Q 240,250 480,300 T 960,300" stroke="#6FB4D6" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M 0,150 Q 160,100 320,150 T 640,150" stroke="#E8F4F8" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Plateforme d'apprentissage en design</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4 leading-tight">
              Apprenez le Design
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Créatif & Digital
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              De la typographie au design d'interface, développez vos compétences créatives avec des cours structurés et des projets pratiques
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setCurrentPage('design-graphique')}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              <Palette className="w-6 h-6" />
              Commencer le Design Graphique
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('cours')}
              className="bg-white/90 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-3 border border-white/40"
            >
              <GraduationCap className="w-6 h-6" />
              Voir tous les cours
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800">13</div>
              <div className="text-sm text-slate-600">Exercices</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">2</div>
              <div className="text-sm text-slate-600">Domaines</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">11h</div>
              <div className="text-sm text-slate-600">De contenu</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">2</div>
              <div className="text-sm text-slate-600">Projets</div>
            </div>
          </div>
        </div>

      {/* Carrousel Section */}
      <div className="mb-16">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`min-w-full ${slide.image} relative overflow-hidden`}
              >
                {/* Ambient Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-40 blur-2xl animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-slate-200 opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full bg-sky-200 opacity-25 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-blue-100 opacity-50 blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-white opacity-60 blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Flowing Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <path d="M 0,150 Q 100,100 200,150 T 400,150" stroke="#A8D8EA" strokeWidth="2" fill="none" className="animate-pulse" />
                    <path d="M 0,180 Q 120,140 240,180 T 480,180" stroke="#6FB4D6" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
                    <path d="M 0,120 Q 80,80 160,120 T 320,120" stroke="#E8F4F8" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
                  </svg>
                </div>

                <div className="flex items-center min-h-[400px] p-12 relative z-10">
                  <div className="flex-1 text-slate-700">
                    {/* Badge */}
                    <div className="inline-block mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        slide.badge === 'Disponible' ? 'bg-green-500 text-white' :
                        slide.badge === 'Bientôt' ? 'bg-orange-500 text-white' :
                        slide.badge === 'Portfolio' ? 'bg-purple-500 text-white' :
                        'bg-blue-500 text-white'
                      } bg-opacity-90 backdrop-blur-sm`}>
                        {slide.badge}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 leading-tight text-slate-800">
                      {slide.title}
                    </h2>
                    
                    <p className="text-xl mb-4 text-slate-600 max-w-2xl">
                      {slide.description}
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-sm text-slate-500 font-medium">{slide.stats}</span>
                    </div>
                    
                    <button
                      onClick={slide.action}
                      className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 group backdrop-blur-sm"
                    >
                      Découvrir
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Icon */}
                  <div className="hidden md:block">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="text-slate-600">
                        {slide.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-slate-600 p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-slate-600 p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Dots Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-slate-600 scale-125 shadow-lg' 
                    : 'bg-slate-400/60 hover:bg-slate-500/80'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-slate-600 p-2 rounded-lg transition-all shadow-lg"
            title={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? (
              <div className="w-4 h-4 flex gap-1">
                <div className="w-1 h-4 bg-slate-600"></div>
                <div className="w-1 h-4 bg-slate-600"></div>
              </div>
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 text-center hover:shadow-xl transition-all">
          <div className="bg-gradient-to-br from-violet-100 to-fuchsia-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <BookOpen className="w-8 h-8 text-violet-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Cours Structurés</h3>
          <p className="text-slate-600 mb-4">
            Modules théoriques et exercices pratiques organisés pour un apprentissage progressif et efficace
          </p>
          <div className="text-sm text-violet-600 font-semibold">4 modules • 13 exercices</div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 text-center hover:shadow-xl transition-all">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Apprentissage Pratique</h3>
          <p className="text-slate-600 mb-4">
            Exercices interactifs et projets réels pour développer vos compétences de manière concrète
          </p>
          <div className="text-sm text-blue-600 font-semibold">Projets portfolio • Applications réelles</div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 text-center hover:shadow-xl transition-all">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Users className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Progression Guidée</h3>
          <p className="text-slate-600 mb-4">
            Parcours personnalisé avec suivi de progression et recommandations adaptées à votre niveau
          </p>
          <div className="text-sm text-emerald-600 font-semibold">Suivi personnalisé • Objectifs clairs</div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
          <Target className="w-6 h-6 text-blue-600" />
          Votre parcours recommandé
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div 
            onClick={() => setCurrentPage('design-graphique')}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl border border-violet-200 cursor-pointer hover:shadow-lg transition-all group"
          >
            <div className="bg-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="font-bold text-slate-800 group-hover:text-violet-700 transition-colors">Design Graphique</h3>
              <p className="text-sm text-slate-600">Maîtrisez les fondamentaux</p>
            </div>
            <ChevronRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform" />
          </div>

          <div className="hidden md:block">
            <ChevronRight className="w-6 h-6 text-slate-400" />
          </div>
          <div className="md:hidden">
            <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
          </div>

          <div 
            onClick={() => setCurrentPage('ui-ux-design')}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 cursor-pointer hover:shadow-lg transition-all group opacity-60"
          >
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">UI/UX Design</h3>
              <p className="text-sm text-slate-600">Créez des expériences utilisateur</p>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>

          <div className="hidden md:block">
            <ChevronRight className="w-6 h-6 text-slate-400" />
          </div>
          <div className="md:hidden">
            <div className="w-1 h-8 bg-slate-300 rounded-full"></div>
          </div>

          <div 
            onClick={() => setCurrentPage('projets')}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 cursor-pointer hover:shadow-lg transition-all group"
          >
            <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">Portfolio Projets</h3>
              <p className="text-sm text-slate-600">Créez vos premiers projets</p>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            Commencez par le design graphique, puis explorez l'UI/UX pour devenir un designer complet
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;