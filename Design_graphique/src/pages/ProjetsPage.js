import React from 'react';
import { Layers, BookOpen, Palette } from 'lucide-react';
import { exercices } from '../data/exercices';

const ProjetsPage = ({ setCurrentExercice }) => {
  const projetsData = exercices.projets || [];

  const getProjectIcon = (projectId) => {
    switch(projectId) {
      case 'projet1':
        return <Palette className="w-8 h-8" />;
      case 'projetFinal':
        return <BookOpen className="w-8 h-8" />;
      default:
        return <Layers className="w-8 h-8" />;
    }
  };

  const getProjectColor = (projectId) => {
    switch(projectId) {
      case 'projet1':
        return {
          gradient: 'from-purple-600 to-violet-600',
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-800'
        };
      case 'projetFinal':
        return {
          gradient: 'from-indigo-600 to-blue-600',
          bg: 'bg-indigo-50',
          border: 'border-indigo-200',
          text: 'text-indigo-800'
        };
      default:
        return {
          gradient: 'from-slate-600 to-gray-600',
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-800'
        };
    }
  };

  const getProjectDetails = (projectId) => {
    switch(projectId) {
      case 'projet1':
        return {
          objectives: [
            'Analyser une interface existante (météo, agenda, réseau social, e-commerce)',
            'Identifier les problèmes colorimétriques actuels',
            'Créer une palette harmonieuse adaptée à l\'usage',
            'Appliquer la refonte en respectant l\'accessibilité WCAG',
            'Présenter un avant/après avec justification des choix'
          ]
        };
      case 'projetFinal':
        return {
          objectives: [
            'Développer une application complète de bout en bout',
            'Mobiliser tous les modules techniques du semestre',
            'Créer une interface responsive (mobile et desktop)',
            'Implémenter la sécurité et le RGPD',
            'Documenter et présenter le projet complet'
          ]
        };
      default:
        return { objectives: [] };
    }
  };

  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-10 h-10 text-violet-600" />
          <h1 className="text-4xl font-bold text-slate-800">Projets Pratiques</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl">
          Mettez en application vos compétences avec des projets complets. 
          De la refonte d'interfaces au développement d'applications complètes.
        </p>
      </div>

      <div className="space-y-8">
        {projetsData.map((projet) => {
          const colors = getProjectColor(projet.id);
          const details = getProjectDetails(projet.id);
          
          return (
            <div key={projet.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
              <div className={`bg-gradient-to-r ${colors.gradient} text-white p-8`}>
                <div className="flex items-center gap-4 mb-3">
                  {getProjectIcon(projet.id)}
                  <h3 className="text-3xl font-bold">{projet.title}</h3>
                </div>
                <p className="text-white/90">{projet.description}</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-800 mb-3">Objectifs du projet :</h4>
                  <ul className="space-y-2 text-slate-700">
                    {details.objectives.map((objective, index) => (
                      <li key={index}>✓ {objective}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className={`${colors.bg} rounded-lg p-4 border-2 ${colors.border}`}>
                    <h5 className={`font-bold ${colors.text} mb-2`}>Niveau</h5>
                    <p className="text-slate-700">{projet.niveau}</p>
                  </div>
                  <div className={`${colors.bg} rounded-lg p-4 border-2 ${colors.border}`}>
                    <h5 className={`font-bold ${colors.text} mb-2`}>Durée estimée</h5>
                    <p className="text-slate-700">{projet.duree}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentExercice(projet.id)}
                  className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}
                >
                  {projet.id === 'projetFinal' ? 'Consulter le cahier des charges' : 'Commencer le projet'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjetsPage;