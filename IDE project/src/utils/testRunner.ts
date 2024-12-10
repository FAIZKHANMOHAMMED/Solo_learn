import { type TestCase, type TestResult } from './types';

export const runJavaScriptTests = (code: string, testCases: TestCase[]): TestResult[] => {
  const results: TestResult[] = [];
  
  try {
    const functionBody = code.includes('return') ? code : `
      function solution(nums) {
        ${code}
      }
      return solution(nums);
    `;
    
    const userFunction = new Function('nums', functionBody);
    
    for (const testCase of testCases) {
      try {
        const result = userFunction(testCase.input);
        const passed = result === testCase.expected;
        results.push({
          status: passed ? 'PASSED' : 'FAILED',
          input: testCase.input,
          expected: testCase.expected,
          output: result,
          passed
        });
      } catch (error) {
        results.push({
          status: 'ERROR',
          input: testCase.input,
          error: error.message
        });
      }
    }
  } catch (error) {
    results.push({
      status: 'ERROR',
      input: [],
      error: error.message
    });
  }
  
  return results;
};