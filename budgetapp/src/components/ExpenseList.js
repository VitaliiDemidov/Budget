import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <ul className="transactions-list"></ul>
      {expenseTransactions.map((expenseTransactions) => (
        <ExpenseTransaction
          expenseTransactions={expenseTransactions}
          key={expenseTransactions.id}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
