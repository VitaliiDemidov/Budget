import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <ul className="transactions-list"></ul>
      {incomeTransactions.map((incomeTransactions) => (
        <IncomeTransaction
          incomeTransactions={incomeTransactions}
          key={incomeTransactions.id}
        />
      ))}
    </div>
  );
};

export default IncomeList;
