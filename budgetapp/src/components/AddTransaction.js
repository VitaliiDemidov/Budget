import React from "react";

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <form>
        <div className="input-group income">
          <input type="text" placeholder="Add income.." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>

      <form>
        <div className="input-group income">
          <input type="text" placeholder="Add Expense.." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
