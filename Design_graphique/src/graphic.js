import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ExerciceRouter from './components/ExerciceRouter';
import HomePage from './pages/HomePage';
import CoursPage from './pages/CoursPage';
import DesignGraphiquePage from './pages/DesignGraphiquePage';
import UiUxDesignPage from './pages/UiUxDesignPage';
import TypographiePage from './pages/TypographiePage';
import CouleurPage from './pages/CouleurPage';
import ProjetsPage from './pages/ProjetsPage';
import RessourcesPage from './pages/RessourcesPage';

const SiteDesignGraphique = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentExercice, setCurrentExercice] = useState(null);

  // Si un exercice est sélectionné, afficher l'exercice
  if (currentExercice) {
    return (
      <ExerciceRouter 
        exerciceId={currentExercice} 
        onClose={() => setCurrentExercice(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}

        {currentPage === 'cours' && <CoursPage setCurrentPage={setCurrentPage} />}

        {currentPage === 'design-graphique' && <DesignGraphiquePage setCurrentPage={setCurrentPage} />}

        {currentPage === 'ui-ux-design' && <UiUxDesignPage setCurrentPage={setCurrentPage} />}

        {currentPage === 'typo' && <TypographiePage setCurrentExercice={setCurrentExercice} setCurrentPage={setCurrentPage} />}

        {currentPage === 'couleur' && <CouleurPage setCurrentExercice={setCurrentExercice} />}

        {currentPage === 'projets' && <ProjetsPage setCurrentExercice={setCurrentExercice} />}

        {currentPage === 'ressources' && <RessourcesPage />}

      </main>

      <Footer />

    </div>
  );
};

export default SiteDesignGraphique;