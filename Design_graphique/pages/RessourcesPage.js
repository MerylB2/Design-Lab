import React from 'react';
import { BookOpen } from 'lucide-react';

const RessourcesPage = () => {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-10 h-10 text-violet-600" />
          <h1 className="text-4xl font-bold text-slate-800">Ressources</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl">
          Une sélection d'outils, références et ressources pour approfondir vos connaissances en design graphique.
        </p>
      </div>

      <div className="space-y-8">
        {/* Outils */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Outils Recommandés</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">Adobe Color</h4>
              <p className="text-sm text-slate-600 mb-2">Création de palettes de couleurs harmonieuses</p>
              <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">Coolors</h4>
              <p className="text-sm text-slate-600 mb-2">Générateur de palettes rapide et intuitif</p>
              <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">WebAIM Contrast Checker</h4>
              <p className="text-sm text-slate-600 mb-2">Vérification de l'accessibilité des contrastes</p>
              <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">Google Fonts</h4>
              <p className="text-sm text-slate-600 mb-2">Bibliothèque de polices gratuites</p>
              <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">Figma</h4>
              <p className="text-sm text-slate-600 mb-2">Outil de design d'interface collaboratif</p>
              <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-2">Adobe Illustrator</h4>
              <p className="text-sm text-slate-600 mb-2">Création graphique professionnelle</p>
              <a href="#" className="text-violet-600 text-sm font-semibold">Visiter →</a>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Standards & Guidelines</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-slate-800 mb-2">WCAG 2.1 (Accessibilité Web)</h4>
              <p className="text-sm text-slate-600">Normes internationales pour rendre le web accessible à tous</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-slate-800 mb-2">Material Design (Google)</h4>
              <p className="text-sm text-slate-600">System de design complet avec principes et composants</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-slate-800 mb-2">Human Interface Guidelines (Apple)</h4>
              <p className="text-sm text-slate-600">Recommandations pour le design d'interfaces iOS et macOS</p>
            </div>
          </div>
        </div>

        {/* Books */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Livres Essentiels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-24 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">The Elements of Typographic Style</h4>
                <p className="text-sm text-slate-600 mb-1">Robert Bringhurst</p>
                <p className="text-xs text-slate-500">Bible de la typographie</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Interaction of Color</h4>
                <p className="text-sm text-slate-600 mb-1">Josef Albers</p>
                <p className="text-xs text-slate-500">Théorie des couleurs avancée</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Don't Make Me Think</h4>
                <p className="text-sm text-slate-600 mb-1">Steve Krug</p>
                <p className="text-xs text-slate-500">UX Design et ergonomie web</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Refactoring UI</h4>
                <p className="text-sm text-slate-600 mb-1">Adam Wathan & Steve Schoger</p>
                <p className="text-xs text-slate-500">Design d'interfaces pratique</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glossaire */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Glossaire du Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-violet-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">UI Design</h4>
              <p className="text-sm text-slate-600">User Interface - Conception visuelle des interfaces</p>
            </div>
            <div className="p-4 border-l-4 border-violet-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">UX Design</h4>
              <p className="text-sm text-slate-600">User Experience - Conception de l'expérience utilisateur</p>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">Kerning</h4>
              <p className="text-sm text-slate-600">Espacement entre deux caractères spécifiques</p>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">Leading</h4>
              <p className="text-sm text-slate-600">Interligne, espace vertical entre les lignes de texte</p>
            </div>
            <div className="p-4 border-l-4 border-pink-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">Teinte (Hue)</h4>
              <p className="text-sm text-slate-600">Position sur le cercle chromatique (rouge, bleu, vert...)</p>
            </div>
            <div className="p-4 border-l-4 border-pink-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">Saturation</h4>
              <p className="text-sm text-slate-600">Intensité ou pureté d'une couleur</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">Contraste</h4>
              <p className="text-sm text-slate-600">Différence de luminosité entre deux couleurs</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-slate-50">
              <h4 className="font-bold text-slate-800 mb-1">Accessibilité</h4>
              <p className="text-sm text-slate-600">Conception utilisable par tous, y compris personnes handicapées</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RessourcesPage;