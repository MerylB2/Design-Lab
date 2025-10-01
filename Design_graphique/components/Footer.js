import React from 'react';
import { Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 rounded-lg">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Design Lab</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Plateforme d'apprentissage dédiée au design graphique et UI/UX
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Exercices</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Typographie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Couleur</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Outils</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livres</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Glossaire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 Design Lab - Plateforme d'apprentissage en Design Graphique</p>
          <p className="mt-2">Développé avec passion pour les designers en herbe 🎨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;