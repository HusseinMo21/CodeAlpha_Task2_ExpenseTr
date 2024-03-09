import React, { useEffect, useState } from 'react';
import styles from './Balance.module.css';

export default function Balance({income , expance}) {
 
  return <>
   <div className="container">
 <div className="text-center">
 <h2 className='text-white border border-success rounded p-2 h1'>Balance</h2>
    <h2 className='text-white'>${Number(income) - Number(expance)}</h2>
   
 </div>
    <div className="box d-flex justify-content-around align-items-center">
      <div id='income' className={styles.Income}>
        <h3>Income</h3>
        <p className='text-white text-center'>${income}</p>
      </div>
      <div id='expance' className={styles.Expenses}>
        <h3>Expenses</h3>
        <p className='text-white text-center'> ${expance}</p>
      </div>
    </div>
   </div>

  </>
}
