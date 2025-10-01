import React from 'react';
import { Type, Palette, Layers, ChevronRight } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
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
  );
};

export default HomePage;