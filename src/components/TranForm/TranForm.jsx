import React, { useContext } from 'react';
import  { useEffect, useState } from 'react';
import styles from './TranForm.module.css';
import { BalanceContext } from '../../Context/BalanceContxt';
import { useFormik } from 'formik';
export default function TranForm() {
  const [transactions, setTransactions] = useState([])
  let intialState = []
 let {setIncome, setExpenses, income, expance , calculate} = useContext(BalanceContext)
  if(localStorage.getItem('transactions') !== null){
    intialState = JSON.parse(localStorage.getItem('transactions'))
  }
 
  useEffect(() => {
    setTransactions(intialState)
    calculate()
  }, [intialState.legnth > 0])


  const hanldeFrom= useFormik({
    initialValues: {
      description: '',
      amount: 0,
      type: ''
    },
    onSubmit: (values) => {
      intialState.push({
        description: values.description,
        amount: values.amount,
        type: values.type
      })
      setTransactions(intialState)
      addToLoaclStorage(intialState)
      calculate()
    }
  })


  function addToLoaclStorage(x){
    localStorage.setItem('transactions', JSON.stringify(x))
  }

  return <>
    <h3>History</h3>
  <div className="container">
  <div className="card">
    {transactions.map((transaction) => {
      return <div className={styles.box}>
        <h5 className="card-title">{transaction.description}</h5>
        <p className="card-text">${transaction.amount}</p>
        <p className={transaction.type === 'income' ? 'text-success' : 'text-danger'}>{transaction.type}</p>
        <button type="button" onClick={() => {
          let newT = transactions.filter(t => t.description !== transaction.description)
          setTransactions(newT)
          addToLoaclStorage(newT)
          calculate()
        }} className="btn btn-danger" >Delete</button>
      </div>
    })}
  </div>
  </div>
    <div>
      <h2>Add a New Transaction</h2>
      <form onSubmit={hanldeFrom.handleSubmit} className="form-inline">
        <label htmlFor="name">name</label>
       <div  className="input">
       <input type="text"  name='description' onChange={(e) => hanldeFrom.values.description = e.target.value} className="form-control"  id="inputPassword2" placeholder="Description" />
       </div>
       <label htmlFor="Amount">Amount</label>
       <div className="input">
       <input type="number" name='amount' onChange={(e) => hanldeFrom.values.amount = e.target.value} className="form-control" id="inputPassword2" placeholder="Amount" />

       <div className="buttons">
       <input type="submit" onClick={() => { hanldeFrom.values.type='expance'; calculate()}} value="expance" className='btn btn-danger mx-2 mt-4' />
       <input type="submit" onClick={() =>{ hanldeFrom.values.type = 'income'; calculate()}} value="income" className='btn btn-success mx-2 mt-4' />
       </div>
       </div>

      </form>

    </div>
  </>
}
