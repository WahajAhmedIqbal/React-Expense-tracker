import React, { useContext } from "react";
import { GlobalContext } from "../contaxt/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amouts = transactions.map((transaction) => transaction.amount);

  const income = amouts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amouts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Icome</h4>
        <p id="money-plus" className="money plus">
          {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
