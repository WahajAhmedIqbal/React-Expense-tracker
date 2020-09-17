import React, { useContext } from "react";
import { GlobalContext } from "../contaxt/GlobalState";
import Transection from "./Transection";

function TransectionList() {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transection key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransectionList;
