// Beginner\project-02-expense-tracker-app\src\components\ExpenseForm.tsx
import { useState, type FormEvent } from "react";
import { CATEGORIES, type Category } from "../constants/categories";
import type { Expense } from "../types/expense";

type ExpenseFormProps = {
  onAddExpense: (expense: Omit<Expense, "id">) => void;
};


function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<Category | "">("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title || amount <= 0 || !category) return;

    onAddExpense({
      title,
      amount,
      category,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
      >
        <option value="">Select category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
