import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props)=>{


  let expensesContenet = (<h2 className="expenses-list__fallback">No Expenses Found!</h2>);

  if(props.items.length == 0){
      return expensesContenet
  }

  return <ul className="expenses-list">
      {
         props.items.map((item)=>(
          <>
          <ExpenseItem key ={item.id} title={item.title} amount={item.amount} date={item.date} />
          </>
        ))
      }
  </ul>


}

export default ExpensesList;
