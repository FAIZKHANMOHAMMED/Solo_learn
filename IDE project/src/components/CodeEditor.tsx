import React, { useState } from 'react';
import { Play } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import OutputDisplay from './OutputDisplay';
import { languages, type Language } from '../utils/languages';
import { type TestResult } from '../utils/types';
import { runJavaScriptTests } from '../utils/testRunner';

const TEST_CASES = [
  { input: [1, 2, 3], expected: 6 },
  { input: [4, 5, 6], expected: 15 }
];

const CodeEditor: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [code, setCode] = useState(selectedLanguage.defaultCode);
  const [results, setResults] = useState<TestResult[]>([]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setCode(language.defaultCode);
    setResults([]);
  };

  const runCode = () => {
    let newResults: TestResult[];
    
    if (selectedLanguage.id === 'javascript') {
      newResults = runJavaScriptTests(code, TEST_CASES);
    } else {
      newResults = TEST_CASES.map(testCase => ({
        status: 'INFO',
        input: testCase.input,
        message: `Code execution for ${selectedLanguage.name} is simulated in this environment.`
      }));
    }
    
    setResults(newResults);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Code Editor</h2>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
        <button
          onClick={runCode}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md 
                   hover:bg-green-700 transition-colors"
        >
          <Play size={16} />
          Run Code
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-t-md">
            {selectedLanguage.name}
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[400px] p-4 font-mono text-sm bg-gray-800 text-white rounded-b-md"
            spellCheck={false}
          />
        </div>
        <OutputDisplay results={results} />
      </div>
    </div>
  );
};

export default CodeEditor;