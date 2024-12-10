import { type TestResult } from './types';

export const formatTestResults = (results: TestResult[]): string => {
  return results.map((result, index) => {
    let output = `Test Case ${index + 1}:\n`;
    output += `Input: [${result.input.join(', ')}]\n`;
    
    if (result.status === 'PASSED' || result.status === 'FAILED') {
      output += `Expected: ${result.expected}\n`;
      output += `Output: ${result.output}\n`;
      output += `Status: ${result.status}\n`;
    } else if (result.status === 'ERROR') {
      output += `Error: ${result.error}\n`;
    } else {
      output += `${result.message}\n`;
    }
    
    return output;
  }).join('\n');
};