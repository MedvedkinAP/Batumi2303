import React, { useState, ChangeEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AiAssistant: React.FC = () => {
  const { t } = useTranslation();
  const [question, setQuestion] = useState('');

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    
    // Reset height to auto to properly calculate new height
    textarea.style.height = 'auto';
    
    // Set new height based on scrollHeight, but cap it at 5 lines (approximately 120px)
    const newHeight = Math.min(textarea.scrollHeight, 120);
    textarea.style.height = `${newHeight}px`;
    
    setQuestion(textarea.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
        <h2 className="text-lg font-semibold">{t('aiAssistant')}</h2>
      </div>
      <div className="border rounded-lg p-4 bg-gray-50">
        <p className="text-sm text-gray-600">
          {t('aiAssistant.helpText')}
        </p>
        <textarea
          value={question}
          onChange={handleInput}
          placeholder={t('aiAssistant.inputPlaceholder')}
          className="w-full mt-4 p-2 border rounded resize-none overflow-hidden min-h-[38px] max-h-[120px]"
          rows={1}
        />
      </div>
    </div>
  );
};