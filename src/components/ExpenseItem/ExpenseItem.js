import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../UI/Card/Card'
import './ExpenseItem.css';

const ExpenseItem = (props)=> {

const [title, setTitle] = useState(props.title)

//console.log("executed")



  return (
    <li>
    <Card className='expense-item'>
       <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>$ {props.amount}</div>
        </div>
      </Card>
      </li>
  )

}

export default ExpenseItem;
