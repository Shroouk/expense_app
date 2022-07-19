import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm'

const NewExpense = (props)=>{

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };


  const startEditingHandler = ()=>{
    setIsEditing(true);
  }

  const stopEditingHandler = ()=>{
    setIsEditing(false);
  }


  return (
    <div className='new-expense'>

      {!isEditing && <button onClick={startEditingHandler}> ADD NEW EXPENSE </button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;
