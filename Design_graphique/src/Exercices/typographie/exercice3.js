import React, { useState } from 'react';
import { X, Check, RefreshCw } from 'lucide-react';
import { articles } from '../../utils/articlesContent';
import { ArticleFlat } from '../../components/ArticleRenderer';

const HierarchieTexteMockup = () => {
  const [activeView, setActiveView] = useState('comparison');
  const [selectedArticle, setSelectedArticle] = useState('article1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Exercice 3 : Hiérarchisation Typographique
          </h1>
          <p className="text-lg text-slate-600">
            Créer une hiérarchie visuelle dans un article de presse
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Consigne de l'exercice</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6">
            <p className="text-slate-700 mb-4">
              <strong className="text-blue-800">Objectif :</strong> Créer une version hiérarchisée de l'article choisi
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Observez l'exemple de hiérarchisation dans la vue comparaison</li>
              <li>Prenez l'article fourni en version plate</li>
              <li>Créez votre propre version hiérarchisée en utilisant :</li>
              <li className="ml-4">- Tailles différentes (48pt titre, 28pt intertitres, 16pt corps)</li>
              <li className="ml-4">- Graisse (Bold pour titres et intertitres)</li>
              <li className="ml-4">- Couleurs (noir titre, bleu intertitres, gris corps)</li>
              <li className="ml-4">- Espacements généreux entre sections</li>
            </ul>
            <p className="text-slate-700 mt-4">
              <strong className="text-blue-800">Livrable :</strong> Un document avec votre version hiérarchisée de l'article
            </p>
          </div>

          {/* Sélecteur d'article */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Choisissez votre article :</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(articles).map(([key, article]) => (
                <button
                  key={key}
                  onClick={() => setSelectedArticle(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedArticle === key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveView('comparison')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'comparison'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              🔍 Voir l'exemple
            </button>
            <button
              onClick={() => setActiveView('flat')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'flat'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              📄 Article à travailler
            </button>
          </div>
        </div>

        {/* Comparison View - EXEMPLE */}
        {activeView === 'comparison' && (
          <div>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold mb-2">📚 Exemple de hiérarchisation typographique</h3>
              <p className="text-indigo-100">Observez les différences entre les deux versions ci-dessous</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-b-2xl shadow-2xl">
              
              {/* Version Plate - MAUVAIS */}
              <div className="border-2 border-red-300 rounded-xl overflow-hidden">
                <div className="bg-red-600 text-white px-4 py-3 flex items-center gap-3">
                  <X className="w-5 h-5" />
                  <h4 className="font-bold">❌ Version sans hiérarchie</h4>
                </div>
                
                <div className="p-6 max-h-80 overflow-y-auto bg-red-50">
                  <div className="space-y-3">
                    <p className="text-base text-slate-800 leading-relaxed">
                      L'intelligence artificielle transforme notre quotidien
                    </p>
                    <p className="text-base text-slate-800 leading-relaxed">
                      Une révolution technologique en marche qui change nos habitudes
                    </p>
                    <p className="text-base text-slate-800 leading-relaxed">
                      L'intelligence artificielle (IA) est devenue omniprésente dans notre vie quotidienne. Des assistants vocaux aux recommandations personnalisées, elle façonne progressivement notre manière d'interagir avec la technologie.
                    </p>
                    <p className="text-base text-slate-800 leading-relaxed">
                      Applications pratiques
                    </p>
                    <p className="text-base text-slate-800 leading-relaxed">
                      Dans le domaine de la santé, l'IA permet de diagnostiquer des maladies avec une précision remarquable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Version Hiérarchisée - BON */}
              <div className="border-2 border-green-300 rounded-xl overflow-hidden">
                <div className="bg-green-600 text-white px-4 py-3 flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <h4 className="font-bold">✅ Version hiérarchisée</h4>
                </div>
                
                <div className="p-6 max-h-80 overflow-y-auto bg-green-50">
                  {/* Titre principal */}
                  <h1 className="text-3xl font-bold text-slate-900 mb-3 leading-tight">
                    L'intelligence artificielle transforme notre quotidien
                  </h1>
                  
                  {/* Sous-titre */}
                  <p className="text-lg text-slate-600 mb-4 italic border-l-4 border-indigo-500 pl-3">
                    Une révolution technologique en marche qui change nos habitudes
                  </p>
                  
                  {/* Introduction */}
                  <p className="text-base text-slate-700 mb-6 leading-relaxed font-medium">
                    L'intelligence artificielle (IA) est devenue omniprésente dans notre vie quotidienne. Des assistants vocaux aux recommandations personnalisées, elle façonne progressivement notre manière d'interagir avec la technologie.
                  </p>
                  
                  {/* Intertitre */}
                  <h2 className="text-xl font-bold text-indigo-700 mb-2 border-b-2 border-indigo-200 pb-1">
                    Applications pratiques
                  </h2>
                  
                  {/* Corps de texte */}
                  <p className="text-base text-slate-700 leading-relaxed">
                    Dans le domaine de la santé, l'IA permet de diagnostiquer des maladies avec une précision remarquable.
                  </p>
                </div>
              </div>

            </div>
            
            {/* Guide des techniques */}
            <div className="mt-6 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <h4 className="text-lg font-bold text-blue-800 mb-4">🎯 Techniques utilisées dans l'exemple :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-blue-700 mb-2">📏 Tailles</h5>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Titre principal : 32pt (text-3xl)</li>
                    <li>• Sous-titre : 20pt (text-lg)</li>
                    <li>• Intertitres : 24pt (text-xl)</li>
                    <li>• Corps de texte : 16pt (text-base)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-700 mb-2">🎨 Couleurs & Style</h5>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Titre : Noir intense (slate-900)</li>
                    <li>• Sous-titre : Gris moyen + italique</li>
                    <li>• Intertitres : Bleu indigo + bold</li>
                    <li>• Corps : Gris foncé lisible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article à travailler */}
        {activeView === 'flat' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">📄 Article à hiérarchiser</h3>
                    <p className="text-blue-100 text-sm">Votre mission : créer une version hiérarchisée de cet article</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
                  <p className="text-amber-800 font-semibold">
                    💡 <strong>Consigne :</strong> Copiez ce texte dans votre logiciel de mise en page (Word, InDesign, Figma...) 
                    et appliquez une hiérarchie typographique en vous inspirant de l'exemple.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                  <ArticleFlat article={articles[selectedArticle]} />
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">📋 Checklist pour votre hiérarchisation :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">✅ À faire :</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>□ Titre principal en grande taille + bold</li>
                        <li>□ Sous-titre en taille moyenne + italique</li>
                        <li>□ Intertitres en couleur + bold</li>
                        <li>□ Corps de texte lisible et aéré</li>
                        <li>□ Espacements généreux entre sections</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">🎨 Suggestions :</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Utilisez maximum 3 tailles différentes</li>
                        <li>• Restez dans la même famille de police</li>
                        <li>• Ajoutez de la couleur aux intertitres</li>
                        <li>• Justifiez ou alignez à gauche le corps</li>
                        <li>• Testez la lisibilité en plissant les yeux</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default HierarchieTexteMockup;