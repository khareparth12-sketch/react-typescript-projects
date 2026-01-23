// Beginner\project-02-expense-tracker-app\src\components\ExpenseItem.tsx
import type { Expense } from "../types/expense";

type ExpenseItemProps = {
  expense: Expense;
  onDelete: (id: number) => void;
};

function ExpenseItem({ expense, onDelete }: ExpenseItemProps) {
  return (
    <li>
      <strong>{expense.title}</strong> — ₹{expense.amount} ({expense.category})
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
