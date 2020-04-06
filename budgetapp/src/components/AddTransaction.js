import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const heandleSubmit = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: +incomeAmount,
    };
    addIncome(newIncomeTransaction);
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const expenseSubmit = (e) => {
    e.preventDefault();
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: +expenseAmount,
    };
    addExpense(newExpenseTransaction);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={heandleSubmit}>
        <div className="input-group income">
          <input
            name="incomeText"
            type="text"
            placeholder="Add income.."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            name="incomeAmount"
            type="number"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>

      <form onSubmit={expenseSubmit}>
        <div className="input-group expense">
          <input
            name="expenseText"
            type="text"
            placeholder="Add Expense.."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            name="expenseAmount"
            type="number"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
