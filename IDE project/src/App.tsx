import React from 'react';
import Problem from './components/Problem';
import CodeEditor from './components/CodeEditor';
import { Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">CodeRunner</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Problem />
          <CodeEditor />
        </div>
      </main>
    </div>
  );
}

export default App;