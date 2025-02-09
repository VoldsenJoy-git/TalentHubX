import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];
export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
  // Write your solution here
}`,
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 ≤ nums[i] ≤ 10^9",
      "-10^9 ≤ target ≤ 10^9",
      "Only one valid answer exists."
    ],
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    description:
      "Implement the Merge Sort algorithm, which sorts an array in ascending order.",
    examples: [
      {
        input: "arr = [5, 2, 9, 1, 5, 6]",
        output: "[1, 2, 5, 5, 6, 9]",
      },
    ],
    starterCode: {
      cpp: `void mergeSort(vector<int>& arr) {
  // Write your solution here
}`,
      javascript: `function mergeSort(arr) {
  // Write your solution here
}`,
      python: `def merge_sort(arr):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void mergeSort(int[] arr) {
        // Write your solution here
    }
}`,
    },
    constraints: [
      "1 ≤ arr.length ≤ 10^5",
      "-10^9 ≤ arr[i] ≤ 10^9",
    ],
  },
  {
    id: "coin-change",
    title: "Coin Change",
    description:
      "Given an array of coin denominations and a target amount, return the minimum number of coins required to make up that amount. If it's not possible, return -1.",
    examples: [
      {
        input: "coins = [1, 2, 5], amount = 11",
        output: "3",
        explanation: "11 can be made with 5+5+1, which requires 3 coins.",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
    ],
    starterCode: {
      cpp: `int coinChange(vector<int>& coins, int amount) {
  // Write your solution here
}`,
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
}`,
      python: `def coin_change(coins, amount):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        // Write your solution here
    }
}`,
    },
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "1 ≤ coins[i] ≤ 2^31 - 1",
      "0 ≤ amount ≤ 10^4",
    ],
  },
];

export const LANGUAGES = [
  { id: "cpp", name: "C++", icon: "/cpp.png" },
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    cpp: string;
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
