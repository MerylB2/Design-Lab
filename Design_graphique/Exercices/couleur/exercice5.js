import React, { useState } from 'react';
import { Check, X, Eye, AlertTriangle } from 'lucide-react';

const ContrasteLisibiliteExercice = () => {
  const [showDetails, setShowDetails] = useState(false);

  const contrastTests = [
    {
      id: 1,
      textColor: '#FFFFFF',
      bgColor: '#000000',
      ratio: 21,
      pass: { aa: true, aaa: true },
      label: 'Blanc sur Noir',
      example: 'Le contraste parfait'
    },
    {
      id: 2,
      textColor: '#000000',
      bgColor: '#FFFFFF',
      ratio: 21,
      pass: { aa: true, aaa: true },
      label: 'Noir sur Blanc',
      example: 'Lecture optimale'
    },
    {
      id: 3,
      textColor: '#FF0000',
      bgColor: '#00FF00',
      ratio: 2.9,
      pass: { aa: false, aaa: false },
      label: 'Rouge sur Vert',
      example: 'Difficile à lire'
    },
    {
      id: 4,
      textColor: '#777777',
      bgColor: '#FFFFFF',
      ratio: 4.5,
      pass: { aa: true, aaa: false },
      label: 'Gris moyen sur Blanc',
      example: 'Contraste minimal AA'
    },
    {
      id: 5,
      textColor: '#CCCCCC',
      bgColor: '#FFFFFF',
      ratio: 1.6,
      pass: { aa: false, aaa: false },
      label: 'Gris clair sur Blanc',
      example: 'Trop peu de contraste'
    },
    {
      id: 6,
      textColor: '#FFFFFF',
      bgColor: '#0066CC',
      ratio: 5.9,
      pass: { aa: true, aaa: false },
      label: 'Blanc sur Bleu',
      example: 'Bon pour le web'
    },
    {
      id: 7,
      textColor: '#FFFF00',
      bgColor: '#FFFFFF',
      ratio: 1.1,
      pass: { aa: false, aaa: false },
      label: 'Jaune sur Blanc',
      example: 'Presque invisible'
    },
    {
      id: 8,
      textColor: '#FFFFFF',
      bgColor: '#2C3E50',
      ratio: 12.6,
      pass: { aa: true, aaa: true },
      label: 'Blanc sur Bleu Foncé',
      example: 'Excellent contraste'
    },
    {
      id: 9,
      textColor: '#E74C3C',
      bgColor: '#ECF0F1',
      ratio: 4.2,
      pass: { aa: false, aaa: false },
      label: 'Rouge sur Gris Clair',
      example: 'Limite pour gros texte'
    },
    {
      id: 10,
      textColor: '#2ECC71',
      bgColor: '#FFFFFF',
      ratio: 2.4,
      pass: { aa: false, aaa: false },
      label: 'Vert clair sur Blanc',
      example: 'Contraste insuffisant'
    },
    {
      id: 11,
      textColor: '#34495E',
      bgColor: '#ECF0F1',
      ratio: 7.5,
      pass: { aa: true, aaa: true },
      label: 'Gris foncé sur Gris Clair',
      example: 'Confortable à lire'
    },
    {
      id: 12,
      textColor: '#FFFFFF',
      bgColor: '#E67E22',
      ratio: 3.9,
      pass: { aa: false, aaa: false },
      label: 'Blanc sur Orange',
      example: 'Juste en dessous'
    }
  ];

  const getStatusIcon = (test) => {
    if (test.pass.aaa) return <Check className="w-5 h-5 text-green-600" />;
    if (test.pass.aa) return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    return <X className="w-5 h-5 text-red-600" />;
  };

  const getStatusBadge = (test) => {
    if (test.pass.aaa) {
      return <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">AAA</span>;
    }
    if (test.pass.aa) {
      return <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold">AA</span>;
    }
    return <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-bold">ÉCHEC</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Eye className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              Mockup Visuel - Exercice 5
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Test de Lisibilité et Contraste (Accessibilité WCAG)
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Consigne de l'exercice</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded mb-6">
            <p className="text-slate-700 mb-4">
              <strong className="text-indigo-800">Objectif :</strong> Comparer plusieurs couples texte/fond et déterminer lesquels respectent les normes d'accessibilité WCAG
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Utiliser un outil comme <strong>WebAIM Contrast Checker</strong></li>
              <li>Calculer le ratio de contraste pour chaque combinaison</li>
              <li>Vérifier la conformité aux niveaux AA et AAA</li>
              <li>Identifier les combinaisons accessibles et problématiques</li>
            </ul>
          </div>

          {/* WCAG Standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-green-800">Niveau AAA</h3>
              </div>
              <p className="text-sm text-slate-700 mb-2">Ratio minimum : <strong>7:1</strong></p>
              <p className="text-xs text-slate-600">Contraste renforcé pour une lisibilité maximale</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <h3 className="font-bold text-yellow-800">Niveau AA</h3>
              </div>
              <p className="text-sm text-slate-700 mb-2">Ratio minimum : <strong>4.5:1</strong></p>
              <p className="text-xs text-slate-600">Contraste minimum requis pour le texte normal</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <X className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">Échec</h3>
              </div>
              <p className="text-sm text-slate-700 mb-2">Ratio : <strong>&lt; 4.5:1</strong></p>
              <p className="text-xs text-slate-600">Ne respecte pas les normes d'accessibilité</p>
            </div>
          </div>

          {/* Toggle Details */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              {showDetails ? 'Masquer les détails' : 'Afficher les détails techniques'}
            </button>
          </div>
        </div>

        {/* Contrast Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {contrastTests.map((test) => (
            <div key={test.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Visual Test */}
              <div 
                className="h-40 flex items-center justify-center p-6 relative"
                style={{ backgroundColor: test.bgColor }}
              >
                <p 
                  className="text-2xl font-bold text-center"
                  style={{ color: test.textColor }}
                >
                  {test.example}
                </p>
                <div className="absolute top-3 right-3">
                  {getStatusIcon(test)}
                </div>
              </div>

              {/* Test Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-800">{test.label}</h3>
                  {getStatusBadge(test)}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Texte :</span>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-6 h-6 rounded border-2 border-slate-300"
                        style={{ backgroundColor: test.textColor }}
                      ></div>
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded">{test.textColor}</code>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Fond :</span>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-6 h-6 rounded border-2 border-slate-300"
                        style={{ backgroundColor: test.bgColor }}
                      ></div>
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded">{test.bgColor}</code>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-700">Ratio de contraste :</span>
                    <span className="font-bold text-indigo-600 text-lg">{test.ratio}:1</span>
                  </div>
                </div>

                {showDetails && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">Texte normal (AA) :</span>
                      <span className={test.pass.aa ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {test.pass.aa ? 'PASSE ✓' : 'ÉCHEC ✗'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">Texte normal (AAA) :</span>
                      <span className={test.pass.aaa ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {test.pass.aaa ? 'PASSE ✓' : 'ÉCHEC ✗'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">Gros texte (AA) :</span>
                      <span className={test.ratio >= 3 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {test.ratio >= 3 ? 'PASSE ✓' : 'ÉCHEC ✗'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Résumé des Tests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {contrastTests.filter(t => t.pass.aaa).length}
              </div>
              <p className="text-slate-700 font-semibold">Conformes AAA</p>
              <p className="text-sm text-slate-600 mt-1">Excellent contraste</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                {contrastTests.filter(t => t.pass.aa && !t.pass.aaa).length}
              </div>
              <p className="text-slate-700 font-semibold">Conformes AA uniquement</p>
              <p className="text-sm text-slate-600 mt-1">Contraste acceptable</p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-xl border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {contrastTests.filter(t => !t.pass.aa).length}
              </div>
              <p className="text-slate-700 font-semibold">Non conformes</p>
              <p className="text-sm text-slate-600 mt-1">À éviter</p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Bonnes Pratiques d'Accessibilité</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Viser le niveau AAA</h4>
                  <p className="text-sm text-slate-600">Privilégiez un ratio de 7:1 ou plus pour une lisibilité optimale</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Éviter les couleurs pures</h4>
                  <p className="text-sm text-slate-600">Rouge pur sur vert pur crée des vibrations désagréables</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Tester avec des outils</h4>
                  <p className="text-sm text-slate-600">Utilisez WebAIM, Stark ou les DevTools du navigateur</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Gris clair sur blanc</h4>
                  <p className="text-sm text-slate-600">Souvent insuffisant, surtout pour les petits textes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Jaune sur blanc</h4>
                  <p className="text-sm text-slate-600">Presque invisible, à éviter absolument</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Couleur seule comme information</h4>
                  <p className="text-sm text-slate-600">Toujours accompagner d'icônes ou de texte explicite</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tool Recommendation */}
          <div className="mt-8 p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Outils recommandés pour tester le contraste
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>WebAIM Contrast Checker</strong> - Outil en ligne gratuit et simple</li>
              <li><strong>Chrome DevTools</strong> - Intégré au navigateur (onglet Lighthouse)</li>
              <li><strong>Stark (Figma/Adobe XD)</strong> - Plugin pour designers</li>
              <li><strong>Colour Contrast Analyser</strong> - Application desktop gratuite</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContrasteLisibiliteExercice;