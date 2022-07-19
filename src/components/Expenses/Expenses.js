import React, {useState} from 'react';

import ExpensesList from '../ExpensesList/ExpensesList';
import Card from '../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import './Expenses.css';



const Expenses = (props)=> {

  const [filteredYear, setfilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear)=>{
    setfilteredYear(selectedYear)

  }


  let filteredExpenses = props.items.filter((el)=> {
    return el.date.getFullYear() == filteredYear ;

  });



  return (
    <>
    <div className="container">

    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler}/>

      <ExpensesChart expenses={filteredExpenses}/>

      <ExpensesList items={filteredExpenses}/>

    </Card>
    </div>
    </>
  )

}

export default Expenses;
