export interface Language {
  id: string;
  name: string;
  extension: string;
  defaultCode: string;
}

export interface TestCase {
  input: number[];
  expected: number;
}

export interface BaseTestResult {
  status: 'PASSED' | 'FAILED' | 'ERROR' | 'INFO';
  input: number[];
}

export interface SuccessTestResult extends BaseTestResult {
  status: 'PASSED' | 'FAILED';
  expected: number;
  output: number;
  passed: boolean;
}

export interface ErrorTestResult extends BaseTestResult {
  status: 'ERROR';
  error: string;
}

export interface InfoTestResult extends BaseTestResult {
  status: 'INFO';
  message: string;
}

export type TestResult = SuccessTestResult | ErrorTestResult | InfoTestResult;