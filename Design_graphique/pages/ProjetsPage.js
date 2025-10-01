import React from 'react';
import { Layers } from 'lucide-react';

const ProjetsPage = () => {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-10 h-10 text-violet-600" />
          <h1 className="text-4xl font-bold text-slate-800">Projets Pratiques</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl">
          Mettez en application vos compétences avec des projets complets de refonte d'interfaces. 
          Analysez, concevez et justifiez vos choix de design.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8">
          <h3 className="text-3xl font-bold mb-2">Projet 1 : Refonte Colorimétrique</h3>
          <p className="text-purple-100">Proposer une nouvelle palette cohérente pour une interface existante</p>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h4 className="font-bold text-slate-800 mb-3">Objectifs du projet :</h4>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Analyser une interface existante (météo, agenda, réseau social, e-commerce)</li>
              <li>✓ Identifier les problèmes colorimétriques actuels</li>
              <li>✓ Créer une palette harmonieuse adaptée à l'usage</li>
              <li>✓ Appliquer la refonte en respectant l'accessibilité WCAG</li>
              <li>✓ Présenter un avant/après avec justification des choix</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <h5 className="font-bold text-purple-800 mb-2">Niveau</h5>
              <p className="text-slate-700">Intermédiaire à Avancé</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <h5 className="font-bold text-purple-800 mb-2">Durée estimée</h5>
              <p className="text-slate-700">2-3 heures</p>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Commencer le projet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjetsPage;