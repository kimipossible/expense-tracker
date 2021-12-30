import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DummyData = [
  {
    id: "e1",
    title: "Rent",
    amount: 7500.0,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 3000.65,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Petrol",
    amount: 500.0,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Insurance",
    amount: 1843.47,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
