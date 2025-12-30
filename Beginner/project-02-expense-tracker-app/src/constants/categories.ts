// Beginner\project-02-expense-tracker-app\src\constants\categories.ts
export const CATEGORIES = ["Food", "Travel", "Bills"] as const;
export type Category = typeof CATEGORIES[number];
