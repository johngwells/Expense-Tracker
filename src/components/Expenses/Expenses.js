import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

// ExpenseFilter.js
// listen to changes on the dropdown
// a listener when user selects a picked year
// Picked value from expensefilter to the expenses component
// pass props to expenses.js
// store state on expenses.js

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveUserSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <h1>Expense Tracker</h1>
        <ExpensesFilter
          selected={filteredYear}
          onUserSelectedYear={saveUserSelectedYear}
        />
        {filteredExpenses.length === 0 && <p>No Expenses for this year</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={Math.random()}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </>
  );
}

export default Expenses;
