import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactinList from './Components/TransactinList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactinList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App;
