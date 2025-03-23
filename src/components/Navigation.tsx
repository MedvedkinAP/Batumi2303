import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plane, Coins, Bus, Map, Umbrella, Info } from 'lucide-react';

interface NavigationProps {
  onSelect: (section: string) => void;
  activeSection: string;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onSelect, activeSection, className = 'space-y-2' }) => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'howToGet', icon: Plane, label: t('navigation.howToGet') },
    { id: 'money', icon: Coins, label: t('navigation.money') },
    { id: 'transport', icon: Bus, label: t('navigation.transport') },
    { id: 'toTurkey', icon: Map, label: t('navigation.toTurkey') },
    { 
      id: 'beachesAttractions', 
      icon: Umbrella, 
      label: (
        <span className="leading-tight text-left">
          <span className="block">Пляжи и</span>
          <span className="block">достопримечательности</span>
        </span>
      )
    },
    { id: 'useful', icon: Info, label: t('navigation.useful') }
  ];

  return (
    <nav className={className}>
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`w-full flex items-start p-3 rounded-lg transition-colors duration-200 ${
            activeSection === id
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white hover:bg-blue-50 text-gray-700'
          }`}
        >
          <Icon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </nav>
  );
};