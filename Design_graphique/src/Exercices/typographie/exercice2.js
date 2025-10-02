import React from 'react';

const SpecimenTypographiqueMockup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Exercice 2
          </h1>
          <p className="text-lg text-slate-600">
            Création d'un Spécimen Typographique
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Consigne de l'exercice</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
            <p className="text-slate-700 mb-4">
              <strong className="text-amber-800">Objectif :</strong> Choisir une police et créer une affiche présentant :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Alphabet complet (majuscules et minuscules)</li>
              <li>Chiffres de 0 à 9</li>
              <li>Une phrase type (ex: The quick brown fox jumps over the lazy dog)</li>
            </ul>
            <p className="text-slate-600 mt-4 text-sm">
              <strong>Outils :</strong> Illustrator ou Figma
            </p>
          </div>
        </div>

        {/* Mockup Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Example 1 - Helvetica Style */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-xl aspect-[3/4]">
              
              {/* Header */}
              <div className="border-b-2 border-slate-600 pb-6 mb-6">
                <h3 className="text-white text-sm tracking-widest mb-2">SPECIMEN TYPOGRAPHIQUE</h3>
                <h2 className="text-white text-5xl font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>Helvetica</h2>
                <p className="text-slate-400 text-sm mt-2">Sans-Serif • Neutre • Moderne</p>
              </div>

              {/* Uppercase */}
              <div className="mb-6">
                <p className="text-slate-400 text-xs mb-2 tracking-wide">MAJUSCULES</p>
                <p className="text-white text-2xl tracking-wider" style={{ fontFamily: 'Arial, sans-serif' }}>
                  ABCDEFGHIJKLM<br/>NOPQRSTUVWXYZ
                </p>
              </div>

              {/* Lowercase */}
              <div className="mb-6">
                <p className="text-slate-400 text-xs mb-2 tracking-wide">MINUSCULES</p>
                <p className="text-white text-2xl tracking-wider" style={{ fontFamily: 'Arial, sans-serif' }}>
                  abcdefghijklm<br/>nopqrstuvwxyz
                </p>
              </div>

              {/* Numbers */}
              <div className="mb-6">
                <p className="text-slate-400 text-xs mb-2 tracking-wide">CHIFFRES</p>
                <p className="text-white text-3xl tracking-widest" style={{ fontFamily: 'Arial, sans-serif' }}>
                  0123456789
                </p>
              </div>

              {/* Sample Text */}
              <div className="mt-8 pt-6 border-t border-slate-600">
                <p className="text-white text-lg leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-slate-700">
                <p className="text-slate-500 text-xs">Créé par [Nom] • 2025</p>
              </div>
            </div>
          </div>

          {/* Example 2 - Serif Style */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 overflow-hidden">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-xl aspect-[3/4] border-4 border-amber-200">
              
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b-4 border-amber-800">
                <div className="inline-block bg-amber-800 text-amber-50 px-6 py-2 rounded-full mb-4">
                  <p className="text-xs tracking-widest">SPECIMEN</p>
                </div>
                <h2 className="text-amber-900 text-6xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Garamond
                </h2>
                <p className="text-amber-700 text-sm italic">Élégance classique</p>
              </div>

              {/* Uppercase */}
              <div className="mb-5">
                <p className="text-amber-800 text-xs font-bold mb-2">MAJUSCULES</p>
                <p className="text-amber-900 text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                  ABCDEFGHIJKLMNOP<br/>QRSTUVWXYZ
                </p>
              </div>

              {/* Lowercase */}
              <div className="mb-5">
                <p className="text-amber-800 text-xs font-bold mb-2">MINUSCULES</p>
                <p className="text-amber-900 text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                  abcdefghijklmnop<br/>qrstuvwxyz
                </p>
              </div>

              {/* Numbers */}
              <div className="mb-6">
                <p className="text-amber-800 text-xs font-bold mb-2">CHIFFRES</p>
                <p className="text-amber-900 text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>

              {/* Sample Text */}
              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-amber-300">
                <p className="text-amber-900 text-base italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-6 text-center">
                <div className="inline-block w-32 h-1 bg-amber-800 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Example 3 - Modern Minimal */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 overflow-hidden">
            <div className="bg-white p-10 rounded-xl aspect-[3/4] border border-slate-200">
              
              {/* Large Typography Display */}
              <div className="mb-8">
                <h2 className="text-slate-900 text-8xl font-bold leading-none mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Aa
                </h2>
                <p className="text-slate-600 text-sm tracking-widest">ARIAL / SANS-SERIF</p>
              </div>

              {/* Compact Alphabet */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-slate-400 text-xs mb-1">ABC</p>
                  <p className="text-slate-800 text-lg tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">abc</p>
                  <p className="text-slate-800 text-lg tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">123</p>
                  <p className="text-slate-800 text-xl tracking-wider" style={{ fontFamily: 'Arial, sans-serif' }}>
                    0123456789
                  </p>
                </div>
              </div>

              {/* Large Quote */}
              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <p className="text-slate-700 text-xl leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                  The quick brown<br/>fox jumps over<br/>the lazy dog
                </p>
              </div>

              {/* Size Samples */}
              <div className="mt-8 space-y-2">
                <p className="text-slate-800 text-3xl" style={{ fontFamily: 'Arial, sans-serif' }}>48pt</p>
                <p className="text-slate-800 text-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>36pt</p>
                <p className="text-slate-800 text-xl" style={{ fontFamily: 'Arial, sans-serif' }}>24pt</p>
                <p className="text-slate-800 text-base" style={{ fontFamily: 'Arial, sans-serif' }}>16pt</p>
              </div>
            </div>
          </div>

          {/* Example 4 - Creative Layout */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 overflow-hidden">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-10 rounded-xl aspect-[3/4] relative overflow-hidden">
              
              {/* Background decorative letters */}
              <div className="absolute top-0 right-0 text-white opacity-10 text-9xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>
                Ag
              </div>

              {/* Main Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <p className="text-indigo-200 text-xs tracking-widest mb-2">TYPOGRAPHIE</p>
                  <h2 className="text-white text-5xl font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Times New<br/>Roman
                  </h2>
                  <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>
                </div>

                {/* Alphabet Grid */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <p className="text-white text-lg mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                    ABCDEFGHIJKLM<br/>
                    NOPQRSTUVWXYZ
                  </p>
                  <p className="text-indigo-200 text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                    abcdefghijklm<br/>
                    nopqrstuvwxyz
                  </p>
                </div>

                {/* Numbers */}
                <div className="bg-yellow-400 rounded-lg p-4 mb-6">
                  <p className="text-indigo-900 text-2xl font-bold tracking-widest" style={{ fontFamily: 'Times New Roman, serif' }}>
                    0123456789
                  </p>
                </div>

                {/* Sample Text */}
                <div className="border-t border-white border-opacity-30 pt-6">
                  <p className="text-white text-sm leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                    The quick brown fox<br/>jumps over the lazy dog
                  </p>
                </div>

                {/* Footer tag */}
                <div className="mt-6">
                  <span className="inline-block bg-white text-indigo-700 px-3 py-1 rounded text-xs font-bold">
                    SERIF
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Conseils pour créer votre spécimen</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-bold text-indigo-800 mb-2">Hiérarchie visuelle</h4>
              <p className="text-slate-600 text-sm">Jouez avec les tailles pour créer des points focaux et guider le regard</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-bold text-purple-800 mb-2">Espacement</h4>
              <p className="text-slate-600 text-sm">Utilisez le blanc pour donner de la respiration à votre composition</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-600">
              <h4 className="font-bold text-amber-800 mb-2">Cohérence</h4>
              <p className="text-slate-600 text-sm">Maintenez un style graphique unifié dans toute votre affiche</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpecimenTypographiqueMockup;