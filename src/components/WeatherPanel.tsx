import React from 'react';
import { Thermometer, Waves, DollarSign, Euro, CircleDollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const WeatherPanel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {/* Weather Section */}
      <div className="bg-white rounded-lg shadow-md p-3">
        <h2 className="text-sm font-semibold mb-2">{t('weather')}</h2>
        <div className="space-y-1.5">
          <div className="flex items-center">
            <Thermometer className="w-4 h-4 mr-1.5 text-blue-600" />
            <span className="text-xs">{t('airTemp')}: 22°C</span>
          </div>
          <div className="flex items-center">
            <Waves className="w-4 h-4 mr-1.5 text-blue-600" />
            <span className="text-xs">{t('waterTemp')}: 20°C</span>
          </div>
        </div>
      </div>

      {/* Currency Section */}
      <div className="bg-white rounded-lg shadow-md p-3">
        <h2 className="text-sm font-semibold mb-2">{t('currency')}</h2>
        <div className="space-y-1.5">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1.5 text-green-600" />
            <span className="text-xs">1 USD = 2.65</span>
          </div>
          <div className="flex items-center">
            <Euro className="w-4 h-4 mr-1.5 text-green-600" />
            <span className="text-xs">1 EUR = 2.85</span>
          </div>
          <div className="flex items-center">
            <CircleDollarSign className="w-4 h-4 mr-1.5 text-green-600" />
            <span className="text-xs">1 ₽ = 0.029</span>
          </div>
        </div>
      </div>
    </div>
  );
};