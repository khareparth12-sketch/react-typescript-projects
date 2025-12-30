// Beginner\project-02-expense-tracker-app\src\components\ExpenseList.tsx
import type { Expense } from "../types/expense";
import ExpenseItem from "./ExpenseItem";

type ExpenseListProps = {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
};

function ExpenseList({ expenses, onDeleteExpense }: ExpenseListProps) {
  if (expenses.length === 0) {
    return <p>No expenses yet. Stop being cheap.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDeleteExpense}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
