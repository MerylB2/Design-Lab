import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
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

        {/* SECTION 1: EXEMPLE PÉDAGOGIQUE */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-t-2xl">
            <h2 className="text-3xl font-bold mb-2">📚 Section 1 : Exemple Pédagogique</h2>
            <p className="text-purple-100">
              Observez les techniques de hiérarchisation avec l'exemple sur l'Intelligence Artificielle
            </p>
          </div>

          <div className="bg-white rounded-b-2xl shadow-xl p-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6">
              <p className="text-slate-700 mb-4">
                <strong className="text-blue-800">Objectif :</strong> Comprendre la hiérarchie typographique avec un exemple concret
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Observer les différences entre version plate et hiérarchisée</li>
                <li>Identifier les techniques utilisées (taille, graisse, couleur, espacement)</li>
                <li>Comprendre l'impact sur la lisibilité</li>
              </ul>
            </div>

            {/* Toggle Buttons pour l'exemple */}
            <div className="flex justify-center gap-4 mb-8">
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

            {/* Comparison View */}
            {activeView === 'comparison' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Version Plate - MAUVAIS */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-300">
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
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-300">
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
          </div>
        </div>

        {/* SECTION 2: ARTICLES À HIÉRARCHISER */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
            <h2 className="text-3xl font-bold mb-2">📝 Section 2 : Articles à Hiérarchiser</h2>
            <p className="text-blue-100">
              Choisissez un article et créez votre propre hiérarchie typographique
            </p>
          </div>

          <div className="bg-white rounded-b-2xl shadow-xl p-8">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded mb-6">
              <p className="text-slate-700 mb-4">
                <strong className="text-amber-800">Mission :</strong> Appliquer les techniques observées dans la section 1
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Choisissez un des 3 articles proposés (tirés du fichier articles.md)</li>
                <li>Copiez le texte en version plate dans votre logiciel</li>
                <li>Appliquez une hiérarchie typographique efficace</li>
                <li>Inspirez-vous des techniques montrées dans l'exemple</li>
              </ul>
            </div>

            {/* Sélecteur d'article */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Choisissez votre article :</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(articles).map(([key, article]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedArticle(key)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedArticle === key
                        ? 'bg-blue-50 border-blue-400 text-blue-800'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <h4 className="font-bold mb-2">{article.title}</h4>
                    <p className="text-sm text-slate-600">{article.subtitle}</p>
                    <div className="mt-2 text-xs text-slate-500">
                      {article.sections.length} sections • {article.sections.reduce((acc, section) => acc + section.paragraphs.length, 0)} paragraphes
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">
                💡 Ces articles sont tirés du fichier articles.md et présentés en version plate
              </p>
            </div>

            {/* Article sélectionné */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Article à hiérarchiser</h3>
                    <p className="text-blue-100 text-sm">
                      Version plate - à vous de créer la hiérarchie !
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
                  <p className="text-amber-800 font-semibold">
                    💡 <strong>Consigne :</strong> Copiez ce texte dans votre logiciel de mise en page 
                    (Word, InDesign, Figma, Canva...) et appliquez une hiérarchie typographique en vous inspirant de l'exemple.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 mb-6">
                  <ArticleFlat article={articles[selectedArticle]} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3">✅ Checklist à appliquer :</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>□ Titre principal : Grande taille (36-48pt) + Bold</li>
                      <li>□ Sous-titre : Taille moyenne (20-24pt) + Italique</li>
                      <li>□ Intertitres : Couleur + Bold (18-20pt)</li>
                      <li>□ Corps : Taille lisible (14-16pt) + Regular</li>
                      <li>□ Marges généreuses entre sections</li>
                      <li>□ Alignement cohérent (gauche ou justifié)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3">🎨 Conseils de pro :</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Maximum 3-4 tailles différentes</li>
                      <li>• Restez dans la même famille de police</li>
                      <li>• Contraste de couleur suffisant (WCAG)</li>
                      <li>• Cohérence dans les espacements</li>
                      <li>• Test : "plissez les yeux" pour vérifier la hiérarchie</li>
                      <li>• Inspirez-vous de l'exemple Section 1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guide des bonnes pratiques */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
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