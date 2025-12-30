// Beginner\project-02-expense-tracker-app\src\types\expense.ts
import type { Category } from "../constants/categories";

export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: Category;
};

