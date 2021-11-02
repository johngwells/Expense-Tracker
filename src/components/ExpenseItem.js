import './ExenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>11/01/21</div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">Car Insurance</h2>
        <div className="expense-item__price">161.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
