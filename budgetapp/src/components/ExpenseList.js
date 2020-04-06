import React from "react";

const ExpenseList = () => {
  return (
    <div className="transactions transactions-expense">
      <ul className="transactions-list"></ul>
      <li className="transaction">
        <span className="transactions-text">Rent</span>
        <span className="transactions-amount">$400</span>
        <button className="delete-btn">
          {" "}
          <i className="fas fa-trash"></i>{" "}
        </button>
      </li>
    </div>
  );
};

export default ExpenseList;
