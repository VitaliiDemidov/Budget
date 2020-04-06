import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 1500 },
    { id: 2, incomeText: "Salary", incomeAmount: 200 },
    { id: 3, incomeText: "Bonus", incomeAmount: 700 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: "Buy car", expenseAmount: 1300 },
    { id: 5, expenseText: " Taxes", expenseAmount: 500 },
    { id: 6, expenseText: "Bank", expenseAmount: 600 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = (incomeTransactions) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransactions,
    });
  };
  const addExpense = (expenseTransactions) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransactions,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
