import { createContext, useState } from "react";

export const BalanceContext = createContext();

export default function BalanceContxtProvider({ children }) {
    const [income, setIncome] = useState(0)
    const [expance, setExpenses] = useState(0)
    function calculate(){
      if(localStorage.getItem('transactions') !== null){
        let intialState = JSON.parse(localStorage.getItem('transactions'))
        let income = Number(0) 
        let expense = Number(0)
       intialState.map((item)=>{
         if(item.type === 'income'){
          income += Number(item.amount)
         }else{
          expense += Number(item.amount)
         }
       })
       setIncome(income)
       setExpenses(expense)
      }else{
        setIncome(0)
        setExpenses(0)
      }
        
       
      }


    return (
        <BalanceContext.Provider value={{setIncome, setExpenses, income, expance , calculate}}>
            {children}
        </BalanceContext.Provider>
    );
}