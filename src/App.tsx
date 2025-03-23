import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import './i18n/i18n';
import { WeatherPanel } from './components/WeatherPanel';
import { Navigation } from './components/Navigation';
import { ContentArea } from './components/ContentArea';
import { AiAssistant } from './components/AiAssistant';
import { Feedback } from './components/Feedback';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('howToGet');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and not at the top
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header 
        className={`bg-white shadow-md fixed w-full top-0 z-20 transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between sm:justify-center sm:relative">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">{t('title')}</h1>
            <div className="flex items-center gap-4 sm:absolute sm:right-4">
              <LanguageSelector />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 lg:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed right-0 top-[60px] w-64 bg-white shadow-lg z-10 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <Navigation
            onSelect={(section) => {
              setActiveSection(section);
              setIsMenuOpen(false);
            }}
            activeSection={activeSection}
            className="flex flex-col space-y-2"
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pt-20 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Sidebar - Weather and Navigation */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <WeatherPanel />
            </div>
            <div className="hidden lg:block">
              <Navigation
                onSelect={setActiveSection}
                activeSection={activeSection}
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6">
            <ContentArea section={activeSection} />
          </div>

          {/* Right Sidebar - AI Assistant and Feedback */}
          <div className="lg:col-span-3 space-y-4">
            <AiAssistant />
            <Feedback />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;