import React, { useState ,useEffect, useContext, useRef } from 'react';
import styles from './Home.module.css';
import FirstSec from '../FirstSec/FirstSec';
import Balance from '../Balance/Balance';
import TranForm from '../TranForm/TranForm';
import { BalanceContext } from '../../Context/BalanceContxt';
import img from '../../assesits/bCAT.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {

  const animation= useRef()
  useGSAP(() => {
    gsap.from(animation.current, {
      duration: 3,
      opacity: 0,
      y: -100
    })
  })


 let intialState = []
 let{income, expance, calculate}= useContext(BalanceContext)

  if(localStorage.getItem('transactions') !== null){
    intialState = JSON.parse(localStorage.getItem('transactions'))
  }

  
  useEffect(() => {
    calculate()
  }, [intialState.legnth > 0])

  return <>
  <div ref={animation}>
  <img src={img} className={styles.img} alt="" />
  <div className={`container ${styles.holbg}`}>
  <FirstSec />
   <Balance income={income} expance={expance} />
    <TranForm />
  </div>
 
  </div>

  </>
}
