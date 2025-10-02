import React, { useState, useEffect } from 'react';
import { Type, Palette, Layers, ChevronRight, ArrowLeft, ArrowRight, Play } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Données du carrousel
  const slides = [
    {
      id: 1,
      title: "Projet 1 : Refonte Colorimétrique",
      description: "Transformez des interfaces existantes avec une nouvelle palette de couleurs harmonieuse et accessible",
      image: "bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100",
      icon: <Palette className="w-12 h-12" />,
      action: () => setCurrentPage('projets'),
      badge: "Nouveau"
    },
    {
      id: 2,
      title: "Maîtrise de la Typographie",
      description: "Apprenez à identifier, hiérarchiser et créer des compositions typographiques efficaces",
      image: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
      icon: <Type className="w-12 h-12" />,
      action: () => setCurrentPage('typo'),
      badge: "Populaire"
    },
    {
      id: 3,
      title: "Projet Final S1",
      description: "Développez une application complète en mobilisant toutes vos compétences acquises",
      image: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
      icon: <Layers className="w-12 h-12" />,
      action: () => setCurrentPage('projets'),
      badge: "Défi"
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
        <div className="text-center mb-16 pt-16">
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
                        slide.badge === 'Nouveau' ? 'bg-green-500 text-white' :
                        slide.badge === 'Populaire' ? 'bg-orange-500 text-white' :
                        'bg-red-500 text-white'
                      } bg-opacity-90 backdrop-blur-sm`}>
                        {slide.badge}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 leading-tight text-slate-800">
                      {slide.title}
                    </h2>
                    
                    <p className="text-xl mb-8 text-slate-600 max-w-2xl">
                      {slide.description}
                    </p>
                    
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
            <div className="text-5xl font-bold mb-2">~100</div>
            <p className="text-violet-100">Exercices pratiques</p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">3</div>
            <p className="text-violet-100">Thématiques principales (pour l'instant)</p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">∞</div>
            <p className="text-violet-100">Possibilités créatives</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;