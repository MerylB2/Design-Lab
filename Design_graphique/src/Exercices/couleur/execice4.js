import React, { useState } from 'react';
import { Palette, RefreshCw } from 'lucide-react';

const PalettesCouleursExercice = () => {
  const [activeTab, setActiveTab] = useState('all');

  const palettes = {
    analogique: {
      name: 'Palette Analogique',
      description: 'Couleurs voisines sur le cercle chromatique',
      colors: ['#0A4D68', '#088395', '#05BFDB', '#00FFCA', '#7FFFD4'],
      base: '#088395'
    },
    complementaire: {
      name: 'Palette Complémentaire',
      description: 'Couleurs opposées sur le cercle chromatique',
      colors: ['#FF6B35', '#004E89', '#1A659E', '#FFB627', '#FFA07A'],
      base: '#004E89'
    },
    triadique: {
      name: 'Palette Triadique',
      description: 'Trois couleurs équidistantes sur le cercle',
      colors: ['#E63946', '#F1C40F', '#2A9D8F', '#F4A261', '#264653'],
      base: '#E63946'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              Exercice 4
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Création de Palettes Harmonieuses
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Consigne de l'exercice</h2>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <p className="text-slate-700 mb-4">
              <strong className="text-purple-800">Objectif :</strong> Créer 3 palettes de couleurs harmonieuses à partir d'une couleur de base :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li><strong>Palette Analogique</strong> - Couleurs voisines sur le cercle chromatique</li>
              <li><strong>Palette Complémentaire</strong> - Couleurs opposées créant un contraste fort</li>
              <li><strong>Palette Triadique</strong> - Trois couleurs équidistantes formant un triangle</li>
            </ul>
            <p className="text-slate-600 mt-4 text-sm">
              <strong>Outils recommandés :</strong> Adobe Color, Coolors, ou créer manuellement
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Toutes les Palettes
          </button>
          <button
            onClick={() => setActiveTab('analogique')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'analogique'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Analogique
          </button>
          <button
            onClick={() => setActiveTab('complementaire')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'complementaire'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Complémentaire
          </button>
          <button
            onClick={() => setActiveTab('triadique')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'triadique'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Triadique
          </button>
        </div>

        {/* All Palettes View */}
        {activeTab === 'all' && (
          <div className="space-y-8">
            {Object.entries(palettes).map(([key, palette]) => (
              <div key={key} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{palette.name}</h3>
                  <p className="text-slate-300 text-sm">{palette.description}</p>
                </div>

                {/* Color Bands */}
                <div className="flex h-40">
                  {palette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex-1 relative group cursor-pointer transition-all hover:flex-[1.5]"
                      style={{ backgroundColor: color }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                        <span className="text-white font-bold text-lg">{color}</span>
                        {color === palette.base && (
                          <span className="text-yellow-300 text-xs mt-1 font-semibold">BASE</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Color Details */}
                <div className="p-6 grid grid-cols-5 gap-4">
                  {palette.colors.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-slate-200 shadow-lg"
                        style={{ backgroundColor: color }}
                      ></div>
                      <p className="text-xs font-mono text-slate-600">{color}</p>
                      {color === palette.base && (
                        <span className="inline-block mt-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-semibold">
                          Couleur de base
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Application Example */}
                <div className="p-6 bg-slate-50 border-t">
                  <h4 className="font-bold text-slate-700 mb-3">Exemple d'application</h4>
                  <div className="flex gap-4">
                    {/* Card Example */}
                    <div 
                      className="flex-1 rounded-lg p-6 shadow-lg"
                      style={{ backgroundColor: palette.colors[0] }}
                    >
                      <h5 
                        className="text-xl font-bold mb-2"
                        style={{ color: palette.colors[4] }}
                      >
                        Titre Principal
                      </h5>
                      <p 
                        className="text-sm"
                        style={{ color: palette.colors[3] }}
                      >
                        Exemple de texte utilisant les couleurs de la palette harmonieuse.
                      </p>
                    </div>
                    
                    {/* Button Examples */}
                    <div className="flex-1 flex flex-col gap-3">
                      {palette.colors.slice(0, 3).map((color, idx) => (
                        <button
                          key={idx}
                          className="px-4 py-2 rounded-lg font-semibold text-white shadow"
                          style={{ backgroundColor: color }}
                        >
                          Bouton {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Individual Palette Views */}
        {activeTab !== 'all' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Large Display */}
            <div className="flex h-96">
              {palettes[activeTab].colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 relative group cursor-pointer transition-all hover:flex-[2]"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white font-bold text-4xl drop-shadow-lg">{index + 1}</span>
                    <span className="text-white font-mono text-xl mt-2 drop-shadow-lg">{color}</span>
                    {color === palettes[activeTab].base && (
                      <span className="mt-2 px-4 py-2 bg-yellow-400 text-slate-900 text-sm rounded-full font-bold shadow-lg">
                        COULEUR DE BASE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Details Section */}
            <div className="p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{palettes[activeTab].name}</h3>
                <p className="text-lg text-slate-600">{palettes[activeTab].description}</p>
              </div>

              {/* Color Grid */}
              <div className="grid grid-cols-5 gap-6 mb-8">
                {palettes[activeTab].colors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="w-full aspect-square rounded-2xl mb-4 shadow-xl border-4 border-white"
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="font-bold text-slate-800 mb-1">Couleur {index + 1}</p>
                    <p className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded">{color}</p>
                  </div>
                ))}
              </div>

              {/* Usage Examples */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-bold text-slate-800 mb-4 text-lg">Exemples d'utilisation</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Website Header */}
                  <div className="bg-white rounded-lg shadow p-4">
                    <div 
                      className="h-32 rounded-lg mb-3 flex items-center justify-center"
                      style={{ backgroundColor: palettes[activeTab].colors[0] }}
                    >
                      <span 
                        className="text-2xl font-bold"
                        style={{ color: palettes[activeTab].colors[4] }}
                      >
                        LOGO
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">En-tête de site web</p>
                  </div>

                  {/* Infographic */}
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="space-y-2">
                      {palettes[activeTab].colors.slice(0, 3).map((color, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div 
                            className="w-8 h-8 rounded"
                            style={{ backgroundColor: color }}
                          ></div>
                          <div className="flex-1 h-4 bg-slate-200 rounded" style={{ width: `${(idx + 1) * 30}%`, backgroundColor: color }}></div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-3">Graphique de données</p>
                  </div>

                  {/* UI Elements */}
                  <div className="bg-white rounded-lg shadow p-4 space-y-2">
                    {palettes[activeTab].colors.slice(0, 3).map((color, idx) => (
                      <button
                        key={idx}
                        className="w-full px-4 py-2 rounded font-semibold text-white text-sm"
                        style={{ backgroundColor: color }}
                      >
                        Action {idx + 1}
                      </button>
                    ))}
                    <p className="text-xs text-slate-500 mt-3">Boutons d'interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Theory Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Analogique */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500">
            <h4 className="text-xl font-bold text-teal-700 mb-3">Palette Analogique</h4>
            <p className="text-slate-600 text-sm mb-4">
              Utilise des couleurs adjacentes sur le cercle chromatique. Crée une harmonie douce et naturelle.
            </p>
            <div className="bg-teal-50 rounded p-3 text-xs text-slate-700">
              <strong>Utilisation :</strong> Designs apaisants, naturels, interfaces harmonieuses
            </div>
          </div>

          {/* Complémentaire */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h4 className="text-xl font-bold text-blue-700 mb-3">Palette Complémentaire</h4>
            <p className="text-slate-600 text-sm mb-4">
              Utilise des couleurs opposées sur le cercle. Crée un contraste fort et dynamique.
            </p>
            <div className="bg-blue-50 rounded p-3 text-xs text-slate-700">
              <strong>Utilisation :</strong> Designs énergiques, appels à l'action, contrastes marqués
            </div>
          </div>

          {/* Triadique */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <h4 className="text-xl font-bold text-red-700 mb-3">Palette Triadique</h4>
            <p className="text-slate-600 text-sm mb-4">
              Utilise trois couleurs équidistantes. Crée un équilibre vibrant et équilibré.
            </p>
            <div className="bg-red-50 rounded p-3 text-xs text-slate-700">
              <strong>Utilisation :</strong> Designs ludiques, créatifs, illustrations colorées
            </div>
          </div>
        </div>

        {/* Color Wheel Reference */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Référence : Le Cercle Chromatique
          </h3>
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Simple color wheel representation */}
              <div className="absolute inset-0 rounded-full overflow-hidden" style={{
                background: 'conic-gradient(from 0deg, red, yellow, lime, cyan, blue, magenta, red)'
              }}>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                  <p className="text-slate-600 text-center text-sm px-6">
                    Les couleurs sont organisées selon leur position sur le spectre lumineux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PalettesCouleursExercice;