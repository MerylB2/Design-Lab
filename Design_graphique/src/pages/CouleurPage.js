import React from 'react';
import { Palette } from 'lucide-react';
import { exercices } from '../data/exercices';

const CouleurPage = () => {
  return (
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
  );
};

export default CouleurPage;