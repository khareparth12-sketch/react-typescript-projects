import { useState } from 'react';
import type { Expense} from './types/expense'

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);


  return (
    <div>
      <h1>Expense Tracker App</h1>
    </div>
  )
}

export default App;