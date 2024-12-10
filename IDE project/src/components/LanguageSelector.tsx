import React from 'react';
import { languages, type Language } from '../utils/languages';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-select" className="text-sm font-medium text-gray-700">
        Language:
      </label>
      <select
        id="language-select"
        value={selectedLanguage.id}
        onChange={(e) => {
          const language = languages.find((lang) => lang.id === e.target.value);
          if (language) onLanguageChange(language);
        }}
        className="block w-40 rounded-md border-gray-300 shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      >
        {languages.map((language) => (
          <option key={language.id} value={language.id}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;