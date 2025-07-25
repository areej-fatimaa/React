import { useEffect,useState } from 'react';
import './App.css'
import { ToDoProvider } from './contexts';
import ToDoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev]);
  };
const updateTodo = (id, todo) => {
  setTodos((prev) =>
    prev.map((item) => (item.id === id ? { ...item, ...todo } : item))
  );
};
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((item) => item.id !== id));
};
const toggleComplete = (id) => {
  setTodos((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  );
};

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  if(storedTodos.length > 0) {
    setTodos(storedTodos);
  }
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
  return (
    <ToDoProvider value={{ todos, addTodo,updateTodo, deleteTodo, toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
