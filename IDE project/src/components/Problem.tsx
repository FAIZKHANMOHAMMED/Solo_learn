import React from 'react';

const Problem: React.FC = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Sum of Array</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Problem Description</h2>
            <p className="text-gray-700">
              Given an array of integers nums, return the sum of all elements in the array.
            </p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold">Examples</h2>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Example 1:</p>
                <p>Input: nums = [1, 2, 3]</p>
                <p>Output: 6</p>
                <p>Explanation: 1 + 2 + 3 = 6</p>
              </div>
              
              <div>
                <p className="font-medium">Example 2:</p>
                <p>Input: nums = [4, 5, 6]</p>
                <p>Output: 15</p>
                <p>Explanation: 4 + 5 + 6 = 15</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold">Constraints</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>1 ≤ nums.length ≤ 100</li>
              <li>-100 ≤ nums[i] ≤ 100</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;