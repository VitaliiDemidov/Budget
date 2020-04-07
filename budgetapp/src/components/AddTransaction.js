import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: "",
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const heandleSubmit = (e) => {
    e.preventDefault();
    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: +incomeAmount,
      };
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: "",
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: "",
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const expenseSubmit = (e) => {
    e.preventDefault();
    setExpense({
      expenseText: "",
      expenseAmount: "",
    });
    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: +expenseAmount,
      };
      addExpense(newExpenseTransaction);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={heandleSubmit}>
        <div className="input-group income">
          <input
            value={incomeText}
            name="incomeText"
            type="text"
            placeholder="Add income.."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            value={incomeAmount}
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
            value={expenseText}
            name="expenseText"
            type="text"
            placeholder="Add Expense.."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            value={expenseAmount}
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
