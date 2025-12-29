import { useState } from "react";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
