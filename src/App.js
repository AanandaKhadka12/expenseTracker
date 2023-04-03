
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id:'e1',
    title: "Cake",
    amount: 7.45,
    date: new Date(2023, 1, 5),
  },
  {
    id:'e2',
    title: "Chicken",
    amount: 18,
    date: new Date(2023, 2, 4),
  },
  {
    id:'e3',
    title: "Milk",
    amount: 7.45,
    date: new Date(2022, 2, 1),
  },
];


const App = () => {
  
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) =>{

    setExpenses((preVal)=>{


      return [expense,...preVal];

    });

  }

  return (
    <>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </>
  );
};

export default App;
