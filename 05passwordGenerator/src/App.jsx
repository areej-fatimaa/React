import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
//useRef is a react hook that lets you create a mutable object that persists for the lifetime of the component
  //it is used to store a reference to a DOM element or a value that does not trigger a re-render when changed
  //it is used to access the DOM directly without causing a re-render
  //it is used to store a value that does not need to trigger a re-render when changed
  //it is used to store a value that needs to persist between re-renders
  //it is used to store a value that needs to be accessed in an event handler
  //it is used to store a value that needs to be accessed in a callback function
  //it is used to store a value that needs to be accessed in an effect hook
  //it is used to store a value that needs to be accessed in a memoized function
  //it is used to store a value that needs to be accessed in a ref callback
  //it is used to store a value that needs to be accessed in a useImperative

  const passwordRef = useRef(null);

  //use callback is a react hook that lets you cache a function defination between re-renders
  //it is used to prevent unnecessary re-renders of child components that depend on the function
  //it is used to optimize performance by preventing unnecessary re-renders
  //it is used to memoize a function so that it does not change between re-renders
  //it is used to pass a function as a prop to a child component without causing unnecessary re-renders
  //it is used to prevent the creation of a new function on every re-render
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = 
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,100); // For mobile devices
  window.navigator.clipboard.writeText(password);
}, [password]);

    //use effect synchronise the component with external systems
  //it is used to perform side effects in a functional component
  //it is used to fetch data, update the DOM, or perform any other side effect
  //it is used to run a function after the component has rendered
  useEffect(()=>{
    passwordGenerator();
  },[length, numbers, characters, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 text-orange-500 bg-gray-700">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Password Generator
        </h1>
        <div className="flex shadow bg-white  rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="text-gray-500 outline-none w-full py-3 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          ></input>
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text sm gap-x-2">
          <div className="flex text sm gap-x-1">
            <input
              type="range"
              min="6"
              max="100"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numbers"
              onChange={() => setNumbers((prev) => !prev)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characters"
              onChange={() => setCharacters((prev) => !prev)}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
