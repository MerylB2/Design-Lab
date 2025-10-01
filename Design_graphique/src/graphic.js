import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TypographiePage from './pages/TypographiePage';
import CouleurPage from './pages/CouleurPage';
import ProjetsPage from './pages/ProjetsPage';
import RessourcesPage from './pages/RessourcesPage';

const SiteDesignGraphique = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {currentPage === 'typo' && <TypographiePage />}

        {currentPage === 'couleur' && <CouleurPage />}

        {currentPage === 'projets' && <ProjetsPage />}

        {currentPage === 'ressources' && <RessourcesPage />}

      </main>

      <Footer />

    </div>
  );
};

export default SiteDesignGraphique;