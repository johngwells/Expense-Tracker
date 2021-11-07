import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveUserSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses for this year</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={Math.random()}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <Card className="expenses">
        <h1>Expense Tracker</h1>
        <ExpensesFilter
          selected={filteredYear}
          onUserSelectedYear={saveUserSelectedYear}
        />
        {expensesContent}
      </Card>
    </>
  );
}

export default Expenses;
