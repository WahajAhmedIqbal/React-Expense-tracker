import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transactions: [
    { id: 1, text: "ahmed", amount: -200 },
    { id: 2, text: "Ahsan", amount: -20000 },
    { id: 3, text: "Mike", amount: 200 },
    { id: 4, text: "David", amount: 100 },
    { id: 5, text: "Chris", amount: -200 },
  ],
};

// Create Contaxt
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
