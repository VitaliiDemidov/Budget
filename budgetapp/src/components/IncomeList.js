import React from "react";

const IncomeList = () => {
  return (
    <div className="transactions transactions-income">
      <ul className="transactions-list"></ul>
      <li className="transaction">
        <span className="transactions-text">Salary</span>
        <span className="transactions-amount">$5000</span>
        <button className="delete-btn">
          {" "}
          <i className="fas fa-trash"></i>{" "}
        </button>
      </li>
    </div>
  );
};

export default IncomeList;
