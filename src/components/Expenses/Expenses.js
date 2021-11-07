import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveUserSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <h1>Expense Tracker</h1>
        <ExpensesFilter
          selected={filteredYear}
          onUserSelectedYear={saveUserSelectedYear}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
