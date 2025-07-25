import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../Features/ToDo/ToDoSlice";

function ToDo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const toggleCompleted = (id) => {
    dispatch(toggleTodo(id));
  };
  const [isTodoEditable, setIsTodoEditable] = React.useState(null);
  const [todoMsg, setTodoMsg] = React.useState("");
  const editTodo = (id) => {
    dispatch(updateTodo({ id, text: todoMsg }));
    setIsTodoEditable(null);
    setTodoMsg("");
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded gap-4"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="cursor-pointer w-5 h-5"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <div className="text-white">
              {isTodoEditable === todo.id ? (
                <input
                  type="text"
                  value={todoMsg}
                  onChange={(e) => setTodoMsg(e.target.value)}
                  className="flex-1 bg-gray-700 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <div className={`flex-1 text-white ${todo.completed ? 'line-through opacity-50' : ''}`}>{todo.text}</div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm flex items-center justify-center disabled:opacity-50"
              onClick={() => {
                if (todo.completed) return;

                if (isTodoEditable===todo.id) {
                  editTodo(todo.id);
                } else setIsTodoEditable(todo.id);
                setTodoMsg(todo.text);
              }}
              disabled={todo.completed}
            >
              {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
              //if we use like this usedispattch() it will directly execute but we want it to work on click so we use call back
              onClick={() => dispatch(removeTodo(todo.id))}
              className="w-9 h-9 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;
