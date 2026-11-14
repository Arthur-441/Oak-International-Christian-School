import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { EnrollmentPdfModal } from './components/EnrollmentPdfModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isEnrollmentPdfOpen, setIsEnrollmentPdfOpen] = useState(false);

  // Guarantee Home page is always shown first when the website opens or reloads
  useEffect(() => {
    // Force Home as default on page load/open
    setCurrentPage('home');
    if (window.location.hash) {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        window.location.hash = '';
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'academics', 'activities', 'gallery', 'contact'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    if (page === 'home') {
      try {
        history.pushState(null, '', window.location.pathname + window.location.search);
      } catch {
        window.location.hash = '';
      }
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#E6F5EC] selection:text-[#1F6E3D]">
      {/* Sticky Top Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        onOpenEnrollmentForm={() => setIsEnrollmentPdfOpen(true)}
      />

      {/* Main Multi-Page Content Area with Smooth Page Transition */}
      <main className="flex-1 w-full">
        <div key={currentPage} className="animate-page-enter">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={navigateTo}
              onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
              onOpenEnrollmentForm={() => setIsEnrollmentPdfOpen(true)}
            />
          )}
          {currentPage === 'about' && (
            <AboutPage
              onNavigate={navigateTo}
              onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
            />
          )}
          {currentPage === 'academics' && (
            <AcademicsPage
              onNavigate={navigateTo}
              onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
              onOpenEnrollmentForm={() => setIsEnrollmentPdfOpen(true)}
            />
          )}
          {currentPage === 'activities' && (
            <ActivitiesPage
              onNavigate={navigateTo}
              onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
            />
          )}
          {currentPage === 'gallery' && (
            <GalleryPage
              onNavigate={navigateTo}
              onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
              onOpenEnrollmentForm={() => setIsEnrollmentPdfOpen(true)}
            />
          )}
          {currentPage === 'contact' && (
            <ContactPage
              onNavigate={navigateTo}
              onOpenEnrollmentForm={() => setIsEnrollmentPdfOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        onOpenEnrollmentForm={() => setIsEnrollmentPdfOpen(true)}
      />

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onOpenEnrollmentForm={() => {
          setIsEnquiryModalOpen(false);
          setIsEnrollmentPdfOpen(true);
        }}
      />

      {/* Official Enrollment Form PDF Modal */}
      <EnrollmentPdfModal
        isOpen={isEnrollmentPdfOpen}
        onClose={() => setIsEnrollmentPdfOpen(false)}
      />
    </div>
  );
}



