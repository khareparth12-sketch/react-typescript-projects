// Beginner\project-02-expense-tracker-app\src\App.tsx
import { useState } from "react";
import type { Expense } from "./types/expense";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
//import type { Category } from "../constants/categories";
import { CATEGORIES } from "./constants/categories";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      id: Date.now(),
      ...expense,
    };

    setExpenses((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const filteredExpenses =
    selectedCategory === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const totalAmount = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="app">
      <h1>Expense Tracker App</h1>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>

        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <h2>Total: ₹{totalAmount}</h2>

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />

      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default App;
