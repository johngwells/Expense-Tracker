import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // Alternative
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value
    });

    // if your state is dependent on the previous state Ex: counter etc.
    // setUserInput((prevState) => {
    //   return { ...userInput, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    // console.log(inputData)

    props.onSaveExpenseData(inputData);

    // Clear Data
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
