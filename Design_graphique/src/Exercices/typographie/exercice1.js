import React from 'react';

const TypographyExerciseMockup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Mockup Visuel - Exercice de Typographie
          </h1>
          <p className="text-lg text-slate-600">
            Aperçu de l'interface avec cases à cocher
          </p>
        </div>

        {/* Main Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-slate-300">
          
          {/* Exercise Header */}
          <div className="text-center mb-10 pb-6 border-b-4 border-indigo-600">
            <h2 className="text-3xl font-bold text-indigo-700 mb-2">
              EXERCICE 1 : IDENTIFICATION DE TYPOGRAPHIES
            </h2>
            <p className="text-slate-600 text-lg">
              Associez chaque mot affiché avec le nom de sa police parmi la liste
            </p>
          </div>

          {/* Info Fields */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-slate-50 rounded-lg">
            <div>
              <label className="font-bold text-slate-700">Nom :</label>
              <span className="ml-2 text-slate-400">_______________________</span>
            </div>
            <div>
              <label className="font-bold text-slate-700">Date :</label>
              <span className="ml-2 text-slate-400">_______________________</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
            <p className="text-slate-700">
              <strong className="text-yellow-800">Consigne :</strong> Observez attentivement chaque mot ci-dessous. 
              Cochez la case correspondant à la police de caractères utilisée.
            </p>
          </div>

          {/* Exercise Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Mot 1 */}
            <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full inline-block font-bold mb-4">
                Mot 1
              </div>
              
              <div className="bg-white border-2 border-slate-300 rounded-lg p-8 text-center mb-6">
                <p className="text-6xl" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Design
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Times New Roman</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Arial</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Garamond</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Helvetica</span>
                </div>
              </div>
            </div>

            {/* Mot 2 */}
            <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full inline-block font-bold mb-4">
                Mot 2
              </div>
              
              <div className="bg-white border-2 border-slate-300 rounded-lg p-8 text-center mb-6">
                <p className="text-6xl" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Créativité
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Times New Roman</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Arial</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Garamond</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Helvetica</span>
                </div>
              </div>
            </div>

            {/* Mot 3 */}
            <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full inline-block font-bold mb-4">
                Mot 3
              </div>
              
              <div className="bg-white border-2 border-slate-300 rounded-lg p-8 text-center mb-6">
                <p className="text-6xl" style={{ fontFamily: 'Georgia, serif' }}>
                  Typography
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Times New Roman</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Arial</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Garamond</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Helvetica</span>
                </div>
              </div>
            </div>

            {/* Mot 4 */}
            <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full inline-block font-bold mb-4">
                Mot 4
              </div>
              
              <div className="bg-white border-2 border-slate-300 rounded-lg p-8 text-center mb-6">
                <p className="text-6xl" style={{ fontFamily: 'Verdana, sans-serif' }}>
                  Modernité
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Times New Roman</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Arial</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Garamond</span>
                </div>
                <div className="flex items-center p-3 border border-slate-300 rounded hover:bg-slate-100">
                  <div className="w-5 h-5 border-2 border-slate-700 rounded mr-3"></div>
                  <span className="text-slate-700">Helvetica</span>
                </div>
              </div>
            </div>

          </div>

          {/* Reference Section */}
          <div className="mt-10 p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">
              Liste des polices disponibles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-white rounded border border-indigo-200 text-center">
                <p className="text-sm text-slate-600 mb-1">Times New Roman</p>
                <p className="text-2xl" style={{ fontFamily: 'Times New Roman, serif' }}>Aa</p>
              </div>
              <div className="p-3 bg-white rounded border border-indigo-200 text-center">
                <p className="text-sm text-slate-600 mb-1">Arial</p>
                <p className="text-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>Aa</p>
              </div>
              <div className="p-3 bg-white rounded border border-indigo-200 text-center">
                <p className="text-sm text-slate-600 mb-1">Garamond</p>
                <p className="text-2xl" style={{ fontFamily: 'Garamond, serif' }}>Aa</p>
              </div>
              <div className="p-3 bg-white rounded border border-indigo-200 text-center">
                <p className="text-sm text-slate-600 mb-1">Helvetica</p>
                <p className="text-2xl" style={{ fontFamily: 'Helvetica, sans-serif' }}>Aa</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TypographyExerciseMockup;