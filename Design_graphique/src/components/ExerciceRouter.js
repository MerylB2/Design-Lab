import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Import des exercices
import Exercice1 from '../Exercices/typographie/exercice1';
import Exercice2 from '../Exercices/typographie/exercice2';
import Exercice3 from '../Exercices/typographie/exercice3';
import Exercice4 from '../Exercices/couleur/execice4';
import Exercice5 from '../Exercices/couleur/exercice5';
import Exercice6 from '../Exercices/couleur/exercice6';
import Projet1 from '../Exercices/projets/projet1';
import ProjetFinal from '../Exercices/projets/projetFinal';

const ExerciceRouter = ({ exerciceId, onClose }) => {
  const exerciceComponents = {
    'ex1': Exercice1,
    'ex2': Exercice2,
    'ex3': Exercice3,
    'ex4': Exercice4,
    'ex5': Exercice5,
    'ex6': Exercice6,
    'projet1': Projet1,
    'projetFinal': ProjetFinal
  };

  const ExerciceComponent = exerciceComponents[exerciceId];

  if (!ExerciceComponent) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Exercice non trouvé</h2>
            <p className="text-slate-600">L'exercice demandé n'existe pas ou n'est pas encore disponible.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Bouton retour */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux exercices
          </button>
        </div>
      </div>
      
      {/* Contenu de l'exercice */}
      <ExerciceComponent />
    </div>
  );
};

export default ExerciceRouter;