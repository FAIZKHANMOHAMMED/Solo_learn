import React from 'react';
import { type TestResult } from '../utils/types';
import { formatTestResults } from '../utils/formatOutput';

interface OutputDisplayProps {
  results: TestResult[];
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ results }) => {
  const formattedOutput = formatTestResults(results);

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-t-md">
        Output
      </div>
      <div className="h-[400px] p-4 font-mono text-sm bg-gray-800 text-white rounded-b-md overflow-auto whitespace-pre">
        {formattedOutput}
      </div>
    </div>
  );
};

export default OutputDisplay;