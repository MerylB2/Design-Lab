import React from 'react';
import { Type } from 'lucide-react';
import { exercices } from '../data/exercices';

const TypographiePage = () => {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Type className="w-10 h-10 text-violet-600" />
          <h1 className="text-4xl font-bold text-slate-800">Typographie</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl">
          La typographie est l'art de disposer les caractères pour rendre le texte lisible, agréable et expressif. 
          Ces exercices vous aideront à développer votre sensibilité typographique.
        </p>
      </div>

      <div className="space-y-6">
        {exercices.typo.map((exercice, index) => (
          <div key={exercice.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-violet-400 transition-all">
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exercice.title}</h3>
                    <p className="text-slate-600 mb-4">{exercice.description}</p>
                    <div className="flex gap-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {exercice.niveau}
                      </span>
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                        ⏱ {exercice.duree}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Accéder à l'exercice
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Theory Section */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Principes fondamentaux</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-blue-800 mb-2">Classification des polices</h4>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• <strong>Serif</strong> : avec empattements (Times, Garamond)</li>
              <li>• <strong>Sans-serif</strong> : sans empattements (Arial, Helvetica)</li>
              <li>• <strong>Script</strong> : imitant l'écriture manuscrite</li>
              <li>• <strong>Monospace</strong> : largeur fixe (Courier)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-800 mb-2">Hiérarchie typographique</h4>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• <strong>Taille</strong> : différencier titres et corps de texte</li>
              <li>• <strong>Graisse</strong> : bold pour les éléments importants</li>
              <li>• <strong>Couleur</strong> : créer des niveaux d'attention</li>
              <li>• <strong>Espacement</strong> : aérer pour améliorer la lecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographiePage;