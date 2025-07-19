import './App.css'
import { use, useState } from 'react'; 

function App() {
 let [counter,setCounter]=useState(15)  //reponsible for change in state
 //useState is a hook that allows you to add state to functional components
 //useState returns an array with two elements: the current state value and a function to update
 //the state value. The first element is the current state value, and the second element is
 //a function that can be used to update the state value.
 //The initial state value is passed as an argument to useState.
 //When the state is updated, React re-renders the component with the new state value.


  const addValue = () => {
    // count = count + 1;
    // console.log(count)
    if (counter >= 20) {
      alert("Counter value cannot be greater than 20");
      return;
    }
    setCounter(counter + 1); //this will update the state and re-render the component
  }
  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - 1); //this will update the state and re-render the component
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value:{counter}</h2>
      <button 
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
