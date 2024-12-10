export interface Language {
  id: string;
  name: string;
  extension: string;
  defaultCode: string;
}

export const languages: Language[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    extension: 'js',
    defaultCode: `// Sum all numbers in the array
let sum = 0;
for (let num of nums) {
    sum += num;
}
return sum;`,
  },
  {
    id: 'python',
    name: 'Python',
    extension: 'py',
    defaultCode: `def solution(nums):
    # Sum all numbers in the array
    return sum(nums)`,
  },
  {
    id: 'java',
    name: 'Java',
    extension: 'java',
    defaultCode: `public class Solution {
    public int solution(int[] nums) {
        // Sum all numbers in the array
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return sum;
    }
}`,
  },
  {
    id: 'cpp',
    name: 'C++',
    extension: 'cpp',
    defaultCode: `class Solution {
public:
    int solution(vector<int>& nums) {
        // Sum all numbers in the array
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return sum;
    }
};`,
  },
];