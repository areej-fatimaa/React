import './App.css'
import Card from './components/Card'

// let myObj = {
//   username: "gull", 
//   age: 30
// }
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'  >Tailwind test</h1>
      {/* // Passing props to Card component var is passed using curly braces  */}
      <Card username="Ania" someObj={newArray} /> 
      <Card />
    </>
  )
}

export default App
