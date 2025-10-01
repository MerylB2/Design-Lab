import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const HierarchieTexteMockup = () => {
  const [activeView, setActiveView] = useState('comparison');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Mockup Visuel - Exercice 3
          </h1>
          <p className="text-lg text-slate-600">
            Hiérarchisation d'un Texte (Article de Journal)
          </p>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Consigne de l'exercice</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6">
            <p className="text-slate-700 mb-4">
              <strong className="text-blue-800">Objectif :</strong> Mettre en page un petit article avec :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Un titre principal</li>
              <li>Un sous-titre</li>
              <li>Des intertitres pour structurer</li>
              <li>Un corps de texte</li>
            </ul>
            <p className="text-slate-700 mt-4">
              <strong className="text-blue-800">Démontrer :</strong> La hiérarchie visuelle par la taille, la graisse (bold), la couleur et l'alignement
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveView('comparison')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'comparison'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Vue Comparaison
            </button>
            <button
              onClick={() => setActiveView('flat')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'flat'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Version Plate
            </button>
            <button
              onClick={() => setActiveView('hierarchical')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'hierarchical'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Version Hiérarchisée
            </button>
          </div>
        </div>

        {/* Comparison View */}
        {activeView === 'comparison' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Version Plate - MAUVAIS */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <X className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Version Plate</h3>
                </div>
                <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  À éviter
                </span>
              </div>
              
              <div className="p-8">
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
                    Dans le domaine de la santé, l'IA permet de diagnostiquer des maladies avec une précision remarquable. Les algorithmes analysent des milliers d'images médicales en quelques secondes, aidant les médecins à prendre des décisions éclairées.
                  </p>
                  <p className="text-base text-slate-800 leading-relaxed">
                    Défis et perspectives
                  </p>
                  <p className="text-base text-slate-800 leading-relaxed">
                    Malgré ces avancées, l'IA soulève des questions éthiques importantes. La protection des données personnelles et la transparence des algorithmes sont au cœur des débats actuels. Il est essentiel de développer cette technologie de manière responsable.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800 font-semibold mb-2">Problèmes identifiés :</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Toutes les tailles identiques</li>
                    <li>• Pas de distinction visuelle</li>
                    <li>• Difficile à scanner rapidement</li>
                    <li>• Manque de structure claire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Version Hiérarchisée - BON */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Version Hiérarchisée</h3>
                </div>
                <span className="bg-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Recommandé
                </span>
              </div>
              
              <div className="p-8">
                {/* Titre principal */}
                <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  L'intelligence artificielle transforme notre quotidien
                </h1>
                
                {/* Sous-titre */}
                <p className="text-xl text-slate-600 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-4">
                  Une révolution technologique en marche qui change nos habitudes
                </p>
                
                {/* Chapô / Introduction */}
                <p className="text-base text-slate-700 mb-6 leading-relaxed">
                  L'intelligence artificielle (IA) est devenue omniprésente dans notre vie quotidienne. Des assistants vocaux aux recommandations personnalisées, elle façonne progressivement notre manière d'interagir avec la technologie.
                </p>
                
                {/* Intertitre 1 */}
                <h2 className="text-2xl font-bold text-indigo-700 mb-3 mt-6">
                  Applications pratiques
                </h2>
                
                {/* Corps de texte */}
                <p className="text-base text-slate-700 mb-6 leading-relaxed">
                  Dans le domaine de la santé, l'IA permet de diagnostiquer des maladies avec une précision remarquable. Les algorithmes analysent des milliers d'images médicales en quelques secondes, aidant les médecins à prendre des décisions éclairées.
                </p>
                
                {/* Intertitre 2 */}
                <h2 className="text-2xl font-bold text-indigo-700 mb-3 mt-6">
                  Défis et perspectives
                </h2>
                
                {/* Corps de texte */}
                <p className="text-base text-slate-700 mb-6 leading-relaxed">
                  Malgré ces avancées, l'IA soulève des questions éthiques importantes. La protection des données personnelles et la transparence des algorithmes sont au cœur des débats actuels. Il est essentiel de développer cette technologie de manière responsable.
                </p>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-semibold mb-2">Améliorations apportées :</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Hiérarchie claire des tailles</li>
                    <li>• Utilisation de la graisse (bold)</li>
                    <li>• Couleurs pour différencier</li>
                    <li>• Espacement adapté</li>
                    <li>• Structure visuelle évidente</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Flat Version Only */}
        {activeView === 'flat' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <X className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Version Plate - À éviter</h3>
                </div>
              </div>
              
              <div className="p-10">
                <div className="space-y-3 mb-8">
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
                    Dans le domaine de la santé, l'IA permet de diagnostiquer des maladies avec une précision remarquable. Les algorithmes analysent des milliers d'images médicales en quelques secondes, aidant les médecins à prendre des décisions éclairées.
                  </p>
                  <p className="text-base text-slate-800 leading-relaxed">
                    Défis et perspectives
                  </p>
                  <p className="text-base text-slate-800 leading-relaxed">
                    Malgré ces avancées, l'IA soulève des questions éthiques importantes. La protection des données personnelles et la transparence des algorithmes sont au cœur des débats actuels. Il est essentiel de développer cette technologie de manière responsable.
                  </p>
                </div>

                <div className="p-6 bg-red-50 rounded-lg border-2 border-red-200">
                  <h4 className="text-lg font-bold text-red-800 mb-3">Pourquoi cette version ne fonctionne pas ?</h4>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Aucune hiérarchie visuelle - tout se ressemble</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Impossible de distinguer le titre des intertitres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Lecture linéaire et monotone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Difficile de scanner rapidement le contenu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hierarchical Version Only */}
        {activeView === 'hierarchical' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Version Hiérarchisée - Recommandé</h3>
                </div>
              </div>
              
              <div className="p-10">
                {/* Titre principal */}
                <h1 className="text-5xl font-bold text-slate-900 mb-4 leading-tight">
                  L'intelligence artificielle transforme notre quotidien
                </h1>
                
                {/* Sous-titre */}
                <p className="text-2xl text-slate-600 mb-8 leading-relaxed italic border-l-4 border-indigo-500 pl-4">
                  Une révolution technologique en marche qui change nos habitudes
                </p>
                
                {/* Chapô / Introduction */}
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                  L'intelligence artificielle (IA) est devenue omniprésente dans notre vie quotidienne. Des assistants vocaux aux recommandations personnalisées, elle façonne progressivement notre manière d'interagir avec la technologie.
                </p>
                
                {/* Intertitre 1 */}
                <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">
                  Applications pratiques
                </h2>
                
                {/* Corps de texte */}
                <p className="text-base text-slate-700 mb-8 leading-relaxed">
                  Dans le domaine de la santé, l'IA permet de diagnostiquer des maladies avec une précision remarquable. Les algorithmes analysent des milliers d'images médicales en quelques secondes, aidant les médecins à prendre des décisions éclairées.
                </p>
                
                {/* Intertitre 2 */}
                <h2 className="text-3xl font-bold text-indigo-700 mb-4 mt-8">
                  Défis et perspectives
                </h2>
                
                {/* Corps de texte */}
                <p className="text-base text-slate-700 mb-8 leading-relaxed">
                  Malgré ces avancées, l'IA soulève des questions éthiques importantes. La protection des données personnelles et la transparence des algorithmes sont au cœur des débats actuels. Il est essentiel de développer cette technologie de manière responsable.
                </p>

                <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                  <h4 className="text-lg font-bold text-green-800 mb-3">Techniques de hiérarchisation utilisées :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Taille</p>
                        <p className="text-sm text-green-700">Titre 48pt, Intertitres 28pt, Corps 16pt</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Graisse</p>
                        <p className="text-sm text-green-700">Bold pour titres, Regular pour texte</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Couleur</p>
                        <p className="text-sm text-green-700">Indigo pour intertitres, Gris pour corps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Espacement</p>
                        <p className="text-sm text-green-700">Marges généreuses entre sections</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guide des bonnes pratiques */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Guide des Niveaux de Hiérarchie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-slate-800">
              <h4 className="text-3xl font-bold text-slate-900 mb-2">H1</h4>
              <p className="text-sm text-slate-600 mb-1">Titre principal</p>
              <p className="text-xs text-slate-500">36-48pt • Bold • Couleur forte</p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="text-2xl font-bold text-indigo-700 mb-2">H2</h4>
              <p className="text-sm text-slate-600 mb-1">Sous-titre</p>
              <p className="text-xs text-slate-500">24-32pt • Medium/Italic • Accent</p>
            </div>
            <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-600 mb-2">H3</h4>
              <p className="text-sm text-slate-600 mb-1">Intertitre</p>
              <p className="text-xs text-slate-500">20-24pt • Bold • Couleur thème</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-slate-400">
              <h4 className="text-base font-normal text-slate-700 mb-2">Body</h4>
              <p className="text-sm text-slate-600 mb-1">Corps de texte</p>
              <p className="text-xs text-slate-500">14-16pt • Regular • Gris foncé</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HierarchieTexteMockup;