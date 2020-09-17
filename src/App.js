import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransectionList from "./Components/TransectionList";
import AddTransection from "./Components/AddTransection";

import { GlobalProvider } from "./contaxt/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransectionList />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}

export default App;
