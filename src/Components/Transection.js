import React, { useContext } from "react";
import { GlobalContext } from "../contaxt/GlobalState";

function Transection({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sing = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sing} $ {Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default Transection;
