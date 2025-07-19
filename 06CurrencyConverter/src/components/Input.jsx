import React,{useId} from 'react'
//useid is used to generate unique ids for accessibility purposes
//it is useful when you have multiple inputs in a form and you want to associate labels with them
function Input( {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions=[],
        selectCurrency="INR",
        amountDiable=false,
        currencyDisable=false,

    className="",
}){
const amountInputId=useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
        {label}
        </label>
        <input 
        id={amountInputId}
        type="number" className="outline-none w-full bg-transparent py-1.5" 
        placeholder="Amount"
        disabled={amountDiable}
        value={amount}
        onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
        />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pinter outline-none"
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
           {currencyOptions.map((currency)=>(
            //if you want performance in loop use key
            <option key={currency} value={currency}>
                {currency}
            </option>
           ))}
        </select>
        </div>
    </div>
  )
}

export default Input