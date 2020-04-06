import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ExpenseTransaction({ expenseTransactions }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className="transaction">
      <span className="transactions-text">
        {expenseTransactions.expenseText}
      </span>
      <span className="transactions-amount">
        ${expenseTransactions.expenseAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(expenseTransactions.id)}
      >
        {" "}
        <i className="fas fa-trash"></i>{" "}
      </button>
    </li>
  );
}

export default ExpenseTransaction;
