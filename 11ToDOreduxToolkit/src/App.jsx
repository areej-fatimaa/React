
import './App.css'
import { Provider } from 'react-redux'
import { store } from './App/Store';
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'

function App() {

  return (
    <Provider store={store}>
    <h1 >Todo List</h1>
    <AddToDo/>
    <ToDo/>
    </Provider>
  )
}

export default App
